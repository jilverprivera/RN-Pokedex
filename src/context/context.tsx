import React, {createContext, useEffect, useRef, useState} from 'react';
import {PokeAPI} from '../api/pokeAPI';
import {
  PokemonInfo,
  PokemonResp,
  Result,
  SimplePokemon,
} from '../interfaces/pokemonInterfaces';

interface Props {
  simplePokemon: SimplePokemon[];
  isLoading: boolean;
  getPokemons: () => Promise<void>;
}

export const ContextApp = createContext({} as Props);

export const ContextProvider = ({children}: any) => {
  const [isLoading, setIsLoading] = useState(true);

  const [simplePokemon, setSimplePokemon] = useState<SimplePokemon[]>([]);
  const [pokeData, setPokeData] = useState<PokemonInfo>({} as PokemonInfo);

  const nextURL = useRef(`https://pokeapi.co/api/v2/pokemon?limit=40`);

  const getPokemons = async () => {
    setIsLoading(true);
    const response = await PokeAPI.get<PokemonResp>(nextURL.current);
    nextURL.current = response.data.next;
    pokemonListToSimplePokemon(response.data.results);
  };

  const pokemonListToSimplePokemon = (arrPokemon: Result[]) => {
    const newPokemonList: SimplePokemon[] = arrPokemon.map(({name, url}) => {
      const urlSplit = url.split('/');
      const id = urlSplit[urlSplit.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return {id, picture, name};
    });
    setSimplePokemon([...simplePokemon, ...newPokemonList]);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <ContextApp.Provider
      value={{
        simplePokemon: simplePokemon,
        isLoading: isLoading,
        getPokemons,
      }}>
      {children}
    </ContextApp.Provider>
  );
};
