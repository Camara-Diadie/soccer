import { useState, useEffect } from "react"
import "./App.css"
// import Pokemon from "./Pokemon"
import PokemonList from "./PokemonList"

function App() {
  const [pokemonList, setPokemonList] = useState(null)

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((response) => response.json())
      .then((response) => setPokemonList(response.results))
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <div className="App">
      <h1> Pokemon API </h1>
      <div>
        <PokemonList pokemonList={pokemonList} />
      </div>
    </div>
  )
}

export default App
