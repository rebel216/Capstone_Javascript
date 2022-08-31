const popupData = (arr) => {
  const popup = document.createElement('div');
  popup.classList = 'popup';
  popup.innerHTML = `
  <div id="cont">
  <div id="img">
  <img src="${arr[0].strMealThumb}" id="food">
  </div>
  <div id="ins">
  <h4>Instructions</h4>
  <p class="content">${arr[0].strInstructions}</p>
  </div>
  </div>
  <form><h4>Leave a comment</h4>
  <input type="text" placeholder="Your name">
  <input type="text" placeholder="Your insights">
  <button type="submit">Comment</button>
  <button type="submit" id="close">Go Back</button>
  </form>  
`;
  const body = document.querySelector('body');
  body.appendChild(popup);
  const close = document.querySelector('#close');
  close.addEventListener('click', () => {
    body.removeChild(popup);
  });
};

export default popupData;