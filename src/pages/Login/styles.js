import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  Input: {
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
    textAlign: 'center',
  },

  Button: {
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#DF4723',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  TextButton: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 16,
  },
});

export default Styles;