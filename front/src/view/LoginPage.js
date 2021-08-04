import React from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {AsyncStorage} from 'react-native';
import {Button, CheckBox} from 'react-native-elements';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {Input} from 'react-native-elements/dist/input/Input';
import RightIcon from '../component/LoginCom/RightIcon';
import ReturnHead from '../component/LoginCom/ReturnHead';
import {styles, themeColor} from '../styles';
import TestableScene from '../component/LoginCom/LoginTitle';
import {LoginService} from '../service/UserService';
import {hook, wrap} from 'cavy';

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
      msg: '',
      usertype: 0,
      inputUser: '',
      inputPwd: '',
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
  /**
   * handleLogin - 登录
   * 如果账号密码正确，开发者跳转到开发者页面，普通用户跳转到机器人选择页面。
   * 账号密码错误，提示输入错误，并重新输入。
   * */
  handleLogin = () => {
    // inputUser.current.clear();
    // inputPwd.current.clear();
    LoginService(this.state.username, this.state.password, data => {
      console.log(data);
      let userdata = '';
      userdata = data.userdata;
      this.setState({usertype: data.usertype});
      this.setState({msg: userdata});
      console.log(userdata);
      /**
       * 开发者usertype为1，普通用户usertype为0
       * */
      if (userdata === 'right') {
        AsyncStorage.setItem('user', JSON.stringify(data)).then(r => {});
        console.log(JSON.stringify(data));
        if (this.state.usertype) {
          this.state.navigation.navigate('BuyAPI');
        } else {
          this.state.navigation.navigate('Home');
        }
      } else {
        Alert.alert('提示', this.state.msg, [
          {
            text: '我知道了',
            onPress: this.confirm,
          },
        ]);
        //输入用户名错误，点击登录后清空输入
        this.state.navigation.navigate('Login');
        this.setState({inputUser: '', inputPwd: '', isShow: false});
      }
    });
  };

  render() {
    const {generateTestHook} = this.props;
    const WrappedButton = wrap(Button);
    // const TestableInput = wrap(Input);
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
            ref={generateTestHook('Login.userInput')}
            placeholder={'User'}
            leftIcon={
              <Icon name="user" type="font-awesome" color={themeColor} />
            }
            onChangeText={username => {
              this.setState({username: username, inputUser: username});
            }}
            value={this.state.inputUser}
          />
        </View>
        <View style={{flex: 1}}>
          <Input
            ref={generateTestHook('Login.pwdInput')}
            // ref={generateTestHook('LoginUser.Input')}
            placeholder={'Password'}
            secureTextEntry={this.state.visible}
            leftIcon={
              <Icon name={'lock'} type="font-awesome" color={themeColor} />
            }
            rightIcon={iconView}
            onChangeText={password => {
              this.setState({
                isShow: true,
                password: password,
                inputPwd: password,
              });
            }}
            value={this.state.inputPwd}
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
        <View style={styles.view}>
          <WrappedButton
            ref={generateTestHook('Login.btn')}
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
// export default LoginPage;
const TestableLogin = hook(LoginPage);

export default TestableLogin;
