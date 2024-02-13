import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

import firebase from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {initializeApp} from 'firebase/app';

import { firebaseConfig } from '../../../firebaseConfig'

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log('Account created')
      const user = userCredential.user;
      console.log(user)
    }).catch(error =>{
      console.log(error)
      Alert.alert(error.message)
    })

  }
  const handleSignIn = () =>{
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log('Signed In')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('Home')
    }).catch(error =>{
      console.log(error)
      Alert.alert(error.message)
    })

  }

 return (
<View style={styles.container}>
  <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader} >
    <Text style={styles.message}>Bem vindo(a)</Text>
  </Animatable.View>
  
  <Animatable.View animation='fadeInUp' style={styles.containerForm}>

    <Text style={styles.title}>Email</Text>
    <TextInput 
      style={styles.input} 
      placeholder='Digite seu email' 
      onChangeText={setEmail}
      value={email}/>

    <Text style={styles.title}>Senha</Text>
    <TextInput 
      style={styles.input}
      placeholder='Digite sua senha'
      onChangeText={setPassword}
      value={password}
      secureTextEntr/>

    <TouchableOpacity style={styles.button}
    onPress={handleSignIn}>
      <Text style={styles.buttonText}>Acessar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonRegister} onPress={handleCreateAccount}>
      <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
    </TouchableOpacity>


  </Animatable.View>
    
</View> 
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#38A69D',
  },
  containerHeader:{
    marginTop:'14%',
    marginBottom:'8%',
    paddingStart:'5%'
  },
  message:{
    fontSize: 28,
    fontWeight:'bold',
    color:'#FFF'
  },
  containerForm:{
    flex:1,
    backgroundColor:'#FFF',
    borderTopLeftRadius: 25,
    borderTopStartRadius: 25,
    paddingStart: '5%',
    paddingEnd:'5%'
  },
  title:{
    marginTop: 20,
    fontSize: 20
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button:{
    backgroundColor: '#38A69D',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems:'center'
  },
  buttonText:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister:{
    marginTop: 14,
    alignSelf: 'center'
  },
  registerText:{
    color:'#A1A1A1'
  },

})