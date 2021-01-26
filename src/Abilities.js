import { useEffect, useState } from "react"
import Pokemon from "./Pokemon"

const Details = ({ details }) => {
  return (
    <div>
      {details?.map((pokemon, index) => {
        return (
          <div key={pokemon.abilities}>
            <Pokemon abilities={details.abilities} />
          </div>
        )
      })}
    </div>
  )
}
export default Details
