import React from "react";
import {Text , View , StyleSheet} from "react-native";
import Home from "./Screens/Home";
import DetailsScreen from "./Screens/Detail1";
import DetailsScreen1 from "./Screens/Detail2";
import DetailsScreen2 from "./Screens/Detail3";
import DetailsScreen3 from "./Screens/Detail4";
import Sign from "./Screens/SignIn";
import Login from "./Screens/LoginPage";
import ReadData from "./Screens/ReadData";
import NewLogin from './Screens/NewLogin'
import CreateData from "./Screens/CreateData";
import CompleteProfile from "./Screens/CompleteProfile";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:false}} />
        <Stack.Screen name="Details1" component={DetailsScreen1} options={{headerShown:false}} />
        <Stack.Screen name="Details2" component={DetailsScreen2} options={{headerShown:false}} />
        <Stack.Screen name="Details3" component={DetailsScreen3} options={{headerShown:false}} />
        <Stack.Screen name="SignIn" component={Sign} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="ReadData" component={ReadData} options={{headerShown:false}} />
        <Stack.Screen name="NewLogin" component={NewLogin} options={{headerShown:false}} />
        <Stack.Screen name="CreateData" component={CreateData} options={{headerShown:false}} />
        <Stack.Screen name="CompleteProfile" component={CompleteProfile} options={{headerShown:false}} />
      </Stack.Navigator>
            </NavigationContainer>
        
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});
export default App;