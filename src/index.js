import './style.css';
import getData from './getFoodList';

// api links
const allBeefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';

getData(allBeefURL);
