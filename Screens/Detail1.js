import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import MyIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient'

function App({navigation}) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Image source={require("../Assets/Images/Group.jpg")} style={styles.imager} />
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.headerText}>Track Your Goal</Text>
                <View style={{width: '95%'}}>
                    <Text style={styles.miniText}>Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals</Text>
                    <LinearGradient
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        colors={['#92A3FD', '#9DCEFF']}
                        style={styles.circularView}
                    >
                        <MyIcon onPress={()=> navigation.navigate('Details1')} name="chevron-right" size={30} color="white"  />   
                    </LinearGradient>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginLeft: 30,
    },
    miniText: {
        fontSize: 16,
        color: 'gray',
        marginTop: 20,
        marginLeft: 30,
        

    },
    imager: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '55%',
        backgroundColor: '#fff',
    },
    bottomContainer: {
        justifyContent: 'flex-start',
        width: '100%',
        height: '45%',
        backgroundColor: '#fff',
    },
    circularView: {
        marginTop: 100,
        marginRight: 20,
        alignSelf: 'flex-end',
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

})
export default App