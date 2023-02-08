import React from 'react'
import { Pokemon } from './Pokemon'

function Result({ pokemons }) {
  return (
    <div className="my-4">
      <h3 className="text-center">Resultado</h3>
      <div className='d-flex flex-column'>
        {pokemons?.map((element) => (
          <Pokemon name={element?.name} />
        ))}
      </div>
    </div>
  )
}

export default Result
