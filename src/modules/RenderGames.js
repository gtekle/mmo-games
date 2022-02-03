import gamesApi from "./GamesAPI.js";
import involvementApi from "./InvolvementAPI.js";
import renderGame from "../components/GameUI.js";

const renderGames = (page) => {
  gamesApi.games.slice(page * 15, page * 15 + 15).forEach((game) => {
    const gameLikes = involvementApi.appLikes.find((item) => item.item_id === game.id);
    game.likes = gameLikes ? gameLikes.likes : 0;
    renderGame(game);
  });
}

export default renderGames;