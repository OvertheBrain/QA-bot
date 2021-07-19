import React from 'react';
import {Badge, Button, Header, ThemeProvider} from 'react-native-elements';
import {ListItem, Avatar, ButtonGroup} from 'react-native-elements';
import {buttonGroup} from '../component/buttonGroup';
import {View} from 'react-native';
import {themeColor} from '../styles';

export const BotList = [
  {
    name: 'Bot1',
    avatar_url:
      'https://seikim.com/i/2021/07/19/nqplo9.png',
    subtitle: 'Vice President',
  },
  {
    name: 'Bot2',
    avatar_url:
      'https://seikim.com/i/2021/07/19/nroe63.png',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Bot3',
    avatar_url:
      'https://seikim.com/i/2021/07/19/nrq1o0.png',
    subtitle: 'Vice President',
  },
  {
    name: 'Bot4',
    avatar_url:
      'https://seikim.com/i/2021/07/19/nrqmjj.png',
    subtitle: 'Vice Chairman',
  },
];

class UserListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 2,
      navigation: this.props.navigation,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
  }
  render() {
    const buttons = ['Chat', 'Identity'];
    const {selectedIndex} = this.state;
    return (
      <ThemeProvider>
        <Header
            backgroundColor={themeColor}
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            iconStyle: {color: '#fff'},
            onPress: () => {
              this.state.navigation.navigate('Start');
            },
            size:40
          }}
          centerComponent={{text: 'Home', style: {color: '#fff',fontSize:30}}}
          rightComponent={{icon: 'home', color: '#fff',size:40}}
        />

        {BotList.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={() =>
          {
            this.state.navigation.push('Chat',{
              botId:i,
            })
          }

          }>
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
          </ListItem>
        ))}
      </ThemeProvider>
    );
  }
}

export default UserListPage;
