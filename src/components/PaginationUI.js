import renderGames from '../modules/RenderGames.js';
import gamesApi from '../modules/GamesAPI.js';

const renderPagination = () => {
  const mainSection = document.querySelector('#main');
  const paginationContainer = document.createElement('div');
  const pageNumberLabel = document.createElement('p');
  const btnPrevious = document.createElement('button');
  const btnNext = document.createElement('button');

  btnPrevious.classList.add('btn', 'btn-previous');
  btnPrevious.textContent = '< prev';
  pageNumberLabel.textContent = ` - ${gamesApi.pageNumber >= 0 ? gamesApi.pageNumber + 1 : 1} -`;
  btnNext.classList.add('btn', 'btn-next');
  btnNext.textContent = 'next >';
  paginationContainer.classList.add('pagination-container');
  paginationContainer.appendChild(btnPrevious);
  paginationContainer.appendChild(pageNumberLabel);
  paginationContainer.appendChild(btnNext);

  mainSection.appendChild(paginationContainer);

  if (gamesApi.pageNumber <= 0) btnPrevious.disabled = true;

  btnNext.addEventListener('click', () => {
    const gameListContainer = document.querySelector('.games-list');
    gameListContainer.innerHTML = '';
    gamesApi.pageNumber = (gamesApi.pageNumber) < Math.floor(gamesApi.getNumberOfGames() / 15)
      ? gamesApi.pageNumber + 1 : Math.floor(gamesApi.getNumberOfGames / 15);
    pageNumberLabel.textContent = ` - ${gamesApi.pageNumber + 1} -`;

    renderGames(gamesApi.pageNumber);

    btnPrevious.disabled = false;
    if (gamesApi.pageNumber > Math.floor(gamesApi.getNumberOfGames() / 15) - 1) {
      btnNext.disabled = true;
    }
  });

  btnPrevious.addEventListener('click', () => {
    const gameListContainer = document.querySelector('.games-list');
    gameListContainer.innerHTML = '';
    gamesApi.pageNumber = gamesApi.pageNumber > 0 ? gamesApi.pageNumber - 1 : 0;
    pageNumberLabel.textContent = `- ${gamesApi.pageNumber + 1} -`;

    renderGames(gamesApi.pageNumber);

    btnNext.disabled = false;
    if (gamesApi.pageNumber <= 0) btnPrevious.disabled = true;
  });
};

export default renderPagination;