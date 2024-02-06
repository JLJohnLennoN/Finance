import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'

import * as Notification from 'expo-notifications'; 

export default function Actions({dataContact}) {
    const handleNotification = async() =>{
        Notification.scheduleNotificationAsync({
          content: {
            title: 'John',
            body: 'Notificação',
          },
          trigger:{
            seconds: 1,
          }
        });
    
      }
 return (
        
    <FlatList  
      data={dataContact}
      keyExtractor={(item) => String(item)}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) =>  
      <View style={styles.container}>
        <TouchableOpacity style={styles.content}>
            <View style={styles.contentIcon}>
                <Feather name='user' size={27} color='#FFF'/>
            </View>
            
            <View style={styles.contentLabel}>
                <Text style={styles.labelName}>{item.Name}</Text>
                <Text style={styles.labelValue}>R$ {item.value}</Text>
            </View>
            
        </TouchableOpacity>
        
      </View>}
    />
   
  );
}
const styles = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 14,
        paddingEnd: 14,
        paddingStart: 14,
    },
    content:{
        flexDirection:'row',
        backgroundColor:'#DADADA',
        borderColor:'#FFF',
        marginRight: 14,
        width: 150,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        padding: 3,
        borderWidth: 2,
    },
    contentIcon:{
        backgroundColor:'#48D1CC',
        width: 40,
        height: 40,
        borderRadius: 30,
        alignItems:'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor:'#FFF',
    },
    labelName:{
        marginStart: 5,
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',

    },
    labelValue:{
        marginStart: 5,
        color: '#FFF',
        fontSize: 10,
    }

})