import Pokemon from "./Pokemon"

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="name">
      {pokemonList?.map((pokemon, index) => {
        return (
          <div key={pokemon.name}>
            <Pokemon
              url={pokemon.url}
              name={pokemon.name}
              name={pokemon.name}
            />
          </div>
        )
      })}
    </div>
  )
}

export default PokemonList
