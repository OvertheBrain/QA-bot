import React from 'react';
import {Button, Header, ThemeProvider} from 'react-native-elements';
import { ListItem, Avatar } from 'react-native-elements'

const list = [
        {
            name: 'Bot1',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Bot2',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
    {
        name: 'Bot3',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Bot4',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },

    ]


class UserListView extends React.Component{
    render() {
        return (
            <ThemeProvider>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />

                    {
                        list.map((l, i) => (
                            <ListItem key={i} bottomDivider>
                                <Avatar source={{uri: l.avatar_url}} />
                                <ListItem.Content>
                                    <ListItem.Title>{l.name}</ListItem.Title>
                                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        ))
                    }



            </ThemeProvider>

        )
    }
}

export default UserListView;;
