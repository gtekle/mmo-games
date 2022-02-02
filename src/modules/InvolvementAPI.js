class InvolvementAPI {
  constructor() {
    this.appLikes = [];
    this.appComments = [];
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

  static async fetchComments() {
    let dataJson;
    try {
      const data = await fetch(`${process.env.INVOLVEMENT_API_BASE_URL}${process.env.APP_ID}/comments`);
      dataJson = await data.json();
    } catch (error) {
      console.log(error);
    }
    return dataJson;
  }

  async getComments() {
    if (this.appComments.length === 0) {
      await this.fetchComments();
    }
    console.log(this.appComments);
    return this.appComments;
  }
}

const involvementApi = new InvolvementAPI();

export default involvementApi;