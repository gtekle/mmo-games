const GAMES_API_BASE_URL = 'https://mmo-games.p.rapidapi.com';
const HOST = 'mmo-games.p.rapidapi.com';
const API_KEY = 'dbb7593505mshdb2b499e2f3acf1p12c4c1jsn93ec8e29d6c6';

class GamesApi {
  constructor() {
    this.games = [];
  }

  async getGames() {
    this.games.push(...await fetch(`${GAMES_API_BASE_URL}/games`,
      {
        headers: {
          'x-rapidapi-host': HOST,
          'x-rapidapi-key': API_KEY,
        },
      })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error));
    return this.games;
  }
}

const gamesApi = new GamesApi();
gamesApi.getGames();

export default gamesApi;