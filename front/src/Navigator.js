import * as React from 'react';

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './view/StartPage';
import UserListPage from './view/UserListPage';
import LoginPage from './view/LoginPage';
import RegisterPage from './view/RegisterPage';
// Navigation Usage：onPress={() => navigation.navigate('Details')}
const Stack = createStackNavigator();
//传递参数
function StartScreen({ navigation }){
    return(
        <StartPage navigation={navigation} />
    )
}
function HomeScreen({ navigation }){
    return(
        <UserListPage navigation={navigation} />
    )
}
function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Start" component={StartScreen} headerMode={"none"}/>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Register" component={RegisterPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
