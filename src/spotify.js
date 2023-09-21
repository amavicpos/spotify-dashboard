import token from './config.js';

// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=medium_term&limit=50', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
let pop = [];
topTracks?.map(({popularity}) => pop.push(popularity));

export default pop;
