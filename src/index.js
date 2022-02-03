import './style.css';
import ICON from './assets/img/logo.png';
import gamesApi from './modules/GamesAPI.js';
import involvementApi from './modules/InvolvementAPI.js';
import renderGame from './components/GameUI.js';
import renderCommentsPopUp from './components/GameCommentUI.js';
import renderServerMessage from './components/serverMessageUI';

const commentPopUpSectionElement = document.querySelector('#comment-popup-section');
const mainContainerElement = document.querySelector('#main');
const mainContainer = document.querySelector('#games-list');

commentPopUpSectionElement.addEventListener('submit', async (event) => {
  event.preventDefault();
  const gameIdSelected = event.target.elements[2].id;
  const result = await involvementApi.postCommentByItemId(
    gameIdSelected, event.target.elements[0].value, event.target.elements[1].value,
  );
  const serverMessageContaier = document.querySelector('#server-message-prompt');
  if (result === 201) {
    renderServerMessage(serverMessageContaier, 'comment posted succesfully', 3500);
  } else {
    renderServerMessage(serverMessageContaier, 'comment failed to be posted. Please refresh & try again', 3500);
  }
  event.target.reset();
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

window.addEventListener('load', async () => {
  commentPopUpSectionElement.style.display = 'none';
  const logoContainer = document.querySelector('.logo-container');
  const logoIcon = new Image();
  logoIcon.src = ICON;
  logoContainer.appendChild(logoIcon);

  await gamesApi.getGames();
  await involvementApi.getLikes();

  gamesApi.games.forEach((game) => {
    if (game.id < 10) {
      const gameLikes = involvementApi.appLikes.find((item) => item.item_id === game.id);

      game.likes = gameLikes ? gameLikes.likes : 0;

      renderGame(game);
    }
  });
});