import React from 'react';
import {
  Avatar,
  Button,
  CheckBox,
  Divider,
  Header,
  Text,
  ThemeProvider,
} from 'react-native-elements';
import {styles, themeColor} from '../styles';
import {AsyncStorage, View} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {hook, wrap} from 'cavy';
import {
  AvatarGetService,
  NicknameGetService,
  EmailGetService,
} from '../service/UserService';

class DeveloperPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      username: '',
      //临时赋值
      nickname: 'user',
      email: 'abc@123.com',
      //实际使用‘’
      imagedata: '',
      imagemime: '',
      user: {},
    };
  }
  // getAvatar = () => {
  //   AsyncStorage.getItem('user').then(data => {
  //     if (data) {
  //       let userdata = JSON.parse(data);
  //       console.log(userdata.username);
  //       this.setState({username: userdata.username});
  //     }
  //   });
  //   AvatarGetService(this.state.username, data => {
  //     this.setState({imagedata: data.imagedata, imagemime: data.imagemime});
  //   });
  // };
  //
  // getNickname = () => {
  //   AsyncStorage.getItem('user').then(data => {
  //     if (data) {
  //       let userdata = JSON.parse(data);
  //       this.setState({username: userdata.username});
  //     }
  //   });
  //   NicknameGetService(this.state.username, data => {
  //     this.setState({nickname: data.nickname});
  //   });
  // };
  getEmail = () => {
    AsyncStorage.getItem('user').then(data => {
      if (data) {
        let userdata = JSON.parse(data);
        this.setState({username: userdata.username});
      }
    });
    EmailGetService(this.state.username, data => {
      this.setState({email: data.email});
    });
  };

  async componentDidMount() {
    try {
      const shop = await AsyncStorage.getItem('user');
      let user = JSON.parse(shop);
      this.setState({user: user});
      console.log(this.state.user);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {generateTestHook} = this.props;
    const WrappedAvatar = wrap(Avatar);
    //test const {params} = this.props.route;

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
              //new              size={40}
              color={'white'}
              onPress={() => {
                this.state.navigation.navigate('Home');
              }}
            />
          }
          centerComponent={{
            text: this.state.user.nickname,
            style: {color: '#fff', fontSize: 30},
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 2,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            {/*空的view，用来让头像居中（暂时没想到更好的方法）*/}
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '60%',
              flex: 4,
            }}>
            <WrappedAvatar
              ref={generateTestHook('Develop.avatar')}
              rounded
              size={'large'}
              source={{
                uri: `data:${this.state.user.imagemime};base64,${this.state.user.imagedata}`,
              }}
            />
          </View>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Icon
              name="edit"
              color="black"
              onPress={() => {
                this.state.navigation.navigate('AvatarEdit');
              }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            {/*空的view，用来让用户名居中（暂时没想到更好的方法）*/}
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '60%',
              flex: 4,
            }}>
            <Text h3>{this.state.user.nickname}</Text>
          </View>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Icon
              name="edit"
              color="black"
              //new
              onPress={() => {
                this.state.navigation.navigate('NameEdit');
              }}
              //new
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text h3>{this.state.user.email}</Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 7,
          }}>
          <Button
            buttonStyle={styles.button1}
            containerStyle={styles.buttonContainer}
            title="登出"
            titleStyle={styles.buttonTitle1}
            type="clear"
            onPress={() => this.props.navigation.navigate('Start')}
          />
        </View>
      </View>
    );
  }
}
//
// export default DeveloperPage;
const TestableDevelop = hook(DeveloperPage);

export default TestableDevelop;
