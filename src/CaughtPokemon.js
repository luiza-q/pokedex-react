import React, { useState } from "react";


// const pokemonNames = ['Pikachu', 'Dragonite', 'Bulbasaur', 'Charmander', 'Charmeleon']


const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([])  
  
  const catchPokemon = () => {
    setCaught(caught.concat(pokemonNameInput))
  // let randomPosition = Math.floor(Math.random() * 5)
  // const randomPokemon = pokemonNames[randomPosition]
  
  // const newCaught = caught.concat(pokemonNameInput);
  //   setCaught(newCaught);
  }

  const [pokemonNameInput, setPokemonNameInput] = useState('');
  function handleInputChange (event) {
      setPokemonNameInput(event.target.value)
  }

    return (
      <div>
      <p>Caught {caught.length} Pokémon on {props.date}</p> 
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
      <input type="text" value={pokemonNameInput} onChange={handleInputChange} />
      <button onClick={catchPokemon}>Catch a Pokemon!</button>
      </div>
    )
  };

  export default CaughtPokemon;