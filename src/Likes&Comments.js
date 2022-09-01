// eslint-disable-next-line import/no-cycle
import { InvolveURL } from './index.js';

const postlikes = async (id) => {
  const postfix = 'likes';
  const idUrl = InvolveURL + postfix;
  await fetch(idUrl, {
    method: 'POST',
    body: JSON.stringify({
      "item_id": id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const postcomments = async (id, username, comment) => {
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

export default postlikes;
export { postcomments };
