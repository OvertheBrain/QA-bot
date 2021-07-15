import React from 'react';
import {ScrollView, View} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import {Input} from 'react-native-elements/dist/input/Input';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
    };
  }
  render() {
    return (
      <ScrollView>
        <View style={{flex: 2}}>
          <Avatar size={'xlarge'} rounded title="Register" />
        </View>
        <View style={{flex: 1}}>
          <Input placeholder={'User'} />
        </View>
        <View style={{flex: 1}}>
          <Input placeholder={'Password'} secureTextEntry={true} />
        </View>
        <View style={{flex: 1}}>
          <Input placeholder={'Password again'} secureTextEntry={true} />
        </View>
        <View style={{flex: 1}}>
          <Button
            buttonStyle={{height: 60, borderRadius: 20}}
            containerStyle={{marginHorizontal: 30, marginVertical: 10}}
            title="Register"
            type="outline"
            onPress={() => this.state.navigation.navigate('Home')}
          />
        </View>
      </ScrollView>
    );
  }
}
export default RegisterPage;
