import React from "react";

const BestPokemon = (props) => {
    
    return (
      <div>
      <p>The best pokemon is Snorlax</p>
      <ul>
        {props.abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
      </div>
    )
  };


  export default BestPokemon;