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

  if (clicked.dataset.button === 'number') {
    if (displayedValue === 0) {
      displayedResultEl.textContent = clickedValue;
    } else {
      displayedResultEl.textContent = displayedValue + clickedValue;
    }
  }
});
