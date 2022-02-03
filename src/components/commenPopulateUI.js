const populateComments = (commentsArray) => {
  const commentsContainerElement = document.querySelector('#comments-container');
  commentsContainerElement.innerHTML = '';
  if (commentsArray.length > 0) {
    commentsArray.forEach((element) => {
      commentsContainerElement.innerHTML
      += `<p class="comment-individual-server-comment"> 
        <span>${element.creation_date} - </span> 
        <span> ${element.username}: </span> 
        <span>${element.comment}</span> 
      </p>`;
    });
  } else {
    commentsContainerElement.innerHTML = '<p class="comment-individual-server-comment"> No Comments </p>';
  }
};

export default populateComments;