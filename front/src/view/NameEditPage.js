import React from 'react';
import {Header, Input} from 'react-native-elements';
import {Alert, AsyncStorage, View} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {themeColor} from '../styles';
import {NameEditService} from '../service/UserService';

class NameEditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      username: '',
      newname: '',
    };
  }

  handleNameEdit() {
    if (this.state.newname.length > 30) {
      Alert.alert('提示', '用户名长度过长', [
        {text: '我知道了', onPress: this.confirm},
      ]);
      this.state.navigation.navigate('NameEdit');
      this.setState({newname: ''});
      //输入新名字长度超出范围，点击edit Icon后清空输入
    } else {
      AsyncStorage.getItem('user').then(data => {
        if (data) {
          let userdata = JSON.parse(data);
          this.setState({username: userdata.username});
        }
      });
      NameEditService(this.state.username, this.state.newname, data => {
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
            onChangeText={name => this.setState({newname: name})}
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
