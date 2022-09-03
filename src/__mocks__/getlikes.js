async function getlikes(link) {
  try {
    const response = await fetch(link);
    const data = await response.json();
    return data.likes;
  } catch (e) {
    return 1;
  }
}

export default getlikes;
