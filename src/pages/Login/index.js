import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import Styles from './styles';

import logo from '../../assets/logo/logo.png';

export default function Login({ navigation }) {
  const [ user, setUser ] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then( user => {
      if( user ) {
        navigation.navigate('Main', { user });
      }
    });
  }, []);

  async function handleLogin() {
    const response = await api.post('/devs', {
      username: user,
    });

    const { _id } = response.data;

    await AsyncStorage.setItem('user', _id );

    navigation.navigate('Main', { user: _id });
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={ Platform.OS === 'ios' }
      style={ Styles.Container }
    >
      <Image source={ logo } />

      <TextInput
        autoCapitalize="none"
        autoCorrect={ false }
        placeholder="Digite seu usuario do GitHub"
        placeholderTextColor="#999"
        style={ Styles.Input }
        value={ user }
        onChangeText={ setUser }
      />

      <TouchableOpacity onPress={ handleLogin } style={ Styles.Button }>
        <Text style={ Styles.TextButton }>Enviar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};