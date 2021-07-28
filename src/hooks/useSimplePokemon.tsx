import {useState, useEffect} from 'react';
import {PokeAPI} from '../api/pokeAPI';
import {PokemonInfo} from '../interfaces/pokemonInterfaces';

export const useSimplePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokeData, setPokeData] = useState<PokemonInfo>({} as PokemonInfo);

  useEffect(() => {
    const getPokemonInformation = async () => {
      const response = await PokeAPI.get<PokemonInfo>(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
      );
      setPokeData(response.data);
      setIsLoading(false);
    };
    getPokemonInformation();
  }, []);

  return {
    isLoading,
    pokeData,
  };
};
