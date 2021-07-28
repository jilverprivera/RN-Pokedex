import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import {useSimplePokemon} from '../hooks/useSimplePokemon';

import {RootStackParams} from '../navigation/Navigator';
import {FadeInImage} from '../components/fadeInImage';
import {PokemonDetail} from '../components/pokemonDetail';
import { MaterialTabs } from '../navigation/materialNavigator/Material';

import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;
  const {id, picture} = simplePokemon;
  const {top} = useSafeAreaInsets();
  const {isLoading, pokeData} = useSimplePokemon(id);

  return (
    <View style={styles.flex}>
      <View style={{...styles.pokemonContainer, backgroundColor: color}}>
        <TouchableOpacity
          style={{...styles.backButton, top: top + 15}}
          onPress={() => navigation.pop()}>
          <Icon name="chevron-back-outline" size={30} color="#f0f2f5" />
        </TouchableOpacity>
        <Text style={{...styles.pokemonId, top: top + 15, right: 15}}>
          #{id}
        </Text>
        <Image
          style={styles.pokeballDetail}
          source={require('../assets/pokebola-blanca.png')}
        />
        <FadeInImage uri={picture} style={styles.pokemonImage} />
        <View
          style={{
            ...styles.flex,
            ...styles.pokemonInfoWrapper,
            width: Dimensions.get('window').width,
          }}>
          {isLoading ? (
            <ActivityIndicator color={color} size={50} />
          ) : (
            <PokemonDetail pokemon={pokeData} color={color}/>
          )}
        </View>
      </View>
    </View>
  );
};
