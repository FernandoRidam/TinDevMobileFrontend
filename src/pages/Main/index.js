import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import Styles from './styles';

import logo from '../../assets/logo/logo.png';
import like from '../../assets/like/like.png';
import dislike from '../../assets/dislike/dislike.png';

export default function Main({ navigation }) {
  const id = navigation.getParam('user');
  const [ devs, setDevs ] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('devs', {
        headers: {
          user: id,
        }
      });

      setDevs( response.data );
    }

    loadDevs();
  }, [ id ]);

  async function handleLike(){
    const [ dev, ...rest ] = devs;

    await api.post(`/devs/${ dev._id }/likes`, null, {
      headers: {
        user: id,
      }
    });

    setDevs( rest );
  }

  async function handleDeslike(){
    const [ dev, ...rest ] = devs;

    await api.post(`/devs/${ dev._id }/dislikes`, null, {
      headers: {
        user: id,
      }
    });

    setDevs( rest );
  }

  async function handleLogout() {
    await AsyncStorage.clear();

    navigation.navigate('Login');
  }

  return (
    <View style={ Styles.Container }>
      <TouchableOpacity onPress={ handleLogout }>
        <Image style={ Styles.Logo } source={ logo } />
      </TouchableOpacity>

      <View style={ Styles.CardsContainer } >
        { devs.length === 0
          ? <Text style={ Styles.Empty}>Acabou :( </Text>
          : (devs.map(( dev, index ) => (
            <View
              key={ dev._id }
              style={[ Styles.Card, { zIndex: devs.length - index }]}
            >
            <Image style={ Styles.Avatar } source={{ uri: dev.avatar }} />
  
            <View style={ Styles.Footer }>
              <Text style={ Styles.Name }>
                { dev.name }
              </Text>
  
              <Text style={ Styles.Bio } numberOfLines={ 3 }>
                { dev.bio }
              </Text>
            </View>
          </View>
          )))}
      </View>

      { devs.length > 0 && (
        <View style={ Styles.ButtonsContainer }>
          <TouchableOpacity
            style={ Styles.Button }
            onPress={ handleDeslike }
          >
            <Image source={ dislike }/>
          </TouchableOpacity>

          <TouchableOpacity
            style={ Styles.Button }
            onPress={ handleLike }
          >
            <Image source={ like }/>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};