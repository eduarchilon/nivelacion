import { useEffect, useState } from 'react'
import './App.css'
import { Form } from './components/Form'
import Result from './components/Result'
import { fetchPokemon } from './utiilities/fetchApi'

function App() {
  const [pokemons, setpokemons] = useState([])
  const [pokemonslistName, setPokemonslistName] = useState([])
  // fetchPokemon().then((data) => {
  //   setpokemons(data)
  // })
  pokemons.forEach((element) => setPokemonslistName(element?.name))
  useEffect(() => {
    fetchPokemon().then((data) => {
      setpokemons(data?.results)
    })
  }, [])
  return (
    <div className="container">
      <h1 className="text-center my-3">Formulario nivelación</h1>
      <Form />
      <Result pokemons={pokemons} />
    </div>
  )
}

export default App
