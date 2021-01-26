import { useEffect, useState } from "react"
import Abilitie from "./Abilities"
function Pokemon({ name, url, abilities }) {
  const [details, setDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  console.log(details)
  useEffect(() => {
    fetch(url)
      .then((responsePokemon) => responsePokemon.json())
      .then((responsePokemon) => {
        setDetails(responsePokemon)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return isLoading ? (
    <div>Données de {name} en cours de chargement ...</div>
  ) : (
    <div>
      <p>{name}</p>
      <p>Poids : {details.weight}</p>
      <p>Experience : {details.base_experience}</p>
    </div>
  )
}

export default Pokemon
