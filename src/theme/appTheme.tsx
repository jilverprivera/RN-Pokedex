import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  // <--- GLOBAL --->
  flex: {
    flex: 1,
  },

  globalMargin: {
    marginHorizontal: 10,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },

  image: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: -100,
    right: -100,
  },

  // <--- Pokemon card --->
  cardContainer: {
    margin: 9,
    position: 'relative',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  pokeImage: {
    width: '100%',
    height: 150,
    zIndex: 2,
  },
  pokeball: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -25,
    right: -25,
    zIndex: 1,
    opacity: 0.3,
  },

  inforContainer: {
    width: '95%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#5B5855',
    borderRadius: 10,
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    width: '70%',
    paddingVertical: 10,
    textAlign: 'center',
    color: '#f0f2f5',
    borderLeftWidth: 1,
    borderLeftColor: '#353535',
  },
  id: {
    fontSize: 14,
    width: '30%',
    paddingVertical: 10,
    textAlign: 'center',
    color: '#f0f2f5',
  },

  // *** POKEMON DETAIL ***
  pokemonContainer: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 15,
  },
  pokemonId: {
    position: 'absolute',
    right: 15,
    fontSize: 65,
    opacity: 0.6,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'capitalize',
    color: '#f0f2f5',
  },
  pokeballDetail: {
    width: 250,
    height: 250,
    top: 65,
    position: 'absolute',
    zIndex: 999,
    opacity: 0.5,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    top: 35,
    position: 'absolute',
    zIndex: 999,
  },
  pokemonInfoWrapper: {
    marginTop: 260,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  pokemonName: {
    textAlign: 'center',
    width: '100%',
    fontSize: 30,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  detailTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  statsWrapper: {
    // width:"95%",
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginHorizontal: 10,
    flexDirection: 'row',
  },
  statsName: {
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    paddingVertical: 5,
    width: 120,
    borderRightWidth: 2,
  },
  statsBase: {
    fontSize: 12,
    textTransform: 'capitalize',
    textAlign: 'center',
    marginRight: 5,
  },
});
