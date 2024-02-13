import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { MotiView, AnimatePresence } from 'moti'


export default function Balance({saldo, gastos, hideValue}) {
 return (
   <MotiView 
    style={styles.container}
    from={{
        rotateX: '-100deg',
        opacity: 0,
    }}
    animate={{
        rotateX: '0deg',
        opacity: 1,
    }}
    transition={{
        type: 'timing',
        delay: 200,
        duration: 999,
    }}
   >
    
    { hideValue  ? (
          <AnimatePresence exitBeforeEnter>
          <MotiView 
            style={styles.skeleton}
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type:'timing'}}
          >
            
          </MotiView>
        </AnimatePresence>

        ) : (
            <AnimatePresence exitBeforeEnter> 
                <View style={styles.item}>
                    <Text style={styles.itemTitle}>Saldo</Text>
                    <View style={styles.content}>
                        <Text style={styles.currencySymbol}>R$</Text>
                        <Text style={styles.balance}>{saldo}</Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <Text style={styles.itemTitle}>Gastos</Text>
                    <View style={styles.content}>
                        <Text style={styles.currencySymbol}>R$</Text>
                        <Text style={styles.expenses}>{gastos}</Text>
                    </View>
                </View>
            </AnimatePresence>
        )
        }
   </MotiView>
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
    itemTitle: {
        fontSize: 20,
        color: '#DADADA',
    },
    content:{
        alignItems: 'center',
        flexDirection:'row',
    },
    currencySymbol:{
        color: '#DADADA',
        marginRight:6,
    },
    balance: {
        fontSize:22,
        color: '#2ECC71'
    },
    expenses: {
        fontSize:22,
        color:'#e74c3c',
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