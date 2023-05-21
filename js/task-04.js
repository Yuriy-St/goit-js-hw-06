let counterValue = 0;
const counterEl = document.body.querySelector('#counter')
const decrementEl = counterEl.querySelector('button[data-action="decrement"]');
const incrementEl = counterEl.querySelector('button[data-action="increment"]');
const fieldEl = counterEl.querySelector('#value');

incrementEl.addEventListener('click', () => {
	fieldEl.textContent = ++counterValue;
});

decrementEl.addEventListener('click', () => {
	fieldEl.textContent = --counterValue;
})
