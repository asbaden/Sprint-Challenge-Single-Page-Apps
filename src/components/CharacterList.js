import React, { useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import { Link } from "react-router-dom"
import SearchForm from "./SearchForm";


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

 
  const [dataIsFiltered, dataIsUpdated] = useState([]);

  const searching = allcharacters => {
    dataIsUpdated(allcharacters)
  }

 

  useEffect(() => {
   
    // TODO: Add API Request here - must run in `useEffect`
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      setCharacters(response.data.results);  
      dataIsUpdated(response.data.results);
      console.log("this is response", response);
    })
    .catch(error => {
      console.error("WRRRONG", error)
    });
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  return (
    <section className="character-list">
      <Link className='Links' to={"/"}>Home</Link>
      <SearchForm searching={searching} character={characters}/>

      {dataIsFiltered.map(character => (
        <CharacterCard 
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
        
        />

      ))}

    </section>
  );
};
