import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Button } from '@rneui/base';
import {firebase } from '../config'



const MyTextInput = ({ placeholder, value }) => {
    const [number, setNumber] = React.useState('');

    const onChanged = (text) => {
        let newText = '';
        let numbers = '0123456789';

        for (var i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            }
            else {
                alert("please enter numbers only");
            }
        }
        setNumber(newText);
        value = number
    }

    return (
        <TextInput
            keyboardType='numeric'
            onChangeText={text => onChanged(text)}
            value={number}
            style={styles.input}
            placeholder={placeholder}
            maxLength={10}
        />
    )

}

 function CreateData({navigation , route}) {
    const { userId } = route.params;
    let id = userId
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [age, setAge] = useState('')
    const writeData = () => {
        firebase.firestore().collection('users').doc(id).update({
            msg1 : 'I love ducchickensks'
        })
    }
    return (
        <ScrollView style={styles.mainContainer}>
            <Text>CreateData 
            {id}
            </Text>
            <TextInput style={styles.input} value={weight} onChangeText={(text)=>setWeight(text)}  keyboardType='numeric' placeholder="Weight" />
            <TextInput style={styles.input} value={height} onChangeText={(text)=>setHeight(text)} keyboardType='numeric' placeholder="Height" />
            <TextInput style={styles.input} value={age} onChangeText={(text)=>setAge(text)} keyboardType='numeric' placeholder="Age" />

            <Button title='Hiiiii' onPress={writeData} />

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 80,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        paddingLeft: 10,


    }
})
export default CreateData