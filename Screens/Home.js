import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity , Button } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const App = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>

            <View style={styles.topContainer}>
                <Image source={require("../Assets/Images/kit1.jpg")} style={styles.Image} />
                <Text style={styles.text}>Everybody Can Train</Text>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Details")}
                >
                    <LinearGradient
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        colors={['#92A3FD', '#9DCEFF']}
                        style={styles.linearGradient}
                    >
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: 'white' }}>Get Started</Text>
                    </LinearGradient>
                </TouchableOpacity>
            <Button title="Go to Last - 1" onPress={() => navigation.navigate("Login")} />
            <Button title="Go to Last" onPress={() => navigation.navigate("CompleteProfile")} />
            </View>



        </View>
    );
}
const styles = StyleSheet.create({
    linearGradient: {
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: 315,
        height: 60,
        paddingRight: 15,
        borderRadius: 99
    },
    mainContainer: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
    topContainer: {
        height: "80%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
    bottomContainer: {
        height: "20%",
        width: "100%",

        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
    Image: {
        marginTop: 70,
        width: 180,
        height: 60,
        resizeMode: 'contain'
    },
    text: {
        color: "gray",
        fontSize: 18,
    },
    buttonOne: {
        display: "flex",
        backgroundColor: "white",
        alignContent: "center",
        alignItems: "center",
        width: 315,
        height: 60,
    }
});
export default App;