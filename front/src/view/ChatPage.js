import React from 'react';
import {Header, SpeedDial} from 'react-native-elements';
import {
  StyleSheet,
  ScrollView,
  View,
  PanResponder,
  Animated,
  AsyncStorage,
} from 'react-native';
import ChatRoomScreen from '../component/ChatCom/ChatRoomScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {themeColor} from '../styles';
import {BotList} from './UserListPage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  options: {
    marginBottom: 50,
  },
});

export class ChatPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navigation: this.props.navigation,
      OptionsOpen: 0,
      user: {},
    };
  }

  tokens = {};
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

  OpenDial = isopen => {
    this.setState({OptionsOpen: isopen});
  };

  render() {
    const {params} = this.props.route;
    console.log(this.state.user);
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={themeColor}
          leftComponent={
            <Icon
              name="angle-left"
              type="font-awesome"
              onPress={() => {
                this.state.navigation.goBack();
              }}
              color={'#fff'}
              size={40}
            />
          }
          centerComponent={{
            text: BotList[params.botId].name,
            style: {color: '#fff', fontSize: 30},
          }}
          rightComponent={
            <Icon
              name="info"
              type="AntDesign"
              //onPress={() => {
              //this.state.navigation.navigate('Start');
              //}}
              color={'#fff'}
              size={40}
            />
          }
        />

        <ChatRoomScreen
          avatar={BotList[params.botId].avatar_url}
          BotName={BotList[params.botId].name}
          localuser={this.state.user}
        />
      </View>
    );
  }
}

export default ChatPage;
