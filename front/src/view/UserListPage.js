import React from 'react';
import {Badge, Button, Header, ThemeProvider} from 'react-native-elements';
import {ListItem, Avatar, ButtonGroup} from 'react-native-elements';
import {buttonGroup} from '../component/buttonGroup';
import {View} from 'react-native';

const list = [
  {
    name: 'Bot1',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Bot2',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Bot3',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Bot4',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
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
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            iconStyle: {color: '#fff'},
            onPress: () => {
              this.state.navigation.navigate('Start');
            },
          }}
          centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
          rightComponent={{icon: 'home', color: '#fff'}}
        />

        {list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <View>
              <Avatar
                rounded
                source={{
                  uri: l.avatar_url,
                }}
                size="large"
              />
              <Badge
                value="99+"
                status="error"
                containerStyle={{position: 'absolute', top: -4, right: -4}}
              />
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
