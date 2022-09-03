import getlikes from '../__mocks__/getlikes.js';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ likes: 2 }),
}));

it('likes of the item should be 2 ', async () => {
  const data = await getlikes('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oHdQExR6DIJGa8S6fY1E/likes/');
  expect(data).toEqual(2);
});