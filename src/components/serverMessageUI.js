const renderServerMessage = (element, message, duration) => {
  element.style.display = 'block';
  element.innerHTML = message;
  setTimeout(() => {
    element.innerHTML = '';
    element.style.display = 'none';
  }, duration);
};

export default renderServerMessage;