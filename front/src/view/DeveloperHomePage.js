import React from 'react';
import {Header, Tab, TabView} from 'react-native-elements';
import {styles, themeColor} from '../styles';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';

class DeveloperHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      index: 2,
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Header
          style={{
            flex: 1,
          }}
          backgroundColor={themeColor}
          centerComponent={{
            text: '开发者模式',
            style: {color: '#fff', fontSize: 30},
          }}
        />
        <View
          style={{
            flex: 1,
          }}>
          <TabView value={this.state.index}>
            <TabView.Item>
              <Text h1>1</Text>
            </TabView.Item>
            <TabView.Item>
              <Text h1>2</Text>
            </TabView.Item>
            <TabView.Item>
              <Text h1>3</Text>
            </TabView.Item>
          </TabView>
        </View>

        <Tab
          value={this.state.index}
          indicatorStyle={styles.tabIndicator}
          style={{
            flex: 1,
          }}>
          <Tab.Item
            icon={
              <Icon type={'feather'} name={'user'} size={20} color="white" />
            }
            buttonStyle={styles.tab}
            containerStyle={{margin: 0}}
            titleStyle={styles.buttonTitles}
            title={'个人信息'}
            type={'clear'}
            onPress={() => {
              console.log('sad');
              this.setState({index: 0});
            }}
          />
          <Tab.Item
            icon={
              <Icon
                type={'feather'}
                name="shopping-cart"
                size={20}
                color="white"
              />
            }
            buttonStyle={styles.tab}
            containerStyle={{margin: 0}}
            titleStyle={styles.buttonTitles}
            title={'API商城'}
            type={'clear'}
          />
          <Tab.Item
            icon={<Icon type={'feather'} name="key" size={20} color="white" />}
            buttonStyle={styles.tab}
            containerStyle={{margin: 0}}
            titleStyle={styles.buttonTitles}
            title={'我的API'}
            type={'clear'}
          />
        </Tab>
      </View>
    );
  }
}

export default DeveloperHomePage;
