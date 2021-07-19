import React from 'react';
import {ScrollView, View} from 'react-native';
import {Avatar, Button, Header} from 'react-native-elements';
import {Text} from 'react-native-elements';
import {Input} from 'react-native-elements/dist/input/Input';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import LoginTitle from '../component/LoginCom/LoginTitle';
import RightIcon from '../component/LoginCom/RightIcon';
import ReturnHead from '../component/LoginCom/ReturnHead';
import {styles} from '../styles';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      username: '',
      firstPassword: '',
      secondPassword: '',
      firstVisible: true,
      secondVisible: true,
      isShowFirst: false,
      isShowSecond: false,
      firstVisIcon: true,
      secondVisIcon: true,
      isSame: true,
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
  render() {
    const eyeIcon = ['eye-slash', 'eye'];
    let canClick = true;
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
          />
        </View>
        <View style={{flex: 1}}>
          <Input
            placeholder={'Password'}
            secureTextEntry={this.state.firstVisible}
            leftIcon={
              <Icon name={'lock'} type="font-awesome" color="#1d3f63" />
            }
            rightIcon={
              <RightIcon
                isShow={this.state.isShowFirst}
                visible={this.state.firstVisible}
                visIcon={this.state.firstVisIcon}
                changeProp={this.changeProps1.bind(this)}
              />
            }
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
            rightIcon={
              <RightIcon
                isShow={this.state.isShowSecond}
                visible={this.state.secondVisible}
                visIcon={this.state.secondVisIcon}
                changeProp={this.changeProps2.bind(this)}
              />
            }
            onChangeText={password => {
              this.setState({isShowSecond: true, secondPassword: password});
            }}
          />
          {!this.state.isSame && (
            <Text style={{color: 'red'}}>the password is not the same</Text>
          )}
        </View>

        <View style={{flex: 1}}>
          <Button
            buttonStyle={styles.button1}
            containerStyle={styles.buttonContainer}
            title="注册"
            titleStyle={styles.buttonTitle1}

            type="outline"
            disabled={!canClick}
            onPress={() => this.state.navigation.navigate('Home')}
          />
        </View>
      </ScrollView>
    );
  }
}
export default RegisterPage;
