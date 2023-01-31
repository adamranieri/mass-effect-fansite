import React from 'react';
import { CrewmateInfo } from './crew-member';
import { CharacterList } from './famous-character-list';
import { PlanetInfo } from './planet-info';

function App() {
  const planets = [
    {name:"Tuchanka", population:300000, originSpecies:"Krogan"},
    {name:"Thessia", population:60000000, originSpecies:"Asari"},
    {name:"Quaria", population:20000, originSpecies:"Quarian"}
  ]
  return (
    <div>
      <h1>Mass Effect Fan Page</h1>
      <h6>A website byt Adam Ranieri</h6>
      <Intro></Intro>
      <CrewmateInfo name='Garrus' species='Turian' homeplanet='Palahven' specialty='sharpshooter'></CrewmateInfo>
      <CrewmateInfo name='Liara' species='Asari' homeplanet='Thessia' specialty='Bionics'></CrewmateInfo>
      <PlanetInfo name='Earth' population={7000000000} originSpecies="Humanity"></PlanetInfo>
      <PlanetInfo name='Theros' population={0} originSpecies=""></PlanetInfo>
      <CharacterList></CharacterList>
      {/* {planets.map(p => <PlanetInfo name={p.name} originSpecies={p.originSpecies} population={p.population}></PlanetInfo>)} */}
      {planets.map(p => <PlanetInfo {...p}></PlanetInfo>)}
      
    </div>  
  );
}

// by conventions Functions that are components are capitalized
function Intro(){

  const me1ReleaseYear: number = 2007;
  const me2ReleaseYear: number = 2010;
  const me3ReleaseYear: number = 2012;


  return(
    <>
    <p>Mass Effect is a trilogy of sci-fi RPG games. Where you save the galaxy from the Reapers as Commander Shepard</p>
    <ul>
      <li>Mass Effect 1 {me1ReleaseYear}</li>
      <li>Mass Effect 2 {me2ReleaseYear}</li>
      <li>Mass Effect 3 {me3ReleaseYear}</li>
    </ul>
    </>
    )
}

export default App;
