import React from 'react';
import {Header, Input} from 'react-native-elements';
import {Alert, AsyncStorage, View} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {styles, themeColor} from '../styles';
import {NameEditService} from '../service/UserService';

class NameEditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      username: '',
      name: '',
    };
  }
  async componentDidMount() {
    try {
      const shop = await AsyncStorage.getItem('user');
      let user = JSON.parse(shop);
      this.setState({username: user.username});
      console.log(this.state.username);
    } catch (error) {
      console.log(error);
    }
  }
  handleNameEdit() {
    if (this.state.name.length > 30) {
      Alert.alert('提示', '用户名长度不能超过30个字', [
        {text: '我知道了', onPress: this.confirm},
      ]);
      //百度好像中文一个字length和编码方式有关？
      this.state.navigation.navigate('NameEdit');
      this.setState({name: ''});
      //输入新名字长度超出范围，点击edit Icon后清空输入
    } else {
      // AsyncStorage.getItem('user').then(data => {
      //   if (data) {
      //     let userdata = JSON.parse(data);
      //     this.setState({username: userdata.username});
      //   }
      // });
      NameEditService(this.state.username, this.state.name, data => {
        console.log(data);
        if (data.msg === 'success') {
          Alert.alert('提示', '修改成功', [
            {
              text: '我知道了',
              onPress: this.confirm,
            },
          ]);
        } else {
          Alert.alert('提示', '修改失败', [
            {
              text: '我知道了',
              onPress: this.confirm,
            },
          ]);
        }
        this.state.navigation.navigate('Developer');
      });
    }
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Header
          style={{flex: 1}}
          backgroundColor={themeColor}
          leftComponent={
            <Icon
              name="angle-left"
              type="font-awesome"
              size={40}
              color={'white'}
              onPress={() => {
                this.state.navigation.navigate('Developer');
              }}
            />
          }
          centerComponent={{
            text: 'EditName',
            style: {color: '#fff', fontSize: 30},
          }}
        />
        <View>
          <Input
            placeholder="new name"
            onChangeText={name => this.setState({name: name})}
            rightIcon={
              <Icon
                name="edit"
                size={24}
                color="black"
                onPress={() => this.handleNameEdit()}
              />
            }
          />
        </View>
      </View>
    );
  }
}

export default NameEditPage;
