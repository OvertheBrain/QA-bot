import React from 'react';
import {Header, ThemeProvider} from 'react-native-elements';
import {ListItem, Avatar, ButtonGroup} from 'react-native-elements';
import {AsyncStorage, View} from 'react-native';
import {themeColor} from '../styles';
import {hook, wrap} from 'cavy';
import {Input} from 'react-native-elements/dist/input/Input';

export const BotList = [
  {
    name: 'Bot1',
    avatar_url: 'https://seikim.com/i/2021/07/19/nqplo9.png',
    subtitle: '交大相关咨询（生活学习，图书馆等）',
  },
  {
    name: 'Bot2',
    avatar_url: 'https://seikim.com/i/2021/07/19/nroe63.png',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Bot3',
    avatar_url: 'https://seikim.com/i/2021/07/19/nrq1o0.png',
    subtitle: 'Uncle',
  },
  {
    name: 'Bot4',
    avatar_url: 'https://seikim.com/i/2021/07/19/nrqmjj.png',
    subtitle: 'Vice Chairman',
  },
];

class UserListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 2,
      navigation: this.props.navigation,
      route: this.props.route,
      user: {},
    };
    this.updateIndex = this.updateIndex.bind(this);
  }
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

  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
  }
  render() {
    const {generateTestHook} = this.props;
    const WrappedList = wrap(ListItem);
    const buttons = ['Chat', 'Identity'];
    const {selectedIndex} = this.state;
    return (
      <ThemeProvider>
        <Header
          backgroundColor={themeColor}
          centerComponent={{text: 'Home', style: {color: '#fff', fontSize: 30}}}
          leftComponent={
            <Avatar
              rounded
              source={{
                uri: `data:${this.state.user.imagemime};base64,${this.state.user.imagedata}`,
              }}
              size="medium"
              onPress={() => {
                this.props.navigation.navigate('Developer', {
                  user: this.state.user,
                });
              }}
            />
          }
        />

        {BotList.map((l, i) => (
          <WrappedList
            ref={generateTestHook('userList' + String(i))}
            key={i}
            bottomDivider
            onPress={() => {
              this.state.navigation.navigate('Chat', {
                botId: i,
              });
            }}>
            <View>
              <Avatar
                rounded
                source={{
                  uri: l.avatar_url,
                }}
                size="large"
              />
              {/*<Badge*/}
              {/*  value="99+"*/}
              {/*  status="error"*/}
              {/*  containerStyle={{position: 'absolute', top: -4, right: -4}}*/}
              {/*/>*/}
            </View>
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </WrappedList>
        ))}
      </ThemeProvider>
    );
  }
}

// export default UserListPage;
const TestableUserList = hook(UserListPage);

export default TestableUserList;
