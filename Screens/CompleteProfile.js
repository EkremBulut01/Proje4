import React from 'react'
import { StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import MyIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient'
import { SelectList } from 'react-native-dropdown-select-list'
import { firebase } from '../config'
import { Button } from '@rneui/base';



const SquareGradient = (props) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            colors={['#C58BF2', '#EEA4CE']}
            style={styles.squareGradient}
        >
            <Text style={{ color: 'white', fontSize: 16 }}> {props.value} </Text>
        </LinearGradient>
    )

}
const ReactangularGradient = (props) => {
   
    const [pressed , setPressed] = React.useState(false)
    const [color1, setColor1] = React.useState('white')
    const [color2, setColor2] = React.useState('white')
    const toogle = () => {
        setPressed(!pressed)
        if(pressed){
            setColor1('white')
            setColor2('white')
    }
        else{
            setColor1('#C58BF2')
            setColor2('#EEA4CE')
        }
        console.log(pressed)
        
    }
    return (
        <TouchableOpacity onPress={toogle}>
            <LinearGradient
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                colors={[color1, color2]}
                style={styles.rectangularGradient}
            >
                <Text style={{ color: 'white', fontSize: 16 }}> {props.value} </Text>
            </LinearGradient>
        </TouchableOpacity>

    )

}

function App({ navigation, route }) {
    const id = route.params.userId
    const [selected, setSelected] = React.useState('')
    const [birth, setBirth] = React.useState('')
    const [height, setHeight] = React.useState('')
    const [weight, setWeight] = React.useState('')
    const data = [
        { key: '0', value: 'Choose Your Gender' },
        { key: '1', value: 'Male' },
        { key: '2', value: 'Female' },

    ]
    const writeData = () => {
        firebase.firestore().collection('users').doc(id).update({
            birthData: 1111,
            heightData: height,
            weightData: weight,
        })
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Image source={require("../Assets/Images/profileDatail.jpg")} style={styles.imager} />
            </View>
            <ScrollView style={styles.bottomContainer}>
                <Text style={styles.headerText}>Let’s complete your profile</Text>
                <View style={{ width: '95%' }}>
                    <Text style={styles.miniText}>It will help us to know more about you!</Text>
                    <View style={styles.selectView}>

                        <SelectList
                            setSelected={(value) => setSelected(value)}
                            data={data}
                            save='value'
                            boxStyles={styles.boxStyles}
                            search={false}
                            maxHeight={50}
                            placeholder=' Choose Gender'

                        />
                        <View style={{ width: 335, height: 50, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ backgroundColor: 'red', width: 150 }}><Text>Female</Text></View>
                            <ReactangularGradient value='Hello' />

                        </View>
                        <TextInput placeholderTextColor={'black'} value={birth} onChangeText={text => setBirth(text)} style={styles.input} placeholder="Date Of Birth" />
                        <View style={{ width: 335, flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput placeholderTextColor={'black'} value={weight} onChangeText={text => setWeight(text)} style={styles.input2} placeholder="Your Weight" />
                            <SquareGradient value='KG' />
                        </View>
                        <View style={{ width: 335, flexDirection: 'row' }}>
                            <TextInput placeholderTextColor={'black'} value={height} onChangeText={text => setHeight(text)} style={styles.input2} placeholder='Your Height' />
                            <SquareGradient value='CM' />
                        </View>


                        <TouchableOpacity onPress={writeData}>
                            <LinearGradient
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 1, y: 0.5 }}
                                colors={['#92A3FD', '#9DCEFF']}
                                style={styles.sendForm}
                            >
                                <Text style={{ color: 'white', fontSize: 16 }}> Next </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    sendForm: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 255,
        height: 50,
        borderRadius: 20,
        borderWidth: 0,

    },
    headerText: {
        marginLeft: 50,
        fontSize: 24,
        fontWeight: "bold",


    },
    miniText: {
        fontSize: 16,
        color: 'gray',
        marginLeft: 20,
        marginTop: 10,
        textAlign: 'center',

    },
    imager: {
        width: 355,
        height: 320,
        resizeMode: 'cover',

    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    topContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '50%',
        backgroundColor: '#fff',
    },
    bottomContainer: {
        width: '100%',
        height: '50%',

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
    boxStyles: {

        width: 335,
        height: 50,
        backgroundColor: '#DDDADA',
        borderRadius: 20,
        borderWidth: 0,
        opacity: 0.7,
    },
    selectView: {
        marginTop: 120,
        width: '106%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',

    },
    input: {
        marginTop: 15,
        width: 335,
        height: 50,
        backgroundColor: '#DDDADA',
        borderRadius: 20,
        borderWidth: 0,
        opacity: 0.5,
        paddingLeft: 20,

    },
    squareGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 30,
        height: 50,
        width: 50,
        borderRadius: 20,
    },
    rectangularGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        height: 50,
        width: 100,
        borderRadius: 20,
    },
    input2: {
        marginTop: 15,
        width: 255,
        height: 50,
        backgroundColor: '#DDDADA',
        borderRadius: 20,
        borderWidth: 0,
        opacity: 0.5,
        paddingLeft: 20,

    }
}

)
export default App