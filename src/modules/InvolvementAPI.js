const fetchCommentById = async (gameId) => {
  let dataJson;
  try {
    const data = await fetch(`${process.env.INVOLVEMENT_API_BASE_URL}${process.env.APP_ID}/comments?item_id=${gameId}`);
    dataJson = await data.json();
  } catch (error) {
    dataJson = error.status;
  }
  return dataJson;
};

const postCommentByItemId = async (gameId, username, comment) => {
  let responseStatus;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: gameId,
      username,
      comment,
    }),
  };
  try {
    const response = await fetch(`${process.env.INVOLVEMENT_API_BASE_URL}${process.env.APP_ID}/comments`, requestOptions);
    responseStatus = response.status;
  } catch (error) {
    responseStatus = error;
  }
  return responseStatus;
};

class InvolvementAPI {
  constructor() {
    this.appLikes = [];
    this.comments = [];
    this.currentResponseStatus = [];
  }

  async fetchLikes() {
    this.appLikes.push(...await fetch(`${process.env.INVOLVEMENT_API_BASE_URL}${process.env.APP_ID}/likes`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error));
  }

  async getLikes() {
    if (this.appLikes.length === 0) {
      await this.fetchLikes();
    }

    return this.appLikes;
  }

  async getCommentsById(gameId) {
    let result = [];
    if (this.comments.length >= 0) {
      let checkData;
      this.comments.forEach((element) => {
        if (element.item_id === gameId) {
          checkData = element.comments;
        }
      });
      if (checkData) {
        result = checkData;
      } else {
        try {
          result = await fetchCommentById(gameId);
          this.comments.push({
            item_id: gameId,
            comments: result,
          });
        } catch (error) {
          result = error.status;
        }
      }
    }
    return result;
  }

  async postCommentByItemId(gameId, username, comment) {
    this.currentResponseStatus = await postCommentByItemId(gameId, username, comment);
    return this.currentResponseStatus;
  }
}

const involvementApi = new InvolvementAPI();

export default involvementApi;
