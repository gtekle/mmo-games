const renderGame = (game) => {
  const gameListContainer = document.querySelector('.games-list');
  const listItem = document.createElement('li');

  listItem.classList.add('game');
  listItem.id = game.id;
  listItem.innerHTML = `
    <img src=${game.thumbnail} alt="game thumbnail image">
    <div class="game-title-and-social-activities">
      <p class="game-title">${game.title}</p>
      <div class="social-activities">
        <i class="far fa-heart"></i>
        <p class="likes-quantity">0 likes</p>
      </div>
    </div>
    <button class="btn btn-comments" type="button">Comments</button>`;

  gameListContainer.appendChild(listItem);
};

export default renderGame;