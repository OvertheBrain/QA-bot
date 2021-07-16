import React from 'react';
import {ScrollView, View} from 'react-native';
import {Avatar, Button, CheckBox, Header} from 'react-native-elements';
import {Text} from 'react-native-elements';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {Input} from 'react-native-elements/dist/input/Input';
import LoginTitle from '../component/LoginCom/LoginTitle';
import RightIcon from '../component/LoginCom/RightIcon';
import ReturnHead from '../component/LoginCom/ReturnHead';

const User1 = {userName: 'sam', password: '123'};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      checked: false,
      visible: true,
      isShow: false,
      visIcon: true,
      username: '',
      password: '',
    };
  }
  /**
   * changeProps - 与子组件通信.
   * */
  changeProps(v, i) {
    this.setState({visible: v, visIcon: i});
  }

  changeNav(n) {
    this.setState({navigation: n});
  }

  handleLogin = () => {
    if (
      this.state.username === User1.userName &&
      this.state.password === User1.password
    ) {
      this.state.navigation.navigate('Home');
    } else {
      alert('用户名或者密码错误!');
    }
  };

  render() {
    if (this.state.password === '') {
      this.state.isShow = false;
    }
    return (
      <ScrollView>
        <ReturnHead
          navigation={this.state.navigation}
          changeNav={this.changeNav.bind(this)}
        />
        <LoginTitle isLogin={true} />
        <View style={{flex: 1}}>
          <Input
            placeholder={'User'}
            leftIcon={<Icon name="user" type="font-awesome" color="#1d3f63" />}
            onChangeText={username => {
              this.setState({username: username});
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <Input
            placeholder={'Password'}
            secureTextEntry={this.state.visible}
            leftIcon={
              <Icon name={'lock'} type="font-awesome" color="#1d3f63" />
            }
            rightIcon={
              <RightIcon
                isShow={this.state.isShow}
                visible={this.state.visible}
                visIcon={this.state.visIcon}
                changeProp={this.changeProps.bind(this)}
              />
            }
            onChangeText={password => {
              this.setState({isShow: true, password: password});
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <CheckBox
            title={'Remember'}
            checked={this.state.checked}
            size={30}
            onPress={() => {
              this.setState({checked: !this.state.checked});
            }}
            containerStyle={{backgroundColor: ''}}
          />
        </View>
        <View style={{flex: 1}}>
          <Button
            buttonStyle={{height: 60, borderRadius: 20, marginTop: 10}}
            containerStyle={{marginHorizontal: 30, marginVertical: 10}}
            title="Login"
            type="outline"
            onPress={() => {
              this.handleLogin();
            }}
          />
        </View>
      </ScrollView>
    );
  }
}
export default LoginPage;
