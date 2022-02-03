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

  static async fetchCommentsById(gameId) {
    let dataJson;
    try {
      const data = await fetch(`${process.env.INVOLVEMENT_API_BASE_URL}${process.env.APP_ID}/comments?item_id=${gameId}`);
      dataJson = await data.json();
    } catch (error) {
      console.log(error);
    }
    return dataJson;
  }

  static async postCommentByItemId(gameId, username, comment) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: gameId,
        username,
        comment,
      }),
    };
    const response = await fetch(`${process.env.INVOLVEMENT_API_BASE_URL}${process.env.APP_ID}/comments?item_id=${gameId}`, requestOptions);
    return response;
  }
}

const involvementApi = new InvolvementAPI();

export default involvementApi;
