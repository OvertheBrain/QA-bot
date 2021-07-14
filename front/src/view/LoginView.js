import React from 'react';
import {Button,SocialIcon,ThemeProvider,Divider} from 'react-native-elements';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class LoginView extends React.Component{

    render() {
        return (
            <ThemeProvider>

                <Button
                    title="Login"
                    type="outline"
                />

                <Button
                    title="Register"
                    type="clear"
                />





            </ThemeProvider>
        )
    }
}
export default LoginView
