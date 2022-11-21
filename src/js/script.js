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
  const previousKeyType = calculatorEl.dataset.previousKeyType;

  const displayResult = value => (displayedResultEl.textContent = value);
  const savePrevClickedBtn = buttonType =>
    (calculatorEl.dataset.previousKeyType = buttonType);

  // if clicked button is a number
  if (buttonType === 'number') {
    if (displayedValue === 0 || previousKeyType === 'operator') {
      displayResult(clickedValue);
    } else {
      displayResult(displayedValue + clickedValue);
    }
  }

  // if clicked button is an operator
  if (buttonType === 'operator') {
  }

  savePrevClickedBtn(buttonType);
});
