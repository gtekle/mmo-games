import API_KEY from '../../config.js';

const GAMES_API_BASE_URL = 'https://mmo-games.p.rapidapi.com';
const HOST = 'mmo-games.p.rapidapi.com';

class GamesApi {
  static pageNumber = 0;

  constructor() {
    this.games = [];
  }

  getNumberOfGames() { return this.games.length; }

  async getGames() {
    this.pageNumber = 0;

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

  getGameById(gameId) {
    const filteredGameById = this.games.find((game) => game.id === gameId);
    return filteredGameById;
  }
}

const gamesApi = new GamesApi();

export default gamesApi;