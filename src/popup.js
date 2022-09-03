/* eslint-disable import/no-cycle */
import { InvolveURL } from './index.js';
import { postcomments } from './Likes&Comments.js';

const fillComments = (obj) => {
  const commentsCounter = document.createElement('h5');
  if (obj.length !== undefined) {
    const postfix = ' Comments';
    commentsCounter.textContent = obj.length + postfix;
    // const popup = document.querySelector('.popup');
    const commentSection = document.querySelector('.commentSection');
    commentSection.appendChild(commentsCounter);
  }
  for (let i = 0; i < obj.length; i += 1) {
    const comment = document.createElement('div');
    comment.classList = 'comment';
    comment.innerHTML = `
    <h4>${obj[i].username}</h4>
    <p>${obj[i].comment}</br></br><p class="date">${obj[i].creation_date}</p></p>
    `;
    const commentSection = document.querySelector('.commentSection');
    commentSection.appendChild(comment);
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
  const popupCont = document.createElement('div');
  popupCont.classList = 'popupCont';
  popup.classList = 'popup';
  popup.innerHTML = `
  <button type="button" class="Closebtn" id="close">X</button>
  <div id="cont">
  <div id="img">
  <img src="${arr[0].strMealThumb}" id="food">
  </div>
  <div id="ins">
  <h4>Instructions</h4>
  <p class="content">${arr[0].strInstructions}</p>
  </div>
  </div>
  <div class="commentSection">
  </div>
  <form><h4>Leave a comment</h4>  
  <input type="text" value"submit" id="user" placeholder="Your name" required/>
  <input type="text" value"submit" id="comment" placeholder="Your insights" required/>
  <button type="button" id="submit">Comment</button>
  </form>
`;
  const body = document.querySelector('body');
  popupCont.appendChild(popup);
  body.appendChild(popupCont);
  const submit = document.getElementById('submit');
  submit.addEventListener('click', async (e) => {
    const user = document.getElementById('user').value;
    const comment = document.getElementById('comment').value;
    if ((user.length < 1) || (comment.length < 1)) {
      e.preventDefault();
      const alert = document.createElement('p');
      alert.textContent = 'Please fill both fields.';
      const form = document.querySelector('form');
      form.appendChild(alert);
    } else {
      await postcomments(arr[0].idMeal, user, comment);
      getComments(arr[0].idMeal);
      const commentSection = document.querySelector('.commentSection');
      commentSection.innerHTML = ``;
      const form = document.querySelector('form');
      form.reset();
    }
  });
  const close = document.querySelector('#close');
  close.addEventListener('click', () => {
    body.removeChild(popupCont);
  });
  getComments(arr[0].idMeal);
};
export default popupData;