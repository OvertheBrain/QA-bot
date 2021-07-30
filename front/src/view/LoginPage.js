import React from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {Avatar, Button, CheckBox, Header} from 'react-native-elements';
import {Text} from 'react-native-elements';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {Input} from 'react-native-elements/dist/input/Input';
import RightIcon from '../component/LoginCom/RightIcon';
import ReturnHead from '../component/LoginCom/ReturnHead';
import {styles, themeColor} from '../styles';
import TestableScene from '../component/LoginCom/LoginTitle';

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
      Alert.alert('提示', '用户名或者密码错误', [
        {text: '我知道了', onPress: this.confirm},
      ]);
    }
  };

  render() {
    if (this.state.password === '') {
      this.state.isShow = false;
    }
    let iconView = this.state.isShow ? (
      <RightIcon
        visible={this.state.visible}
        visIcon={this.state.visIcon}
        changeProp={this.changeProps.bind(this)}
      />
    ) : null;
    return (
      <ScrollView>
        <ReturnHead
          navigation={this.state.navigation}
          changeNav={this.changeNav.bind(this)}
        />
        <TestableScene isLogin={true} />
        <View style={{flex: 1}}>
          <Input
            placeholder={'User'}
            leftIcon={
              <Icon name="user" type="font-awesome" color={themeColor} />
            }
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
              <Icon name={'lock'} type="font-awesome" color={themeColor} />
            }
            rightIcon={iconView}
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
            checkedColor={themeColor}
          />
        </View>
        <View style={{flex: 1}}>
          <Button
            buttonStyle={styles.button1}
            containerStyle={styles.buttonContainer}
            title="登录"
            titleStyle={styles.buttonTitle1}
            type="clear"
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
