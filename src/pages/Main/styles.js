import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },

  Logo: {
    marginTop: 30,
  },

  Empty: {
    alignSelf: 'center',
    color: '#999',
    fontSize: 24,
    fontWeight: 'bold',
  },

  CardsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 500,
  },

  Card: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    margin: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  Avatar: {
    flex: 1,
    height: 300,
  },

  Footer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  Name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  Bio: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    lineHeight: 18,
  },

  ButtonsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  Button: {
    width: 50,
    height: 50,
    borderRadius: 24,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  MatchContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  MatchImage: {
    height: 60,
    resizeMode: 'contain',
  },

  MatchAvatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: '#FFF',
    marginVertical: 30,
  },

  MatchName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF',
  },

  MatchBio: {
    marginTop: 10,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 30,
  },

  Close: {
    marginTop: 30,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

export default Styles;