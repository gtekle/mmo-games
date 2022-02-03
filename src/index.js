import './style.css';
import ICON from './assets/img/logo.png';
import gamesApi from './modules/GamesAPI.js';
import involvementApi from './modules/InvolvementAPI.js';
import renderGames from './modules/RenderGames.js';
import renderCommentsPopUp from './components/GameCommentUI.js';
import populateComments from './components/commenPopulateUI.js';
import renderServerMessage from './components/serverMessageUI.js';
import renderPagination from './components/PaginationUI.js';

const commentPopUpSectionElement = document.querySelector('#comment-popup-section');
const mainContainerElement = document.querySelector('#main');
const mainContainer = document.querySelector('#games-list');

commentPopUpSectionElement.addEventListener('submit', async (event) => {
  let gameComments = [];
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
  try {
    gameComments = await involvementApi.getCommentsById(gameIdSelected);
  } catch (error) {
    gameComments = [];
  }
  populateComments(gameComments, involvementApi.commentsCounter);
});

commentPopUpSectionElement.addEventListener('click', (event) => {
  if (event.target.id === 'delete-popup') {
    commentPopUpSectionElement.style.display = 'none';
    mainContainerElement.style.display = 'block';
  }
});

mainContainer.addEventListener('click', async (event) => {
  if (event.target.classList.contains('btn-comments')) {
    mainContainerElement.style.display = 'none';
    const currentGame = gamesApi.getGameById(Number(event.target.id / 100));
    let gameComments = [];
    try {
      gameComments = await involvementApi.getCommentsById(currentGame.id);
    } catch (error) {
      gameComments = [];
    }
    commentPopUpSectionElement.style.display = 'block';
    renderCommentsPopUp(currentGame);
    populateComments(gameComments, involvementApi.commentsCounter);
  }
});

window.addEventListener('load', async () => {
  commentPopUpSectionElement.style.display = 'none';
  const logoContainer = document.querySelector('.logo-container');
  const totalGamesLink = document.createElement('a');
  totalGamesLink.href = '#';
  const numberOfGames = document.createElement('p');
  const logoIcon = new Image();

  await gamesApi.getGames();
  await involvementApi.getLikes();

  logoIcon.src = ICON;
  numberOfGames.textContent = `Games(${gamesApi.getNumberOfGames()})`;
  totalGamesLink.appendChild(numberOfGames);
  logoContainer.appendChild(logoIcon);
  logoContainer.appendChild(totalGamesLink);
  renderGames(gamesApi.pageNumber);
  renderPagination();
});