import { InvolveURL } from './index.js';
import { postcomments } from './Likes&Comments.js';

const fillComments = (obj) => {
  for (let i = 0; i < obj.length; i += 1) {
    const comment = document.createElement('div');
    comment.classList = 'comment';
    comment.innerHTML = `
    <h4>${obj[i].username}</h4>
    <p>${obj[i].comment}</br></br>${obj[i].creation_date}</p>
    `;
    const popup = document.querySelector('.popup');
    popup.appendChild(comment);
  }
};

async function getComments(id) {
  const postfix = 'comments?item_id=';
  const idUrl = InvolveURL + postfix + id;
  const response = await fetch(idUrl);
  const comments = await response.json();
  fillComments(comments);
}

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
  <input type="text" id="user" placeholder="Your name">
  <input type="text" id="comment" placeholder="Your insights">
  <button type="button" id="submit">Comment</button>
  <button type="button" id="close">Go Back</button>
  </form>
  <div class="commentSection">
  </div>  
`;
  const body = document.querySelector('body');
  body.appendChild(popup);
  const submit = document.getElementById('submit');
  submit.addEventListener('click', () => {
    const form = document.querySelector('form');
    form.reset();
    const user = document.getElementById('user').value;
    const comment = document.getElementById('comment').value;
    postcomments(arr[0].idMeal, user, comment);
  });
  const close = document.querySelector('#close');
  close.addEventListener('click', () => {
    body.removeChild(popup);
  });
  getComments(arr[0].idMeal);
};
export default popupData;