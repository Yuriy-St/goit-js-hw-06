const bodyEl = document.body;
const widgetEl = bodyEl.querySelector('.widget');
const btnChangeColorEl = widgetEl.querySelector('button.change-color');
const textColorEl = widgetEl.querySelector('span.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChangeColorEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  textColorEl.innerText = color;
  bodyEl.style.backgroundColor = color;
})
