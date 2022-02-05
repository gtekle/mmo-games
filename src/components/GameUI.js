import PLAY_BUTTON from '../assets/img/icons8-start-48.png';

const renderGame = (game) => {
  const gameListContainer = document.querySelector('.games-list');
  const listItem = document.createElement('li');

  listItem.classList.add('game');
  listItem.id = game.id;
  listItem.innerHTML = `
    <a href=${game.game_url}>
      <img src=${game.thumbnail} alt="game thumbnail image">
    </a>
    <div class="game-title-and-social-activities">
      <p class="game-title">${game.title}</p>
      <div class="social-activities">
        <i class="far fa-heart"></i>
        <p class="likes-quantity">${game.likes} likes</p>
      </div>
    </div>
    <div class="game-play-comment">
      <a href=${game.game_url}>
        <img src=${PLAY_BUTTON} alt="game thumbnail image">
      </a>
      <button class="btn btn-comments" type="button" id=${game.id * 100}>Comments</button>
    </div>`;

  gameListContainer.appendChild(listItem);
};

export default renderGame;