import React from 'react';
import {AsyncStorage, Text, View} from 'react-native';
import {ListItem, Icon, Header, Avatar} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo
import {getApiOrderList, getApiStoreList} from '../../service/DevService';
import {wrap} from 'cavy';
import {ScrollView} from 'react-native';
import {themeColor, themeColor2, themeColor3, themeColor4} from '../../styles';

const testList = [
  {apiId: 0, name: 'api0', enddate: '2021-08-31', count: 110},
  {apiId: 1, name: 'api1', enddate: '2021-09-31', count: 10},
  {apiId: 2, name: 'api2', enddate: '已过期', count: 10},
];
export default class rAPIrepo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiList: [],
      navigation: props.navigation,
      user: {},
    };
  }

  // componentDidMount() {
  //   let data = {username: 'A'};
  //   getApiStoreList(data, x => {
  //     this.setState({apiList: x});
  //   });
  // }
  async componentDidMount() {
    try {
      const shop = await AsyncStorage.getItem('user');
      this.setState({user: shop});
      console.log(this.state.user);
    } catch (error) {
      console.log(error);
    }
    const devid = JSON.parse(this.state.user).devid;
    console.log(devid);
    getApiOrderList(devid, data => {
      this.setState({apiList: data});
      console.log(this.state.apiList);
    });
  }

  async update() {
    try {
      const shop = await AsyncStorage.getItem('user');
      this.setState({user: shop});
      console.log(this.state.user);
    } catch (error) {
      console.log(error);
    }
    const devid = JSON.parse(this.state.user).devid;
    console.log(devid);
    getApiOrderList(devid, data => {
      this.setState({apiList: data});
      console.log(this.state.apiList);
    });
  }

  render() {
    return (
      <View>
        <Header
          style={{
            flex: 1,
          }}
          backgroundColor={themeColor}
          centerComponent={{
            text: '开发者-我的API',
            style: {color: '#fff', fontSize: 30},
          }}
          rightComponent={
            <Icon
              name={'refresh'}
              color={'white'}
              size={30}
              onPress={() => this.update()}
            />
          }
        />
        <ScrollView>
          {this.state.apiList.map((l, i) => (
            <ListItem
              Component={TouchableScale}
              containerStyle={{
                marginTop: 20,
                marginHorizontal: 20,
                borderRadius: 10,
                backgroundColor: l.delay === true ? themeColor4 : themeColor3,
              }}
              friction={90} //
              tension={100} // These props are passed to the parent component (here TouchableScale)
              activeScale={0.95} //
              key={i}
              bottomDivider
              onPress={() => {
                console.log(l);
                this.state.navigation.navigate('OrderInfo', {
                  order: l,
                });
              }}>
              <Icon
                raised
                name={l.delay === true ? 'unlink' : 'link'}
                type="font-awesome"
                color={l.delay === true ? themeColor4 : themeColor3}
              />

              <View>
                <ListItem.Content>
                  <ListItem.Title>{l.apiname}</ListItem.Title>
                  <ListItem.Subtitle>
                    {l.end_date + (l.delay === true ? ' ' : '到期')}
                  </ListItem.Subtitle>
                  <ListItem.Subtitle>
                    {'已调用' + l.count + '次'}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </View>
            </ListItem>
          ))}
        </ScrollView>
      </View>
    );
  }
}
