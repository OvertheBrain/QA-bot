import React from 'react';
import {Header, SpeedDial} from 'react-native-elements';
import {StyleSheet, ScrollView, View} from 'react-native';
import ChatRoomScreen from '../component/ChatCom/ChatRoomScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    options: {
        marginBottom:50
    },
});

export class ChatPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: this.props.navigation,
            robotName: 'Miku',
            OptionsOpen: 0
        };
    }

    OpenDial=(isopen)=>{
        this.setState({OptionsOpen: isopen});
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={<Icon
                        name="arrow-circle-o-left"
                        type="Ionicons"
                        onPress={() => {
                        this.state.navigation.navigate('Home');
                        }}
                        color={'#fff'}
                        size={40}
                    />}
                    centerComponent={{ text: this.state.robotName, style: { color: '#fff',fontSize: 30 }  }}
                    rightComponent={<Icon
                        name="info"
                        type="AntDesign"
                        //onPress={() => {
                        //this.state.navigation.navigate('Start');
                        //}}
                        color={'#fff'}
                        size={40}
                    />}
                />

                <ChatRoomScreen/>
                <SpeedDial style={styles.options}
                           isOpen={this.state.OptionsOpen}
                           icon={{ name: 'add', color: '#fff' }}
                           openIcon={{ name: 'close', color: '#fff' }}
                           onOpen={() => this.OpenDial(1)}
                           onClose={() => this.OpenDial(0)}
                           color={'#1E56EA'}
                >
                    <SpeedDial.Action
                        icon={{ name: 'add', color: '#fff' }}
                        title="Add"
                        onPress={() => console.log('Add Something')}
                        color={'#1E56EA'}
                    />
                    <SpeedDial.Action
                        icon={{ name: 'delete', color: '#fff' }}
                        title="Delete"
                        onPress={() => console.log('Delete Something')}
                        color={'#1E56EA'}
                    />
                </SpeedDial>
            </View>
        );
    }
};

export default ChatPage;
