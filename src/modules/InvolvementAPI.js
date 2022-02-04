class InvolvementAPI {
  constructor() {
    this.appLikes = [];
    this.comments = [];
    this.responseStatus = 200;
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

  async fetchCommentById(gameId) {
    try {
      const data = await fetch(`${process.env.INVOLVEMENT_API_BASE_URL}${process.env.APP_ID}/comments?item_id=${gameId}`);
      this.comments = await data.json();
    } catch (error) {
      this.comments = error;
    }
    return this.comments;
  }

  async postCommentByItemId(gameId, username, comment) {
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
      this.responseStatus = response.status;
    } catch (error) {
      this.responseStatus = error;
    }
    return this.responseStatus;
  }
}

const involvementApi = new InvolvementAPI();

export default involvementApi;
