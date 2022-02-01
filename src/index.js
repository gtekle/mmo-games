import './style.css';
import ICON from './assets/img/logo.png';
import deletePopUpIcon from './assets/img/icons/icons8-delete-64.png';

const commentPopUpForm = document.querySelector('#comment-add-comment-form');
const popUpTrialButton = document.querySelector('#comment-trial-button');
const commentPopUpSection = document.querySelector('#comment-popup-section');
const deletePopUpIconElementContainer = document.querySelector('#delete-popup');

commentPopUpForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('test function to make comment call');
  event.target.reset();
});

popUpTrialButton.addEventListener('click', () => {
  const deleteIcon = new Image();
  deleteIcon.src = deletePopUpIcon;
  deletePopUpIconElementContainer.replaceChildren(deleteIcon);
  commentPopUpSection.style.display = 'block';
  // Implement hiding of other sections to only show pop up content
});

deletePopUpIconElementContainer.addEventListener('click', () => {
  commentPopUpSection.style.display = 'none';
})

window.addEventListener('load', () => {
  commentPopUpSection.style.display = 'none';
  const logoContainer = document.querySelector('.logo-container');
  const logoIcon = new Image();
  logoIcon.src = ICON;

  logoContainer.appendChild(logoIcon);
});
