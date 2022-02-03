import deletePopUpIcon from '../assets/img/icons/icons8-delete-64.png';

const renderCommentsPopUp = (game) => {
  const popUpContainer = document.querySelector('#comment-popup-container');
  popUpContainer.innerHTML = `
  <div class="image-thumbnail-delete-icon-container">
      <img id='game-image' src=${game.thumbnail} alt="game-image-thumbnail" class="comment-game-image">
      <div class="comment-delete-icon">
      <img id="delete-popup" src=${deletePopUpIcon} alt="">
      </div>
    </div>
    <h3 class="comment-name-of-game" id="name-of-game"> ${game.title}</h3>
    <div class="comment-game-short-description-details"> Short Description: <span id="short-description">${game.short_description}</span></div>
    <div class="comment-game-description-container">
      <div class="comment-game-description-details"> Game developer: <span id="game-developer">${game.developer}</span></div>
      <div class="comment-game-description-details"> Game Url: <span id="game-url"> <a href=${game.game_url}> ${game.game_url} </a></span></div>
      <div class="comment-game-description-details"> Genre: <span id="genre">${game.genre}</span></div>
      <div class="comment-game-description-details"> Platform: <span id="platform">${game.platform}</span></div>
      <div class="comment-game-description-details"> Publisher: <span id="publisher">${game.publisher}</span></div>
      <div class="comment-game-description-details"> Release - date: <span id="release-date">${game.release_date}</span></div>
    </div>
    <div class="comment-comments-container">
      <div class="comment-server-comments-container">
        <h3 class="comment-server-comments-header-text"> COMMENTS ("number of comments to be shown from server")</h3>
        <div class="comment-server-comments">
          <p class="comment-individual-server-comment"> 
            <span>"Time of the comment "</span> 
            <span> "Author of the comment"</span> 
            <span>"Actual Comment"</span> 
          </p>
          <p class="comment-individual-server-comment"> 
            <span>"Time of the comment -2 "</span> 
            <span> "Author of the comment - 2"</span> 
            <span>"Actual Comment - 2"</span> 
          </p>
        </div>
      </div>
      <h3 class="comment-comments-form-header-text"> Add a Comment </h3>
      <form id="comment-add-comment-form" class="comment-add-comment-form" action="submit">
        <input type="text" placeholder="Your Name" id="commentorsName" class="comment-input-text-name"/>
        <textarea placeholder="Your Comment" id="commentorsComment" class="comment-input-text-comment"></textarea>
        <button id=${game.id} type="submit" class="comment-button-submit"> COMMENT </button>
        <span id="server-message-prompt">  </span>
      </form>
    </div>`;
};

export default renderCommentsPopUp;