const body = document.body;
const widget = body.querySelector('.widget');
const btnChangeColor = widget.querySelector('button.change-color');
const textColor = widget.querySelector('span.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChangeColor.addEventListener('click', () => {
  const color = getRandomHexColor();
  textColor.innerText = color;
  body.style.backgroundColor = color;
})
