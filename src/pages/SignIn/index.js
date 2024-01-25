import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'

export default function SignIn() {
 return (
<View style={styles.container}>
  <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader} >
    <Text style={styles.message}>Bem vindo(a)</Text>
  </Animatable.View>
  
  <Animatable.View animation='fadeInUp' style={styles.containerForm}>

    <Text style={styles.title}>Email</Text>
    <TextInput style={styles.input} placeholder='Digite seu email'/>

    <Text style={styles.title}>Senha</Text>
    <TextInput style={styles.input}placeholder='Digite sua senha'/>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Acessar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonRegister}>
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