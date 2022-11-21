'use strict';

// if (module.hot) {
//   module.hot.accept();
// }

const calculatorEl = document.querySelector('[data-calculator]');
const displayedResultEl = calculatorEl.querySelector('[data-result]');

calculatorEl.addEventListener('click', function (e) {
  const clicked = e.target.closest('[data-button]');

  if (!clicked) return;

  const clickedValue = clicked.textContent;
  const displayedValue = +displayedResultEl.textContent;
  const buttonType = clicked.dataset.button;

  // if clicked button is a number
  if (buttonType === 'number') {
    if (displayedValue === 0) {
      displayedResultEl.textContent = clickedValue;
    } else {
      displayedResultEl.textContent = displayedValue + clickedValue;
    }
  }

  // if clicked button is an operator
  if (buttonType === 'operator') {
    calculatorEl.dataset.previousKeyType = 'operator';
  }
});
