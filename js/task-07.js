const sizeControlEl = document.body.querySelector('input#font-size-control');
const textEl = document.body.querySelector('span#text');

sizeControlEl.addEventListener('input', event => {
	const thisElement = event.target;
	textEl.style.fontSize = `${thisElement.value}px`;
})
