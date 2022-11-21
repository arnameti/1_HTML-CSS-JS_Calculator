'use strict';

// if (module.hot) {
//   module.hot.accept();
// }

const calculatorEl = document.querySelector('[data-calculator]');

calculatorEl.addEventListener('click', function (e) {
  const clicked = e.target.closest('[data-button]');

  if (!clicked) return;

  console.log(clicked);
});
