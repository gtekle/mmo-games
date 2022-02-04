import involvementApi from "./InvolvementAPI.js";

const likeButtonEventListner = () => {
  const btnLikes = document.querySelectorAll('.fa-heart');
  btnLikes.forEach(btnLike => {
    btnLike.addEventListener('click', async (event) => {
      event.stopImmediatePropagation();

      const currentGameItem = btnLike.parentNode.parentNode.parentNode;
      const itemId = parseInt(currentGameItem.id, 10);

      await involvementApi.postLike(itemId);
      await involvementApi.fetchLikes();

      const targetGame = involvementApi.appLikes.find(game => game.item_id === parseInt(itemId, 10));

      if (currentGameItem.children[1].children[1].children[1].textContent === '0 likes') {
        currentGameItem.children[1].children[1].children[1].textContent = `${targetGame.likes} likes`;
      } else {
        currentGameItem.children[1].children[1].children[1].textContent = `${targetGame.likes + 1} likes`;
      }
    });
  });
}

export default likeButtonEventListner;