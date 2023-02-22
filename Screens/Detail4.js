import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import MyIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient'

function App({navigation}) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Image source={require("../Assets/Images/Frame-3.jpg")} style={styles.imager} />
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.headerText}>Improve Sleep 
                Quality</Text>
                <View style={{width: '95%'}}>
                    <Text style={styles.miniText}>Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning</Text>
                    <View style={{marginTop :100 , marginLeft : 30 ,flex : 1 ,flexDirection: 'row' , width : '90%' , justifyContent : 'space-between', backgroundColor : 'red' }}>
                    <LinearGradient
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        colors={['#92A3FD', '#9DCEFF']}
                        style={styles.circularView}
                    >
                        <MyIcon onPress={()=> navigation.pop()} name="chevron-left" size={30} color="white"  />   
                    </LinearGradient>
                    <LinearGradient
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        colors={['#92A3FD', '#9DCEFF']}
                        style={styles.circularView2}
                    >
                        <MyIcon onPress={()=> navigation.navigate('SignIn')} name="chevron-right" size={30} color="white"  />   
                    </LinearGradient>
                    </View>
                    
                    
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
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
      circularView2: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },


})
export default App