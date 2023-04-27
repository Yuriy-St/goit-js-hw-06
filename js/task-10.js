const elemBoxes = document.body.querySelector('div#boxes');
const controls = document.body.querySelector('div#controls');
const inputAmount = controls.querySelector('input:first-of-type');
const btnCreate = controls.querySelector('[data-create]');
const btnDestroy = controls.querySelector('[data-destroy]');

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

btnCreate.addEventListener('click', () => {
  const amount = inputAmount.value;
  const htmlContent = createBoxes(amount);
  elemBoxes.innerHTML = htmlContent;
})

btnDestroy.addEventListener('click', () => {
  elemBoxes.innerHTML = '';
})
