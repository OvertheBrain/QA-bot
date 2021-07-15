import React from 'react';
import {ScrollView, View} from 'react-native';
import {Avatar, Button, Header} from 'react-native-elements';
import {Text} from 'react-native-elements';
import {Input} from 'react-native-elements/dist/input/Input';
import {Icon} from 'react-native-elements/dist/icons/Icon';

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
        <View style={{flex: 1}}>
          <Header
            leftComponent={
              <Icon
                name="left"
                type="antdesign"
                onPress={() => {
                  this.state.navigation.navigate('Start');
                }}
              />
            }
          />
        </View>
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
        <View style={{flex: 1}}>
          <Input
            placeholder={'Username'}
            leftIcon={<Icon name="user" type="font-awesome" color="#1d3f63" />}
          />
        </View>
        <View style={{flex: 1}}>
          <Input
            placeholder={'Password'}
            secureTextEntry={true}
            leftIcon={
              <Icon name={'lock'} type="font-awesome" color="#1d3f63" />
            }
          />
        </View>
        <View style={{flex: 1}}>
          <Input
            placeholder={'Password again'}
            secureTextEntry={true}
            leftIcon={
              <Icon name={'lock'} type="font-awesome" color="#1d3f63" />
            }
          />
        </View>
        <View style={{flex: 1}}>
          <Button
            buttonStyle={{height: 60, borderRadius: 20}}
            containerStyle={{
              marginHorizontal: 30,
              marginVertical: 10,
              marginTop: 15,
            }}
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
