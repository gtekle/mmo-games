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
    <button class="btn btn-comments" type="button" id=${game.id * 100}>Comments</button>`;

  gameListContainer.appendChild(listItem);
};

export default renderGame;