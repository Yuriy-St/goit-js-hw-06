const input = document.body.querySelector('#name-input');
const output = document.body.querySelector('#name-output');

input.addEventListener('input', e => {
	output.textContent = e.currentTarget.value || 'Anonymous';
})
