import React from 'react';
import {
  Avatar,
  Button,
  Divider,
  Header,
  Text,
  ThemeProvider,
} from 'react-native-elements';
import {styles, themeColor} from '../styles';
import {View} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';

class DeveloperPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
    };
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
                this.state.navigation.navigate('Home');
              }}
            />
          }
          centerComponent={{text: 'MyId', style: {color: '#fff', fontSize: 30}}}
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
            <Avatar
              rounded
              size={'large'}
              source={{uri: 'https://placeimg.com/140/140/any'}}
            />
          </View>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Icon name="edit" color="black" />
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
            <Text h3>User's Name</Text>
          </View>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Icon name="edit" color="black" />
          </View>
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
            title="使用功能查询"
            titleStyle={styles.buttonTitle1}
            type="clear"
          />
        </View>
      </View>
    );
  }
}

export default DeveloperPage;
