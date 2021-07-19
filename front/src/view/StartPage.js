import React from 'react';
import {
  Button,
  SocialIcon,
  ThemeProvider,
  Divider,
  Tile,
  Text,
} from 'react-native-elements';
import {StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../styles';

class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
    };
  }

  render() {
    return (
      <Divider style={styles.startContainer} >
        <Text
          h1
          h1Style={{textAlign: 'center', marginBottom: 200, color: '#ffffff'}}>
          QA Robot
        </Text>

        <Button
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            title="登录"
            titleStyle={styles.buttonTitle}
            type="clear"
            onPress={() => this.state.navigation.navigate('Login')}
        />

        <Button

            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            title="注册"
            titleStyle={styles.buttonTitle}
            type="clear"
            onPress={() => this.state.navigation.navigate('Register')}
        />


      </Divider>
    );
  }
}
export default StartPage;
