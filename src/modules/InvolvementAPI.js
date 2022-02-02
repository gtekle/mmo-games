const INVOLVEMENT_API_BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const APP_ID = 'jR2b1a7YUQNXOQh80WK2';

class InvolvementAPI {
  constructor() {
    this.appLikes = [];
  }

  async fetchLikes() {
    this.appLikes.push(...await fetch(`${INVOLVEMENT_API_BASE_URL}${APP_ID}/likes`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error));
  };

  async getLikes() {
    if (this.appLikes.length === 0) {
      await this.fetchLikes();
    }

    return this.appLikes;
  };
}

const involvementApi = new InvolvementAPI();

export default involvementApi;
