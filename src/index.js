import './style.css';
import ICON from './assets/img/logo.png';
import gamesApi from './modules/GamesAPI.js';
import renderGame from './components/GameUI.js';
import renderCommentsPopUp from './components/GameCommentUI.js';

const commentPopUpSectionElement = document.querySelector('#comment-popup-section');
const mainContainerElement = document.querySelector('#main');
const mainContainer = document.querySelector('#games-list');

commentPopUpSectionElement.addEventListener('submit', (event) => {
  if (event.targert.id === 'comment-add-comment-form') {
    event.preventDefault();
    event.target.reset();
  }
});

commentPopUpSectionElement.addEventListener('click', (event) => {
  if (event.target.id === 'delete-popup') {
    commentPopUpSectionElement.style.display = 'none';
    mainContainerElement.style.display = 'block';
  }
});

mainContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-comments')) {
    commentPopUpSectionElement.style.display = 'block';
    mainContainerElement.style.display = 'none';
    const currentGame = gamesApi.getGameById(Number(event.target.id / 100));
    renderCommentsPopUp(currentGame);
  }
});

window.addEventListener('load', () => {
  commentPopUpSectionElement.style.display = 'none';
  const logoContainer = document.querySelector('.logo-container');
  const logoIcon = new Image();
  logoIcon.src = ICON;
  logoContainer.appendChild(logoIcon);
});

setTimeout(() => {
  gamesApi.games.forEach((game) => {
    if (game.id < 10) {
      renderGame(game);
    }
  });
}, 5000);