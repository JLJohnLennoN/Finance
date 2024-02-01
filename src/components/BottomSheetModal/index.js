import { useRef, useMemo } from 'react'
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';


export default function BottomSheetModal({handleClose}) {
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(()=> ['30%', '80%'], []);

 return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{flex: 1, zIndex: 9}} onPress={handleClose}></TouchableOpacity>
            
                <View style={styles.content}>
                    <TouchableOpacity 
                    style={styles.actionButton}
                    onPress={()=>{}}

                    >
                        <Text style={styles.actionText}>X</Text>

                    </TouchableOpacity>
                </View>

        </SafeAreaView>
   
  );
}
const styles = StyleSheet.create({
    container:{
        flex: 2,
    },
    content:{
        flex: 1,
        backgroundColor:'rgba(200,200,200, 0.9)',
        paddingStart:'5%',
        paddingEnd:'5%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
        
    },
    actionButton:{
        zIndex: 99,
        backgroundColor: '#DADADA',
        borderRadius: 6,
        margiTop: 8,
        padding:8,
        borderWidth: 1,
        borderColor:'rgba(0,0,0, 0.1)',
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset:{
            width: 0,
            height: 2
        },
        elevation: 5,
        shadowOpacity: 0.28,
        shadowRadius: 4,
    },


})