let counterValue = 0;
const counter = document.body.querySelector('#counter')
const decrement = counter.querySelector('button[data-action="decrement"]');
const increment = counter.querySelector('button[data-action="increment"]');
const field = counter.querySelector('#value');

increment.addEventListener('click', () => {
	field.textContent = ++counterValue;
});

decrement.addEventListener('click', () => {
	field.textContent = --counterValue;
})
