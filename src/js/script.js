'use strict';

// if (module.hot) {
//   module.hot.accept();
// }

const calculatorEl = document.querySelector('[data-calculator]');
const displayedResultEl = calculatorEl.querySelector('[data-result]');

const clickedValue = clicked.textContent;
const displayedValue = +displayedResultEl.textContent;
const buttonType = clicked.dataset.button;
const previousKeyType = calculatorEl.dataset.previousKeyType;

const displayResult = value => (displayedResultEl.textContent = value);
const savePrevClickedBtn = buttonType =>
  (calculatorEl.dataset.previousKeyType = buttonType);

calculatorEl.addEventListener('click', function (e) {
  const clicked = e.target.closest('[data-button]');

  if (!clicked) return;

  if (buttonType === 'number') {
    if (displayedValue === 0 || previousKeyType === 'operator') {
      displayResult(clickedValue);
    } else {
      displayResult(displayedValue + clickedValue);
    }
  }

  // prettier-ignore
  if (buttonType === 'operator') {
    //select highlighted element and remove the class to remove the highlighting
    const currentSelectedOperator = calculatorEl.querySelector('.calculator__operator--selected');
    currentSelectedOperator?.classList.remove('calculator__operator--selected');

    // add class to operator-btn, to add the highlight
    clicked.classList.add('calculator__operator--selected');
  }

  if (buttonType === 'equal') {
  }

  savePrevClickedBtn(buttonType);
});
