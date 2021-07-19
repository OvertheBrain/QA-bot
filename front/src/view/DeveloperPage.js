import React from 'react';
import {Avatar, Divider, Header, ThemeProvider} from 'react-native-elements';
import {themeColor} from '../styles';
import {View} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';

class DeveloperPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            navigation: this.props.navigation,
        };

    }

    render() {
        return (
            <View>

                <Header
                    backgroundColor={themeColor}
                    leftComponent={<Icon
                        name="angle-left"
                        type="font-awesome"
                        size={40}
                        color={"white"}
                        onPress={() => {
                            this.state.navigation.navigate('Home');

                        }}
                    />}
                    centerComponent={{text: 'MyId', style: {color: '#fff',fontSize:30}}}
                />

                <Avatar rounded size={'large'} source={{uri: 'https://placeimg.com/140/140/any'}} />

            </View>

        );
    }
}

export default DeveloperPage;
