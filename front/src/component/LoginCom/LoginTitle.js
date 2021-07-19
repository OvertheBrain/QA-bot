import React from 'react';
import {Header, Text} from 'react-native-elements';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {ScrollView, View} from 'react-native';
import {themeColor} from '../../styles';

/**
 * LoginTitle - Show the title of Login or Register
 * */
class LoginTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: this.props.isLogin,
    };
  }
  render() {
    return this.state.isLogin ? (
      <View style={{flex: 2}}>
        <Text
          h1
          h1Style={{
            textAlign: 'center',
            marginTop: 50,
            marginBottom: 20,
            color: themeColor,
            fontSize: 43,
          }}>
          Login
        </Text>
      </View>
    ) : (
      <View style={{flex: 1}}>
        <Text
          h1
          h1Style={{
            textAlign: 'center',
            marginTop: 50,
            marginBottom: 20,
            color: '#1d3f63',
          }}>
          Register
        </Text>
      </View>
    );
  }
}
export default LoginTitle;
