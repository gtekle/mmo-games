const renderCommentsPopUp = (game) => {
  const gameImageElement = document.querySelector('#game-image');
  const nameOfGameElement = document.querySelector('#name-of-game');
  const shortGameDescriptionElement = document.querySelector('#short-description');
  const gameUrlElement = document.querySelector('#game-url');
  const gameGenreElement = document.querySelector('#genre');
  const gamePlatformElement = document.querySelector('#platform');
  const gamePublisherElement = document.querySelector('#publisher');
  const gameReleaseDateElement = document.querySelector('#release-date');
  const gameDeveloperElement = document.querySelector('#game-developer');
  
  gameImageElement.src = game.thumbnail;
  nameOfGameElement.innerHTML = game.title;
  shortGameDescriptionElement.innerHTML = game.short_description;
  gameUrlElement.innerHTML = game.game_url;
  gameGenreElement.innerHTML = game.genre;
  gamePlatformElement.innerHTML = game.platform;
  gamePublisherElement.innerHTML = game.publisher;
  gameReleaseDateElement.innerHTML = game.release_date;
  gameDeveloperElement.innerHTML = game.developer;
};

export default renderCommentsPopUp;