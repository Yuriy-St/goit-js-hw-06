const categories = document.body.querySelector('#categories').children;
console.log('Number of categories: ', categories.length);
Array.from(categories).forEach(element => {
	const header = element.querySelector('h2').innerText;
	const listLength = element.querySelector('ul').children.length;
	console.log('\nCategory: ', header);
	console.log('Elements: ', listLength)
});
