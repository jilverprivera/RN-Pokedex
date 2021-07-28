import React from 'react';
import * as Progress from 'react-native-progress';
import {ScrollView, View, Text, FlatList} from 'react-native';

import {PokemonInfo} from '../interfaces/pokemonInterfaces';

import {styles} from '../theme/appTheme';

interface Props {
  pokemon: PokemonInfo;
  color?: string;
}
export const PokemonDetail = ({pokemon, color}: Props) => {
  return (
    <View style={{...styles.flex, width: '100%', flex: 1}}>
      <Text style={styles.pokemonName}>{pokemon.name}</Text>

      <View
        style={{
          // width: '90%',
          // borderBottomWidth: 1,
          marginHorizontal: 10,
          marginBottom: 20,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        {pokemon.types.map(pokemon => (
          <Text
            key={pokemon.slot}
            style={{
              // borderWidth: 1,
              textAlign: 'center',
              textTransform: 'capitalize',
              fontSize: 20,
              marginHorizontal: 10,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 5,
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,

              elevation: 6,
            }}>
            {pokemon.type.name}
          </Text>
        ))}
      </View>

      <ScrollView style={{marginHorizontal: 10}}>
       
        {/* <Text style={styles.detailTitle}>{pokemon.base_experience}</Text> */}
        <Text style={styles.detailTitle}>Abilities</Text>
        <FlatList
          style={{marginVertical: 10}}
          data={pokemon.abilities}
          keyExtractor={pokemon => pokemon.ability.name}
          renderItem={({item}) => (
            <Text
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,

                borderRadius: 7.5,
                borderWidth: 1,
                marginRight: 10,
                fontSize: 17,
                textTransform: 'capitalize',
                textAlign: 'center',
              }}>
              {item.ability.name}
            </Text>
          )}
          horizontal={true}
        />
        <Text style={styles.detailTitle}>Stats</Text>
        {pokemon.stats.map(item => (
          <View key={item.stat.name} style={styles.statsWrapper}>
            <Text style={styles.statsName}>{item.stat.name}</Text>
            <Progress.Bar
              progress={item.base_stat / 100}
              width={180}
              color={color}
              borderWidth={0}
              height={5}
            />
            <Text style={styles.statsBase}>{item.base_stat}</Text>
          </View>
        ))}

        <Text style={styles.detailTitle}>Moves</Text>
        <FlatList
          style={{marginVertical: 10, paddingBottom:30}}
          data={pokemon.moves}
          keyExtractor={pokemon => pokemon.move.name}
          renderItem={({item}) => (
            <Text
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,

                borderRadius: 7.5,
                borderWidth: 1,
                marginRight: 10,
                fontSize: 17,
                textTransform: 'capitalize',
                textAlign: 'center',
              }}>
              {item.move.name}
              
            </Text>
          )}
          horizontal={true}
        />
      </ScrollView>
    </View>
  );
};
