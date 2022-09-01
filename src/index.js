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
  
  getData(allBeefURL);
});

liPastaElement.addEventListener('click', () => {
  
  getData(allPastaURL);
});

liSeafoodElement.addEventListener('click', () => {
  
  getData(allBeefURL);
});





getData(allBeefURL);

export default allBeefURL;
export { urlDetails };
