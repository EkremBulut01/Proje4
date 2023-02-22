import { Text, StyleSheet, Button, Image } from 'react-native'
import React, { useState } from 'react';
import { Overlay } from '@rneui/themed';
const SplashGif = require('../Assets/Images/giphy.gif');
const FormError = (props) => {
    return (
        <Overlay overlayStyle={styles.Overlay}
            isVisible={true}
            onBackdropPress={() => props.message(false)}

        >
            <Image source={SplashGif} style={styles.gif} />
            <Text >Please enter your information</Text>
            <Button title='Close' onPress={() => props.message(false)} />

        </Overlay>
    )
}

const styles = StyleSheet.create({
    gif: {
        marginTop: 10,
        width: 150,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 200 / 2
    },
    Overlay: {
        width: 300,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',

    }
})
export default FormError