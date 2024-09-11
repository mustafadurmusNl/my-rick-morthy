import React from 'react';
import { CharacterCard } from './CharacterCard';

export function CharacterList() {
  // TODO: Fetch and display the data.
  // 1. Set a state for the data, so we can store the data.
  // 2. Call useEffect to get the data.
  // 3. Map over the data and display it.

  const [characters, setCharacters] = React.useState([]);
  const [error, setError] = React.useState('');

  const fetchCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');

      const data = await response.json();

      setCharacters(data);
    } catch (e) {
      setError(e);
      console.log(`Oh no, an error occured: ${e}`);
    }
  };

  const onHandleClick = () => fetchCharacters();

  // React.useEffect(() => {
  //   fetchCharacters();
  // }, []); // effect will run after initial render, so just once.

  return (
    <>
      {characters.results ? (
        characters.results.map(({ name, species, image }, i) => (
          <CharacterCard key={i} name={name} species={species} image={image} />
        ))
      ) : (
        <p>Click on the button to load data!</p>
      )}
      <p>{error}</p>
      {!characters.results ? (
        <button onClick={onHandleClick}>Fetch characters</button>
      ) : null}
    </>
  );
}
