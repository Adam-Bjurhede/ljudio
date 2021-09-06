async function fetchFunction(e) {
  let query = e.target.value;
  console.log(query);
  const getFetch = await fetch(
    `https://yt-music-api.herokuapp.com/api/yt/songs/${query}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await getFetch.json();

  console.log(data);

  return data;
}
