import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert , Button} from 'react-native'
import { React, useState } from 'react'

import LinearGradient from 'react-native-linear-gradient'
import { firebase } from '../config'
import { authentication } from '../Firebase/firebase-config';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import LoginSucces from '../Components/LoginSucces'




const createTwoButtonAlert = (title , msg) =>
    Alert.alert(
        title ===undefined ? 'Error' : title,
        msg === undefined ? 'Something Went Wrong' : msg,
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
    );
const LoginPage = ({navigation}) => {
    
    let [userId, setUserId] = useState()
    const changeNumber = (number) => {
        setUserId(23)
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignedIn, setIsSignedIn] = useState(false)
    const controlLogin = () => {
        userId = 112
        if (email === '' || password === '') {
            return createTwoButtonAlert('Warning !', 'Please Fill All Fields')
        }
        if (password.length < 6) {
            return createTwoButtonAlert(title = 'Warning ! ', msg = 'Password must be at least 6 characters')
        }
        
        login1()


    }
    const login1 = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
                .then((re) => {
                    setUserId(re.user.uid)
                    setIsSignedIn(true)
                    
                }).catch((err) => {
                    createTwoButtonAlert('Authentication Error !', 'Please Check Your Email and Password')
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.mainContainer}>

            <Text style={styles.headerText}>Hey there,</Text>
            <Text style={styles.headerText1}>Welcome Back</Text>
            <Text>{userId}</Text>
            <Button title='Change' onPress={changeNumber} />
            <TextInput style={styles.inputContainer} autoCapitalize='none' value={email} onChangeText={text => setEmail(text)} placeholder="Email" />
            <TextInput style={styles.inputContainer} autoCapitalize='none' value={password} onChangeText={text => setPassword(text)} placeholder="Password" />
            
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={{ marginTop: 10, }}>Forgot Your Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginTop: 250 }} onPress={controlLogin}>
                <LinearGradient
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    colors={['#92A3FD', '#9DCEFF']}
                    style={styles.loginButton}
                >
                    <Text style={{ color: 'purple', fontSize: 16 }}> Login</Text>
                </LinearGradient>
            </TouchableOpacity>
            {
                isSignedIn == true ? <LoginSucces isSignedIn={setIsSignedIn} myNavigation={navigation} myId={userId}/> : null
            }
        
        </View>
    )
}
const styles = StyleSheet.create({
    headerText: {
        marginTop: 90,
        fontSize: 20,
    },
    headerText1: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: 'bold'
    },
    mainContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    inputContainer: {
        flexDirection: "row",
        backgroundColor: "#F7F8F8",
        opacity: 1,
        width: 300,
        height: 50,
        borderRadius: 10,
        marginTop: 30,
        alignItems: "center",
        paddingLeft: 10,
    },
    loginButton: {
        backgroundColor: "red",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        width: 300,
    },

})
export default LoginPage