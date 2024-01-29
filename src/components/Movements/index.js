import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MotiView, AnimatePresence, MotiText } from 'moti'

import { Feather } from '@expo/vector-icons'

export default function Movements({data}) {
  const [showValue, setShowValue] = useState(false);
  const [showButtonEye, setShowButtonEye] = useState('eye-off');
 return (
   <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue) }>
    <View style={styles.hide}>
      <Text style={styles.date}>{data.date} </Text>
    </View>    


    <View style={styles.content}>
      <Text style={styles.label}>{data.label} </Text>

        { showValue ? (
          <AnimatePresence exitBeforeEnter>
                <MotiText 
                style={data.type === 1 ? styles.value : styles.expenses}
                from={{
                  translateX: 100,
                }}
                animate={{
                  translateX: 0
                }}
                transition={{
                  type:'timing',
                  duration: 200,
                }}
                >
                  {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`} </MotiText>
                </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <MotiView 
            style={styles.skeleton}
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type:'timing'}}
            ></MotiView>
          </AnimatePresence>
        )
        }



    </View>
   </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginBottom: 24,
      borderBottomWidth: 0.5,
      borderBottomColor: '#DADADA',
    },
    hide:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems: 'center',
      marginEnd: 14,
    },
    content:{
      flexDirection: 'row',
      justifyContent:'space-between',
      marginTop: 2,
      marginBottom: 8,
    },
    date: {
      color: '#DADADA',
      fontWeight:'bold',
    },
    label:{
      fontWeight:'bold',
      fontSize: 16,
    },
    value:{
      fontSize: 16,
      color: '#2ECC71',
      fontWeight:'bold',
      marginEnd: 10,
    },
    expenses:{
      fontSize: 16,
      color:'#E74C3C',
      fontWeight:'bold',
      marginEnd: 10,
    },
    skeleton:{
      marginTop: 6,
      width: 80,
      height: 10,
      backgroundColor:'#DADADA',
      borderRadius: 10,
      marginEnd: 10,
    }
})

