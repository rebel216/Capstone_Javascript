const UIData = (arr) => {
  const board = document.querySelector('.container-food-cards');
  board.innerHTML = '';

  arr.forEach((food) => {
    const item = document.createElement('div');
    item.innerHTML = `<img src="${food.strMealThumb}" width="200px"><h6>${food.strMeal}</h6>`;
    item.id = food.idMeal;
    board.appendChild(item);
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