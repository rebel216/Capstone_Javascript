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

const UIData = (arr) => {
  const board = document.querySelector('.container-food-cards');
  board.innerHTML = '';

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
    const btnrecipe = item.querySelector('.btn-recipe');
    const btnlike = item.querySelector('.btn-liked');
    const printLike = (data) => {
      const likesReturned = data.find(
        // eslint-disable-next-line comma-dangle
        (element) => element.item_id === food.idMeal
      );
      // eslint-disable-next-line operator-linebreak
      btnlike.innerHTML =
        likesReturned !== undefined
          ? `<i class="fas fa-heart"></i> (${likesReturned.likes})`
          : '<i class="far fa-heart"></i> (0)';
    };
    getlikes()
      .then(printLike)
      .catch((e) => console.log(e));

    
    btnlike.addEventListener('click', () => {
      postlikes(food.idMeal);
      getlikes()
        .then(printLike)
        .catch((e) => console.log(e));
    });
    
    board.appendChild(item);

    // this section is not working----->
    // document.querySelector('.btn-liked').addEventListener('click', () => {
    //   postlikes(item.id);
    // });
    // document.querySelector('.btn-recipe').addEventListener('click', () => {
    //   getPopupData(food);
    // });
    //  <-------------------------------

    //  This way works but for the entire item not just the button
    // item.addEventListener('click', () => {
    //   postlikes(item.id);
    // });

    item.addEventListener('click', () => {
      getPopupData(food);
    });
    //  <-------------------------------
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
