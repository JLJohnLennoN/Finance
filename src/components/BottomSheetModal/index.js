import { useRef, useMemo } from 'react'
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'


export default function BottomSheetModal({handleClose, detail}) {
 return (
        <Animatable.View  
        animation='fadeInUp' delay={50}       
        style={styles.container}>
            <TouchableOpacity style={{flex: 1, zIndex: 9}} onPress={handleClose}></TouchableOpacity>

                <View style={styles.content}>
                    <TouchableOpacity 
                        style={styles.actionButton}
                        onPress={handleClose}
                    >
                        <Feather name='minimize-2' size={15} color='#48D1CC'/>
                    </TouchableOpacity>
                        <View style={styles.icon}>
                            <Ionicons name='cash' size={75} style={detail.type === 1 ? styles.value : styles.expenses}/>
                        </View>
                        <View style={styles.detailsContent}>
                            <Text style={styles.detailsText}>{detail.label}</Text>
                            <Text style={styles.detailsText}>{detail.date}</Text>
                            <Text style={styles.detailsTextValue}>R$ {detail.value}</Text>

                        </View>
                </View>

        </Animatable.View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    content:{
        flex: 1,
        backgroundColor:'rgba(255,255,255,1)',
        paddingStart:'5%',
        paddingEnd:'5%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        borderColor:'rgba(72,209,204, 0.5)',
        shadowColor: 'rgba(72,209,204, 1)',
        shadowOffset:{
            width: 0,
            height: 2
        },
        elevation: 5,
        shadowOpacity: 0.28,
        shadowRadius: 4,

        
    },
    actionButton:{
        zIndex: 99,
        width: 30,
        height: 30,
        backgroundColor: '#EEE9E9',
        borderRadius: 44/2,
        padding:8,
        alignSelf:'flex-end',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 14,
        shadowColor: 'rgba(0,0,0,1)',
        elevation: 5,
    },
    value:{
        color: '#2ECC71',
        justifyContent:'center',
        alignItems: 'center',
      },
      expenses:{
        color:'#E74C3C',
        justifyContent:'center',
        alignItems: 'center',
      },
      icon: {
        alignSelf: 'center',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#DADADA',
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor:'rgba(72,209,204, 0.5)',
      },
      detailsContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center: ',
        marginTop: 14,
      },
      detailsText:{
        color:'#2F4F4F',
        marginVertical: 14,
        fontSize: 18,
        fontWeight: 'bold',
      },
      detailsTextValue:{
        color:'#2F4F4F',
        marginVertical: 14,
        fontSize: 36,
        fontWeight: 'bold',
      }


})