import React from 'react';
import {Text, View} from 'react-native';
import {ListItem, Icon, Header, Avatar} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo
import {getApiStoreList} from '../../service/DevService';
import {wrap} from 'cavy';
import {themeColor, themeColor2, themeColor3, themeColor4} from '../../styles';
const testList = [
  {apiId: 0, name: 'api0', enddate: '2021-08-31', count: 110},
  {apiId: 1, name: 'api1', enddate: '2021-09-31', count: 10},
  {apiId: 2, name: 'api2', enddate: '已过期', count: 10},
];
export default class APIrepo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiList: testList,
      navigation: props.navigation,
    };
  }

  // componentDidMount() {
  //   let data = {username: 'A'};
  //   getApiStoreList(data, x => {
  //     this.setState({apiList: x});
  //   });
  // }

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
        />
        {this.state.apiList.map((l, i) => (
          <ListItem
            Component={TouchableScale}
            containerStyle={{
              marginTop: 20,
              marginHorizontal: 20,
              borderRadius: 10,
              backgroundColor:
                l.enddate === '已过期' ? themeColor4 : themeColor3,
            }}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95} //
            key={i}
            bottomDivider
            onPress={() => {
              this.state.navigation.navigate('OrderInfo', {
                apiId: l.apiId,
              });
            }}>
            <Icon
              raised
              name={l.enddate === '已过期' ? 'unlink' : 'link'}
              type="font-awesome"
              color={l.enddate === '已过期' ? themeColor4 : themeColor3}
            />

            <View>
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>
                  {l.enddate + (l.enddate === '已过期' ? ' ' : '到期')}
                </ListItem.Subtitle>
                <ListItem.Subtitle>
                  {'已调用' + l.count + '次'}
                </ListItem.Subtitle>
              </ListItem.Content>
            </View>
          </ListItem>
        ))}
      </View>
    );
  }
}
