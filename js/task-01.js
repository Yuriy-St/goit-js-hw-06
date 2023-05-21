const categoriesNds = document.body
  .querySelector('#categories')
  .querySelectorAll('.item');
console.log('Number of categories: ', categoriesNds.length);
categoriesNds.forEach(element => {
  console.log(element.querySelector('body'));
  const header = element.querySelector('h2').innerText;
  const listLength = element.querySelector('ul').children.length;
  console.log('\nCategory: ', header);
  console.log('Elements: ', listLength);
});
