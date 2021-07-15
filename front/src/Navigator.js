import * as React from 'react';

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './view/StartPage';
import UserListPage from './view/UserListPage';
import LoginPage from './view/LoginPage';
import RegisterPage from './view/RegisterPage';


// Navigation Usage：onPress={() => navigation.navigate('Details')}
function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}
const Stack = createStackNavigator();
function StartScreen({ navigation }){
    return(
        <StartPage navigation={navigation} />
    )
}
function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Start" component={StartScreen} headerMode={"none"}/>
                <Stack.Screen name="Home" component={UserListPage} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Register" component={RegisterPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
