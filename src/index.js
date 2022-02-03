import './style.css';
import ICON from './assets/img/logo.png';
import gamesApi from './modules/GamesAPI.js';
import involvementApi from './modules/InvolvementAPI.js';
import renderGames from './modules/RenderGames.js';
import renderCommentsPopUp from './components/GameCommentUI.js';
import renderPagination from './components/PaginationUI.js';

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