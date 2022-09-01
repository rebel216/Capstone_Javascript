import './style.css';
import getData from './getFoodList.js';

// api links
const allBeefURL = 'https:///www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
const urlDetails = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const allPastaURL = `
  https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta`;
const allSeafoodURL = `
  https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;
const [liBeefElement, liPastaElement, liSeafoodElement] =
  document.querySelectorAll('li');
let typeFoodSelected = liBeefElement;

liBeefElement.addEventListener('click', () => {
    typeFoodSelected = liBeefElement;
    typeFoodSelected.textContent = 'Beef';
  liPastaElement.textContent = 'Pasta';
  liSeafoodElement.textContent = 'Seafood';
  getData(allBeefURL,typeFoodSelected);
});

liPastaElement.addEventListener('click', () => {
    typeFoodSelected = liPastaElement;
    typeFoodSelected.textContent = 'Pasta';
  liBeefElement.textContent = 'Beef';
  liSeafoodElement.textContent = 'Seafood';
  getData(allPastaURL,typeFoodSelected);
});

liSeafoodElement.addEventListener('click', () => {
    typeFoodSelected = liSeafoodElement;
    typeFoodSelected.textContent = 'Seafood';
  liBeefElement.textContent = 'Beef';
  liPastaElement.textContent = 'Past';
  getData(allBeefURL,typeFoodSelected);
});





getData(allBeefURL,typeFoodSelected);

export default allBeefURL;
export { urlDetails };
