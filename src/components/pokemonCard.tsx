import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import ImageColors from 'react-native-image-colors';

import {SimplePokemon} from '../interfaces/pokemonInterfaces';

import {styles} from '../theme/appTheme';

import {FadeInImage} from './fadeInImage';

export const PokemonCard = (pokemon: SimplePokemon) => {
  const isMounted = useRef(true);
  const [bgColor, setBgColor] = useState('rgba(255,255,255,0.5)');
  const windowWidth = Dimensions.get('window').width;

  const {navigate} = useNavigation();

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, {
      fallback: 'rgba(255,255,255,0.5)',
    }).then(colors => {
      if (!isMounted.current) return;
      colors.platform === 'android'
        ? setBgColor(colors.dominant || 'rgba(255,255,255,0.5)')
        : setBgColor(colors.background || 'rgba(255,255,255,0.5)');
    });
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigate('PokemonScreen', {simplePokemon: pokemon, color: bgColor})}>
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.45,
          backgroundColor: bgColor,
        }}>
        <FadeInImage style={styles.pokeImage} uri={pokemon.picture} />
        <Image
          style={styles.pokeball}
          source={require('../assets/pokebola-blanca.png')}
        />
        <View style={styles.inforContainer}>
          <Text style={styles.id}>#{pokemon.id}</Text>
          <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
