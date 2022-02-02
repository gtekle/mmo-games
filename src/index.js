import './style.css';
import ICON from './assets/img/logo.png';
import gamesApi from './modules/GamesAPI.js';
import involvementApi from './modules/InvolvementAPI.js';
import renderGame from './components/GameUI.js';

window.addEventListener('load', async () => {
  const logoContainer = document.querySelector('.logo-container');
  const logoIcon = new Image();
  logoIcon.src = ICON;
  logoContainer.appendChild(logoIcon);

  await gamesApi.getGames();
  await involvementApi.getLikes();

  gamesApi.games.forEach((game) => {
    if (game.id < 10) {
      const gameLikes = involvementApi.appLikes.find(item => item.item_id === game.id);

      game.likes = gameLikes ? gameLikes.likes : 0;

      renderGame(game);
    }
  });
});