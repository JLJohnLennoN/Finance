import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';


export default function Balance() {
 return (
   <View style={styles.container}>

    <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View>
            <Text style={styles.currencySymbol}>R$</Text>
            <Text style={styles.balance}>15.000</Text>
        </View>
    </View>

    <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View>
            <Text style={styles.currencySymbol}>R$</Text>
            <Text style={styles.balance}>2.450</Text>
        </View>
    </View>

   </View>
  );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 5,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex:99,

    },
  
    
})