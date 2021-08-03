import * as React from 'react';

import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartPage from './view/StartPage';
import UserListPage from './view/UserListPage';
import LoginPage from './view/LoginPage';
import RegisterPage from './view/RegisterPage';
import ChatPage from './view/ChatPage';
import DeveloperPage from './view/DeveloperPage';
import BuyPage from './view/BuyPage';
import TestableStart from './view/StartPage';
import TestableLogin from './view/LoginPage';
import TestableUserList from './view/UserListPage';
import TestableDevelop from './view/DeveloperPage';
// Navigation Usage：onPress={() => navigation.navigate('Details')}
const Stack = createStackNavigator();
//传递参数
// function StartScreen({navigation}) {
//   return <StartPage navigation={navigation} />;
// }
function StartScreen({navigation}) {
  return <TestableStart navigation={navigation} />;
}

function BuyScreen({route, navigation}) {
  return <BuyPage route={route} navigation={navigation} />;
}
function HomeScreen({navigation}) {
  return <TestableUserList navigation={navigation} />;
}
function LoginScreen({navigation}) {
  return <TestableLogin navigation={navigation} />;
}
function RegisterScreen({navigation}) {
  return <RegisterPage navigation={navigation} />;
}
function ChatScreen({route, navigation}) {
  return <ChatPage route={route} navigation={navigation} />;
}
function DeveloperScreen({navigation}) {
  return <TestableDevelop navigation={navigation} />;
}
function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BuyAPI" component={BuyScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Developer" component={DeveloperScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
