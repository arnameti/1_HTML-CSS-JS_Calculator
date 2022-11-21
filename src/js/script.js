'use strict';

// if (module.hot) {
//   module.hot.accept();
// }

const calculatorEl = document.querySelector('[data-calculator]');
const displayedResultEl = calculatorEl.querySelector('[data-result]');

const displayResult = value => (displayedResultEl.textContent = value);

const removeSelectionFromBtn = btn => {
  const currentSelectedOperator = calculatorEl.querySelector(`.${btn}`);
  currentSelectedOperator?.classList.remove(btn);
};

const calculate = (firstNumber, operator, secondNumber) => {
  let result;
  if (operator === 'plus') result = firstNumber + secondNumber;
  if (operator === 'minus') result = firstNumber - secondNumber;
  if (operator === 'times') result = firstNumber * secondNumber;
  if (operator === 'divide') result = firstNumber / secondNumber;

  return result;
};

calculatorEl.addEventListener('click', function (e) {
  const clicked = e.target.closest('[data-button]');

  if (!clicked) return;

  const clickedValue = clicked.textContent;
  const buttonType = clicked.dataset.button;
  const displayedValue = displayedResultEl.textContent;
  const { previousBtnType } = calculatorEl.dataset;

  if (buttonType === 'number') {
    if (displayedValue === '0' || previousBtnType === 'operator') {
      displayResult(clickedValue);
    } else {
      displayResult(displayedValue + clickedValue);
    }
  }

  // prettier-ignore
  if (buttonType === 'operator') {

    //select highlighted operator btn, remove the class to remove the highlighting
    removeSelectionFromBtn('calculator__operator--selected');

    // add class to clicked operator-btn, to add the highlight
    clicked.classList.add('calculator__operator--selected');

    // adding a dataset for the firstNumber and for the operator, which will be needed for the calculation
    calculatorEl.dataset.firstNumber = displayedValue;
    calculatorEl.dataset.operator = clicked.dataset.operator;
  }

  if (buttonType === 'equal') {
    const firstNumber = +calculatorEl.dataset.firstNumber;
    const secondNumber = +displayedValue;
    const { operator } = calculatorEl.dataset;

    const result = calculate(firstNumber, operator, secondNumber);

    //select highlighted operator btn, remove the class to remove the highlighting
    removeSelectionFromBtn('calculator__operator--selected');

    displayResult(result);
  }

  // set dataset, save type of previous btn
  calculatorEl.dataset.previousBtnType = buttonType;
});
