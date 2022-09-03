/* eslint-disable import/no-cycle */
import popupData from './popup.js';
import { urlDetails } from './index.js';
import { postlikes, getlikes } from './Likes&Comments.js';

const getPopupData = async (arr) => {
  const urlD = urlDetails + arr.idMeal;
  const request = new Request(urlD);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responsInfo = responseJson.meals;// getting food data list
  popupData(responsInfo); // passing that response to display the data.
};

export const itemCounter = (foodSelected, arr) => {
  foodSelected.innerHTML = `${foodSelected.textContent} (${arr.length})`;
};

const UIData = (arr, foodSelected) => {
  const board = document.querySelector('.container-food-cards');
  board.innerHTML = '';
  itemCounter(foodSelected, arr);
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
          <button type="button"></button> 
          <p class="likes-count"></p>
        </div>
        <div class="card-img">
         <img src="${food.strMealThumb}" class="img-food">        
        </div>     
    `;
    const btnrecipe = item.querySelector('.btn-recipe');
    const btnlike = item.querySelector('.btn-liked');
    const printLike = (data) => {
      const likesReturned = data.find(
        (element) => element.item_id === food.idMeal,
      );
      const likesCount = item.querySelector('.likes-count');
      likesCount.innerHTML = likesReturned !== undefined
        ? `${likesReturned.likes + 1}`
        : '0';
    };
    getlikes()
      .then(printLike);

    btnlike.addEventListener('click', () => {
      postlikes(food.idMeal);
      getlikes()
        .then(printLike);
    });
    board.appendChild(item);

    btnrecipe.addEventListener('click', () => {
      getPopupData(food);
    });
  });
};

// function to get images and title
const getData = async (url, foodSelected) => {
  const request = new Request(url);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responsInfo = responseJson.meals;// getting food data list
  UIData(responsInfo, foodSelected); // passing that response to display the data.
};

export { getData as default };
