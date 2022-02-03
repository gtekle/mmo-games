import renderGames from "../modules/RenderGames.js";
import gamesApi from "../modules/GamesAPI.js";

let pageNumber = gamesApi.pageNumber;

const renderPagination = () => {
  const mainSection = document.querySelector('#main');
  const paginationContainer = document.createElement('div');
  const pageNumberLabel = document.createElement('p');
  const btnPrevious = document.createElement('button');
  const btnNext = document.createElement('button');

  btnPrevious.classList.add('btn', 'btn-previous');
  btnPrevious.textContent = '<< Prev';
  pageNumberLabel.textContent = ` - ${pageNumber >= 0 ? pageNumber + 1 : 1} -`;
  btnNext.classList.add('btn', 'btn-next');
  btnNext.textContent = 'Next >>';
  paginationContainer.classList.add('pagination-container');
  paginationContainer.appendChild(btnPrevious);
  paginationContainer.appendChild(pageNumberLabel);
  paginationContainer.appendChild(btnNext);

  mainSection.appendChild(paginationContainer);

  btnNext.addEventListener('click', () => {
    const gameListContainer = document.querySelector('.games-list');
    gameListContainer.innerHTML = '';
    pageNumber = (pageNumber + 1) < (gamesApi.getNumberOfGames() / 15) ? pageNumber + 1 : gamesApi.getNumberOfGames / 15;
    pageNumberLabel.textContent = ` - ${pageNumber + 1} -`;
    renderGames(pageNumber);
  });

  btnPrevious.addEventListener('click', () => {
    const gameListContainer = document.querySelector('.games-list');
    gameListContainer.innerHTML = '';
    pageNumber = pageNumber > 0 ? pageNumber - 1 : 0;
    pageNumberLabel.textContent = `- ${pageNumber + 1} -`;
    renderGames(pageNumber);
  });
}

export default renderPagination;