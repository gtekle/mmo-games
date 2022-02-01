import './style.css';
import ICON from './assets/img/logo.png';

window.addEventListener('load', () => {
  const logoContainer = document.querySelector('.logo-container');
  const logoIcon = new Image();
  logoIcon.src = ICON;

  logoContainer.appendChild(logoIcon);
});