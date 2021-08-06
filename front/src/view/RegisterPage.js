import React from 'react';
import {Alert, AsyncStorage, ScrollView, View} from 'react-native';
import {Button, CheckBox} from 'react-native-elements';
import {Text} from 'react-native-elements';
import {Input} from 'react-native-elements/dist/input/Input';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import LoginTitle from '../component/LoginCom/LoginTitle';
import RightIcon from '../component/LoginCom/RightIcon';
import ReturnHead from '../component/LoginCom/ReturnHead';
import {styles, themeColor} from '../styles';
import {GetUser, RegisterService} from '../service/UserService';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      username: '',
      firstPassword: '',
      secondPassword: '',
      usertype: 0,
      firstVisible: true,
      secondVisible: true,
      isShowFirst: false,
      isShowSecond: false,
      firstVisIcon: true,
      secondVisIcon: true,
      emailAddress: '',
      emailError: false,
      isSame: true,
      isExist: false,
    };
  }
  changeProps1(v, i) {
    this.setState({firstVisible: v, firstVisIcon: i});
  }
  changeProps2(v, i) {
    this.setState({secondVisible: v, secondVisIcon: i});
  }
  changeNav(n) {
    this.setState({navigation: n});
  }
  checkExist() {
    GetUser(this.state.username, data => {
      console.log(data);
      if (data.msg === 'exist') {
        this.setState({isExist: true});
      } else {
        this.setState({isExist: false});
      }
    });
  }
  checkEmail() {
    let regex =
      /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    if (!regex.test(this.state.emailAddress)) {
      this.setState({emailError: true});
    } else {
      this.setState({emailError: false});
    }
  }
  /**
   * handleRegister - 注册
   * 如果勾选开发者，注册成功跳转到开发者页面，普通用户跳转到机器人选择页面。
   * 存在用户，提示已存在该用户，并重新输入。
   * 如果两次输入密码不一致，无法注册
   * */
  handleRegister() {
    if (
      this.state.username === '' ||
      this.state.firstPassword === '' ||
      this.state.secondPassword === ''
    ) {
      Alert.alert('提示', '用户名与密码不能为空', [
        {text: '我知道了', onPress: this.confirm},
      ]);
    } else {
      this.setState({usertype: this.state.usertype});
      RegisterService(
        this.state.username,
        this.state.firstPassword,
        this.state.usertype,
        this.state.emailAddress,
        data => {
          console.log(data);
          let message = data.userdata;

          if (message === 'exist') {
            Alert.alert('提示', '用户名已存在', [
              {text: '我知道了', onPress: this.confirm},
            ]);
          } else {
            AsyncStorage.setItem('user', JSON.stringify(data));
            if (this.state.usertype) {
              this.state.navigation.navigate('DevHome');
            } else {
              this.state.navigation.navigate('Home');
            }
          }
        },
      );
    }
  }
  render() {
    let canClick;
    let emailMsg = '邮箱地址为空或者格式错误';
    if (this.state.firstPassword === '') {
      this.state.isShowFirst = false;
    }
    if (this.state.secondPassword === '') {
      this.state.isShowSecond = false;
    }
    if (this.state.firstPassword !== this.state.secondPassword) {
      this.state.isSame = false;
      canClick = false;
    } else {
      this.state.isSame = true;
      canClick = true;
    }
    let iconView1 = this.state.isShowFirst ? (
      <RightIcon
        visible={this.state.firstVisible}
        visIcon={this.state.firstVisIcon}
        changeProp={this.changeProps1.bind(this)}
      />
    ) : null;
    let iconView2 = this.state.isShowSecond ? (
      <RightIcon
        visible={this.state.secondVisible}
        visIcon={this.state.secondVisIcon}
        changeProp={this.changeProps2.bind(this)}
      />
    ) : null;
    return (
      <ScrollView>
        <ReturnHead
          navigation={this.state.navigation}
          changeNav={this.changeNav.bind(this)}
        />
        <LoginTitle isLogin={false} />
        <View style={{flex: 1}}>
          <Input
            placeholder={'Username'}
            leftIcon={<Icon name="user" type="font-awesome" color="#1d3f63" />}
            onChangeText={username => {
              this.setState({username: username});
            }}
            onBlur={() => this.checkExist()}
            errorStyle={{color: 'red'}}
            errorMessage={this.state.isExist ? '用户名已存在' : ''}
          />
        </View>
        <View style={{flex: 1}}>
          <Input
            placeholder={'Email'}
            leftIcon={<Icon name={'mail'} type="AntDesign" color="#1d3f63" />}
            onChangeText={email => {
              this.setState({emailAddress: email});
              this.checkEmail();
            }}
            onBlur={() => {
              if (this.state.emailAddress === '') {
                this.setState({emailError: true});
              }
            }}
            errorStyle={{color: 'red'}}
            errorMessage={this.state.emailError ? emailMsg : ''}
          />
        </View>
        <View style={{flex: 1}}>
          <Input
            placeholder={'Password'}
            secureTextEntry={this.state.firstVisible}
            leftIcon={
              <Icon name={'lock'} type="font-awesome" color="#1d3f63" />
            }
            rightIcon={iconView1}
            onChangeText={password => {
              this.setState({isShowFirst: true, firstPassword: password});
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <Input
            placeholder={'Password again'}
            secureTextEntry={this.state.secondVisible}
            leftIcon={
              <Icon name={'lock'} type="font-awesome" color="#1d3f63" />
            }
            rightIcon={iconView2}
            onChangeText={password => {
              this.setState({isShowSecond: true, secondPassword: password});
            }}
            errorStyle={{color: 'red'}}
            errorMessage={!this.state.isSame ? '两次输入密码不一致' : ''}
          />
        </View>
        <View style={{flex: 1}}>
          <CheckBox
            title={'注册为开发者'}
            checked={this.state.usertype}
            size={30}
            onPress={() => {
              this.setState({usertype: !this.state.usertype});
            }}
            containerStyle={{backgroundColor: '', padding: 5, margin: 5}}
            checkedColor={themeColor}
          />
        </View>
        <View style={{flex: 1}}>
          <Button
            buttonStyle={styles.button1}
            containerStyle={styles.buttonContainer}
            title="注册"
            titleStyle={styles.buttonTitle1}
            type="outline"
            disabled={!canClick}
            onPress={() => this.handleRegister()}
          />
        </View>
      </ScrollView>
    );
  }
}
export default RegisterPage;
