const inputEl = document.body.querySelector('#name-input');
const outputEl = document.body.querySelector('#name-output');

inputEl.addEventListener('input', event => {
	outputEl.textContent = event.currentTarget.value || 'Anonymous';
})
