const sizeControl = document.body.querySelector('input#font-size-control');
const text = document.body.querySelector('span#text');

sizeControl.addEventListener('input', event => {
	const thisElement = event.target;
	text.style.fontSize = `${thisElement.value}px`;
})
