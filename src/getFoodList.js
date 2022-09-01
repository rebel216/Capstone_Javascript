import popupData from './popup.js';
// eslint-disable-next-line import/no-cycle
import { urlDetails } from './index.js';

const getPopupData = async (arr) => {
  const urlD = urlDetails + arr.idMeal;
  const request = new Request(urlD);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responsInfo = responseJson.meals;// getting food data list
  popupData(responsInfo); // passing that response to display the data.
};

const UIData = (arr,typeFoodSelected) => {
  const board = document.querySelector('.container-food-cards');
  board.innerHTML = ``;
  typeFoodSelected.innerHTML=`${typeFoodSelected.textContent} (${arr.length})`
  // item count

  arr.forEach((food) => {
    const item = document.createElement('div');
    item.classList.add('card-food');
    item.innerHTML = `
        <div class="card-title">
          <h5>${food.strMeal}</h5>
        </div>
        <div class="btn-recipe">
          <button type="button">Recipe</button>
        </div>
        <div class="btn-liked">
          <button type="button">Like</button>
        </div>
        <div class="card-img">
         <img src="${food.strMealThumb}" class="img-food">        
        </div>     
    `;
    item.id = food.idMeal;
    board.appendChild(item);
    item.addEventListener('click', () => {
      getPopupData(food);
    });
  });
};



// function to get images and title
const getData = async (url,typeFoodSelected) => {
  const request = new Request(url);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responsInfo = responseJson.meals;// getting food data list
  UIData(responsInfo,typeFoodSelected); // passing that response to display the data.
};

export { getData as default };
