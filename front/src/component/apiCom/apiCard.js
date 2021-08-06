import {Card, Text, Divider, PricingCard} from 'react-native-elements';
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {themeColor} from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  price: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

class ApiCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buying: false,
    };
  }

  change = () => {
    this.setState({buying: true});
    this.props.callback(this.state.buying);
  };

  render() {
    const apiinfo = this.props.API;

    return (
      <View style={styles.container}>
        <Divider style={{marginBottom: 15}}>
          <Text h4={1}>API概览</Text>
          <Text style={{marginBottom: 15, marginTop: 10}}>{apiinfo.description}</Text>
        </Divider>
        <Divider style={{marginBottom: 15}}>
          <Text h4={1}>调用方法</Text>
          <Text style={{marginBottom: 15, marginTop: 10}}>
            首先在api对应详情页购买指定日期的api接入套餐，购买成功后可在”我的API“中查看订单，使用对应的地址在POST参数中加入自己的账号密码，服务器鉴权通过后即可返回请求
          </Text>
        </Divider>
        <Divider style={{marginBottom: 15}}>
          <Text h4={1}>请求域名</Text>
          <Text style={{marginBottom: 15, marginTop: 10}}>sdkhskdhfkshksdhkdshdskhsdkhdskhkdsf</Text>
        </Divider>
        <Divider style={{marginBottom: 15}}>
          <Text h4={1}>请求与返回示例</Text>
          <Card style={{marginBottom: 15, marginTop: 10}}/>
        </Divider>
        <Divider style={{marginBottom: 15}}>
          <Text h4={1}>参数表</Text>
          <Text style={{marginBottom: 15, marginTop: 10}}>sadscsdsdsadsadsad</Text>
        </Divider>
        <Text h4={1}>价目表</Text>
        <Divider style={styles.price}>
          <PricingCard
            color="#4f9deb"
            title="7天"
            price="￥7"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{
              title: 'GET STARTED',
              icon: 'flight-takeoff',
              onPress: () => {
                this.change();
              },
            }}
          />
          <PricingCard
            color="#4f9deb"
            title="30天"
            price="￥25"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{
              title: 'GET STARTED',
              icon: 'flight-takeoff',
              onPress: () => {
                this.change();
              },
            }}
          />
          <PricingCard
            color="#4f9deb"
            title="90天"
            price="￥80"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{
              title: 'GET STARTED',
              icon: 'flight-takeoff',
              onPress: () => {
                this.change();
              },
            }}
          />
          <PricingCard
            color="#4f9deb"
            title="180天"
            price="￥150"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{
              title: 'GET STARTED',
              icon: 'flight-takeoff',
              onPress: () => {
                this.change();
              },
            }}
          />
        </Divider>
      </View>
    );
  }
}
export default ApiCard;
