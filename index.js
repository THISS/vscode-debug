// Import stylesheets
import './style.css';
import {
  sum,
  divide,
  multiply,
  toThePower,
  takeAway,
  squareRoot,
  square,
} from 'src/calculator';

function wrapInHTML(title, toPrint) {
  return `<div>${title}: ${toPrint}</div>`;
}

// Write Javascript code!
const appDiv = document.getElementById('app');

const markup = `<main>
  ${wrapInHTML('sum', sum(1, 2, 3, 4, 5))}
  ${wrapInHTML('subtract', takeAway(1, 2, 3, 4, 5))}
  ${wrapInHTML('divide', divide(1, 2, 3, 4, 5))}
  ${wrapInHTML('multiply', multiply(1, 2, 3, 4, 5))}
  ${wrapInHTML('square', square(3))}
  ${wrapInHTML('squareRoot', squareRoot(9))}
  ${wrapInHTML('toThePower', toThePower(9, 3))}
</main>`;
appDiv.innerHTML = `<h1>JS Starter</h1>${markup}`;
