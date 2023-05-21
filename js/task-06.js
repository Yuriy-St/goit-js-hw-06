const inputFieldEl = document.body.querySelector('#validation-input');
const symbolLimit = inputFieldEl.dataset.length;

inputFieldEl.addEventListener('blur', event => {
	const thisField = event.target;
	const valueLength = thisField.value.length;
	if (valueLength === 0) {
		thisField.classList.remove('valid', 'invalid');
		return;
	}
	if (valueLength <= symbolLimit) {
		thisField.classList.remove('invalid');
		thisField.classList.add('valid');
	} else {
		thisField.classList.remove('valid');
		thisField.classList.add('invalid');
	}
});
