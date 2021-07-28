import React from 'react';
import {useContext} from 'react';
import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonCard} from '../components/pokemonCard';
import {ContextApp} from '../context/context';
// import usePokemon from '../hooks/usePokemon';
import {styles} from '../theme/appTheme';

export const HomeScreen = () => {
  const {simplePokemon, getPokemons} = useContext(ContextApp);
  // console.log(state.simplePokemon);
  const {top} = useSafeAreaInsets();

  // const {isLoading, simplePokemon, getPokemons} = usePokemon();

  return (
    <View>
      <Image source={require('../assets/pokebola.png')} style={styles.image} />
      <FlatList
        data={simplePokemon}
        keyExtractor={pokemon => pokemon.id}
        numColumns={2}
        renderItem={({item}) => <PokemonCard {...item} />}
        onEndReached={getPokemons}
        onEndReachedThreshold={0.4}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
              top: top + 15,
              marginBottom: top + 15,
            }}>
            Pokedex
          </Text>
        }
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={40} color="#353535" />
        }
      />
    </View>
  );
};
