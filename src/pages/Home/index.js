import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Conta luz',
    value: '250,00',
    date: '28/01/2024',
    type:0// despesas
  },
  {
    id: 2,
    label: 'Internet',
    value: '170,00',
    date: '30/12/2023',
    type:0// despesas
  },
  {
    id: 3,
    label: 'Pix recebido',
    value: '573,90',
    date: '10/01/2024',
    type:1// receita
  },
  {
    id: 4,
    label: 'Condominio',
    value: '250,00',
    date: '10/01/2024',
    type:0// despesas
  },
  {
    id: 5,
    label: 'Salario',
    value: '5.000,00',
    date: '05/01/2024',
    type:1// receita
  },
]

const Contactlist = [
  {
    id: 1,
    Name: 'John',
    value: '250,00',
  },
  {
    id: 2,
    Name: 'Mariane',
    value: '170,00',
   
  },
  {
    id: 3,
    Name: 'Isabela',
    value: '573,90',
   
  }
]

export default function Home() {

 return (
   <View>
    <Header name='John Neves'/>
    <Balance saldo='15.070,75' gastos='-2.340,68'/>
    
    <Actions dataContact={Contactlist}/>
    <Text style={styles.title}>Ultimas movimentações</Text>
    
    <FlatList 
      style={styles.list}
      data={list}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Movements data={item}/>}
    />
   </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FAFAFA'
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: 14

    }, 
    list:{
      marginStart: 14,
      marginE: 14,
    },
})