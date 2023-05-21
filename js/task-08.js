const formEl = document.body.querySelector('form.login-form');
const formElementsEl = [...formEl.elements];

formEl.addEventListener('submit', event => {
	event.preventDefault();
	const data = {};
	for (const element of formElementsEl) {
		if (!element.name && element.type !== 'input') continue;
		if (!element.value) {
			alert('All fields must be filled in!');
			return;
		}
		data[element.name] = element.value;
	}

	console.log(data);

	event.target.reset();

})
