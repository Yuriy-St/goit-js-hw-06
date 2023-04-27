const sizeControl = document.body.querySelector('input#font-size-control');
const text = document.body.querySelector('span#text');

sizeControl.addEventListener('input', e => {
	const thisElement = e.target;
	text.style.fontSize = `${thisElement.value}px`;
})
