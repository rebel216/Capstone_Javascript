const popupData = (arr) => {
  const popup = document.createElement('div');
  popup.classList('popup');
  popup.innerHTML = `
  <img src="${arr.strMealThumb}" id="food">
  <h4>Instructions</h4>
  <p>${arr.strInstructions}</p>
  <form><h4>Leave a comment</h4>
  <input type= "text" placeholder="Your name">
  <input type= "text" placeholder="Your insights">
  <button type= "submit">Comment</button>
  </form>
`;
  const body = document.querySelector('body');
  body.appenChild(popup);
};

export default popupData;