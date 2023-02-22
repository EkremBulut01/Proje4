import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { authentication } from '../Firebase/firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {db} from '../Firebase/firebase-config'
import { doc, setDoc } from "firebase/firestore"; 
import FormError from '../Components/FormError'
import LinearGradient from 'react-native-linear-gradient';

const SignIn = ({ navigation }) => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayError, setDisplayError] = useState(false)

  const register = async () => {
    
    createUserWithEmailAndPassword(authentication, email, password)
      .then( async(re) => {
        try {
          await setDoc(doc(db, "users", re.user.uid), {
            name: name,
            lastname: lastName,
            email: email
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error to adding document: ", e);
        }
        console.log(re)
      }).catch((err) => {
        console.log(err)
      })
  }

  const checkStatement = () => {
    if (name === '' || lastName === '' || email === '' || password === '') {
      return setDisplayError(true)
    }
    if (password.length < 6) {
      return setDisplayError(true)
    }
    register()
    alert('Succesful! You will be redirected to the login page')
    setInterval(() => {
    }, 2000)
    navigation.navigate('Login')
  }

  return (
    <View style={styles.mainView}>
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={['#92A3FD', '#C58BF2']}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={{
          alignItems: "center",
          justifyContent: "flex-start",
        }}>
          <Text style={styles.text}>Hey There</Text>
          <Text style={styles.text1}>Create an Account</Text>
        </View>

        <View style={styles.formView}>
          <TextInput style={styles.textInput} autoCapitalize='none' value={name} onChangeText={text => setName(text)} placeholder="First Name" />
          <TextInput style={styles.textInput} autoCapitalize='none' value={lastName} onChangeText={text => setLastName(text)} placeholder="Last Name" />
          <TextInput style={styles.textInput} autoCapitalize='none' value={email} onChangeText={text => setEmail(text)} placeholder="Email" />
          <TextInput style={styles.textInput} autoCapitalize='none' value={password} onChangeText={text => setPassword(text)} placeholder="Password" />
          <TouchableOpacity
          style={styles.linearGradient}
          onPress={checkStatement}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: 'black' }}>Register</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.bottomView}>
          <Text style={{ fontSize: 16 }}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={{ color: 'purple', fontSize: 16 }}> Login</Text>
          </TouchableOpacity>
        </View>
        {displayError == true ? <FormError message={setDisplayError} /> : null
        }
      </LinearGradient>
    </View>
  )

}
const styles = StyleSheet.create({
  bottomView: {
    marginTop: 275,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    color: "black",
    marginTop: 60,
    fontFamily: "Avenir",
  },
  text1: {
    fontSize: 28,
    color: "black",
    marginTop: 10,
    fontWeight: "bold",
  },
  formView: {
    marginTop: 20,
    width: "100%",
    height: 300,
    alignContent: "center",
    alignItems: "center",

  },
  textInput: {
    marginTop: 30,
    width: 320,
    height: 100,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    paddingLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 8,
    fontSize: 16,
    height: 50,
    placeholderTextColor: "black",

  },
  linearGradient: {
    backgroundColor  : 'white',
    marginTop: 160,
    alignItems: 'center',
    justifyContent: 'center',
    width: 315,
    height: 60,
    paddingRight: 15,
    borderRadius: 99
  },


})
export default SignIn