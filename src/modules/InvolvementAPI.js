class InvolvementAPI {
  constructor() {
    this.appLikes = [];
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

  // eslint-disable-next-line class-methods-use-this
  async fetchCommentById(gameId) {
    let dataJson;
    try {
      const data = await fetch(`${process.env.INVOLVEMENT_API_BASE_URL}${process.env.APP_ID}/comments?item_id=${gameId}`);
      dataJson = await data.json();
    } catch (error) {
      dataJson = error;
    }
    return dataJson;
  }

  // eslint-disable-next-line class-methods-use-this
  async postCommentByItemId(gameId, username, comment) {
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
      console.log(error);
    }
    return responseStatus;
  }
}

const involvementApi = new InvolvementAPI();

export default involvementApi;
