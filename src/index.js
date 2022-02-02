import './style.css';
import ICON from './assets/img/logo.png';
import gamesApi from './modules/GamesAPI.js';
import renderGame from './components/GameUI.js';
import renderCommentsPopUp from './components/GameCommentUI.js';
import deletePopUpIcon from './assets/img/icons/icons8-delete-64.png';

const commentPopUpForm = document.querySelector('#comment-add-comment-form');
const commentPopUpSection = document.querySelector('#comment-popup-section');
const deletePopUpIconElementContainer = document.querySelector('#delete-popup');
const mainContainer = document.querySelector('#games-list');

commentPopUpForm.addEventListener('submit', (event) => {
  event.preventDefault(); // console.log('test function to make comment call');
  event.target.reset();
});

deletePopUpIconElementContainer.addEventListener('click', () => {
  commentPopUpSection.style.display = 'none';
});

mainContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-comments')) {
    // Add Delete Icon to Pop Up Page
    const deleteIcon = new Image();
    deleteIcon.src = deletePopUpIcon;
    deletePopUpIconElementContainer.replaceChildren(deleteIcon);
    commentPopUpSection.style.display = 'block';

    // Add Info About Games Selected
    // const gameImageElement = document.querySelector('#game-image');
    // const nameOfGameElement = document.querySelector('#name-of-game');
    // const shortGameDescriptionElement = document.querySelector('#short-description');
    // const gameUrlElement = document.querySelector('#game-url');
    // const gameGenreElement = document.querySelector('#genre');
    // const gamePlatformElement = document.querySelector('#platform');
    // const gamePublisherElement = document.querySelector('#publisher');
    // const gameReleaseDateElement = document.querySelector('#release-date');
    const currentGame = gamesApi.getGameById(Number(event.target.id));
    console.log(currentGame);
    renderCommentsPopUp(currentGame);
  }
});

window.addEventListener('load', () => {
  commentPopUpSection.style.display = 'none';
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