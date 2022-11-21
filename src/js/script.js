'use strict';

// if (module.hot) {
//   module.hot.accept();
// }

const calculatorEl = document.querySelector('[data-calculator]');
const displayedResultEl = calculatorEl.querySelector('[data-result]');

const displayResult = value => (displayedResultEl.textContent = value);
const typeOfPrevClickedBtn = buttonType =>
  (calculatorEl.dataset.previousBtnType = buttonType);

calculatorEl.addEventListener('click', function (e) {
  const clicked = e.target.closest('[data-button]');

  if (!clicked) return;

  const clickedValue = clicked.textContent;
  const buttonType = clicked.dataset.button;
  const displayedValue = +displayedResultEl.textContent;
  const { previousBtnType } = calculatorEl.dataset;

  if (buttonType === 'number') {
    if (displayedValue === 0 || previousBtnType === 'operator') {
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

    // adding a dataset for the firstNumber and for the operator, which will be needed for the calculation
    calculatorEl.dataset.firstNumber = displayedValue;
    calculatorEl.dataset.operator = clicked.dataset.operator;
  }

  if (buttonType === 'equal') {
    const { firstNumber } = calculatorEl.dataset;
    const secondNumber = displayedValue;
    const { operator } = calculatorEl.dataset;

    console.log(firstNumber, secondNumber, operator);
  }

  typeOfPrevClickedBtn(buttonType);
});
