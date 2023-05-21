const elemBoxesEl = document.body.querySelector('div#boxes');
const controlsEl = document.body.querySelector('div#controls');
const inputAmountEl = controlsEl.querySelector('input:first-of-type');
const btnCreateEl = controlsEl.querySelector('[data-create]');
const btnDestroyEl = controlsEl.querySelector('[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let size = 30;
  const sizeStep = 10;
  let htmlContent = '';
  for (let i = 0; i < amount; i++) {
    const bgColor = getRandomHexColor();
    htmlContent += `<div style="width:${size}px; height:${size}px; background-color: ${bgColor};"></div>\n`;
    size += sizeStep;
  }
  return htmlContent;
}

btnCreateEl.addEventListener('click', () => {
  const amount = inputAmountEl.value;
  const htmlContent = createBoxes(amount);
  elemBoxesEl.innerHTML = htmlContent;
})

btnDestroyEl.addEventListener('click', () => {
  elemBoxesEl.innerHTML = '';
})
