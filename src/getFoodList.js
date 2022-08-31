import popupData from './popup.js';
// eslint-disable-next-line import/no-cycle
import { urlDetails } from './index.js';

const getPopupData = async (arr) => {
  const url = urlDetails + arr.idMeal;
  const request = new Request(url);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responsInfo = responseJson.meals;// getting food data list
  popupData(responsInfo); // passing that response to display the data.
};

const UIData = (arr) => {
  const board = document.querySelector('.container-food-cards');
  board.innerHTML = '';

  arr.forEach((food) => {
    const item = document.createElement('div');
    const button = document.createElement('button');
    button.innerHTML = 'Comments';
    item.innerHTML = `<img src="${food.strMealThumb}" width="200px"><h6>${food.strMeal}</h6>${button.innerHTML}`;
    item.id = food.idMeal;
    board.appendChild(item);
    item.addEventListener('click', () => {
      getPopupData(food);
    });
  });
};

// function to get images and title
const getData = async (url) => {
  const request = new Request(url);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responsInfo = responseJson.meals;// getting food data list

  UIData(responsInfo); // passing that response to display the data.
};

export { getData as default };
