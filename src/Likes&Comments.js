/* eslint-disable quote-props */
/* eslint-disable quotes */
// eslint-disable-next-line import/no-cycle
import { InvolveURL } from './index.js';

const projectID = 'oHdQExR6DIJGa8S6fY1E';
const likesLink = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${projectID}/likes/`;

export const getlikes = async () => {
  const response = await fetch(likesLink);
  const data = await response.json();
  return data;
};

export const postlikes = async (id) => {
  const request = new Request(likesLink);
  const response = await fetch(request, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    body: JSON.stringify({ item_id: `${id}` }),
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const postcomments = async (id, username, comment) => {
  const postfix = 'comments';
  const idUrl = InvolveURL + postfix;
  await fetch(idUrl, {
    method: 'POST',
    body: JSON.stringify({
      "item_id": id,
      "username": username,
      "comment": comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default { postlikes, getlikes, postcomments };