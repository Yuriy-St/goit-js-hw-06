const form = document.body.querySelector('form.login-form');
const formElements = [...form.elements];

form.addEventListener('submit', event => {
	event.preventDefault();
	const data = {};
	for (const element of formElements) {
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
