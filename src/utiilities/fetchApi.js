export const fetchPokemon = async () => {
  const fetchApi = await fetch('https://pokeapi.co/api/v2/pokemon')
  const response = fetchApi.json().then((data) => data)
  return response
}
