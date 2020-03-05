export const getPokemons = (page = 0, callbackSuccess = () => {}) => {
  const offset = 20 * page;
  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      callbackSuccess(responseJson.results);
    });
};
