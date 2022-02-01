import './style.css';
import ICON from './assets/img/logo.png';
import gamesApi from './modules/GamesAPI.js';
import renderGame from './components/GameUI.js';

window.addEventListener('load', () => {
  const logoContainer = document.querySelector('.logo-container');
  const logoIcon = new Image();
  logoIcon.src = ICON;
  logoContainer.appendChild(logoIcon);

  gamesApi.games.forEach((game) => {
    if (game.id < 10) {
      renderGame(game);
    }
  });

});