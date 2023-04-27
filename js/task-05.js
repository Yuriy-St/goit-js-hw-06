const input = document.body.querySelector('#name-input');
const output = document.body.querySelector('#name-output');

input.addEventListener('input', event => {
	output.textContent = event.currentTarget.value || 'Anonymous';
})
