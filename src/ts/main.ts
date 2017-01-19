export * from './Counter';

import Counter from './Counter';

const counter = new Counter();
counter.increment();

const newParagraph = document.createElement("p");
newParagraph.textContent = counter.currentNumber + "";

document.getElementsByTagName("body")[0].appendChild(newParagraph);