import React from 'react';
import Logo from "./Logo";
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';

const App = () => {
  const logWhenClicked = () => {
    console.log("You clicked me")
  }

  return (
  <div>
    <Logo appName="Pokedex" handleClick={logWhenClicked}/>
    <BestPokemon abilities={['Anticipation', 'Adaptability', 'Run-Away']}/>
    <CaughtPokemon date={new Date().toLocaleDateString()}/>
  </div>
)};




export default App;
