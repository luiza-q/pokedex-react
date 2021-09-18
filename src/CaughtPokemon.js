import React, { useState } from "react";


const pokemonNames = ['Pikachu', 'Dragonite', 'Bulbasaur', 'Charmander', 'Charmeleon']


const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([])  
  
  const catchPokemon = () => {
  //  setCaught(caught.concat('Pikachu'))
  let randomPosition = Math.floor(Math.random() * 5)
  const randomPokemon = pokemonNames[randomPosition]
  const newCaught = caught.concat(randomPokemon);
  setCaught(newCaught);
  }

    return (
      <div>
      <p>Caught {caught.length} Pokémon on {props.date}</p> 
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
      <button onClick={catchPokemon}>Catch a Pokemon!</button>
      </div>
    )
  };

  export default CaughtPokemon;