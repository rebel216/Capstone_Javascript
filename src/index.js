import './style.css';
import getData from './getFoodList.js';

// api links
const allBeefURL = 'https:///www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
const urlDetails = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
getData(allBeefURL);

export default allBeefURL;
export { urlDetails };
