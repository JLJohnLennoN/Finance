import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';

export default function Home() {
 return (
   <View>
    <Header name='John Neves'/>
    <Balance/>
   </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FAFAFA'

    },
})