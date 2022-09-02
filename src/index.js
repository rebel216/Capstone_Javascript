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
let foodSelected = liBeefElement;

liBeefElement.addEventListener('click', () => {
    foodSelected = liBeefElement;
    foodSelected.textContent = 'Beef';
  liPastaElement.textContent = 'Pasta';
  liSeafoodElement.textContent = 'Seafood';
  getData(allBeefURL,foodSelected);
});

liPastaElement.addEventListener('click', () => {
    foodSelected = liPastaElement;
    foodSelected.textContent = 'Pasta';
  liBeefElement.textContent = 'Beef';
  liSeafoodElement.textContent = 'Seafood';
  getData(allPastaURL,foodSelected);
});

liSeafoodElement.addEventListener('click', () => {
    foodSelected = liSeafoodElement;
    foodSelected.textContent = 'Seafood';
  liBeefElement.textContent = 'Beef';
  liPastaElement.textContent = 'Past';
  getData(allBeefURL,foodSelected);
});





getData(allBeefURL,foodSelected);

export default allBeefURL;
export { urlDetails };
