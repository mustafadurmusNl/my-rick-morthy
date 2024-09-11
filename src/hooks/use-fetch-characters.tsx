import {useState} from 'react';

export const useFetchCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character`
        );

        const data = await response.json();

        setCharacters(data);
      } catch (e) {
        console.log(`Oh no, an error occured: ${e}`);
      }
    };

    fetchCharacters();
  }, []); // effect will run after initial render, so just once.

  return characters;
};
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}

