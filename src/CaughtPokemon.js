import React, { useState } from "react";


const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([])  
  
  const catchPokemon = () => {
    setCaught(caught.concat('Pikachu'))
}

    return (
      <div>
      <p>Caught {caught.length} Pokémon on {props.date}</p> 
      <button onClick={catchPokemon}>Catch a Pokemon!</button>
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
      </div>
    )
  };

  export default CaughtPokemon;