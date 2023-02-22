import { View, Text, StyleSheet,   Image  , Button} from 'react-native'
import React from 'react'
import { Overlay } from '@rneui/themed';



export default function LoginSucces(props) {
    const navigation = () => {
        return props.myNavigation.navigate('CompleteProfile', {
            userId : props.myId
          })
    }
    const multipleAction = () => {
        props.isSignedIn(false)
        navigation()
    }

    return (

        <Overlay isVisible={true} overlayStyle={styles.overlay} onBackdropPress={() => props.isSignedIn(false)}>
            <Text style={styles.text}>
                 Succesful!
                 sssss
                 {props.myId}
            </Text>
            
            <Image source={require('../Assets/Icons/icons8-ok-144(@3x).png')} style={styles.image} />
         <Button title='Go' onPress={multipleAction} />

        </Overlay>
    )
}
const styles = StyleSheet.create({
    text : {
        fontSize: 24,
        fontWeight: 'bold',
    },
    image : {
        marginTop: 20,
        width: 150,
        height: 150,
        resizeMode: 'contain',

    },
    overlay: {
        width: 300,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',

    }
})
