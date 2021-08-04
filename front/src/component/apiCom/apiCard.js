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
    return (
      <View style={styles.container}>
        <Divider style={{marginBottom: 15}}>
          <Text h3={1}>API概览</Text>
          <Text>sdkhskdhfkshksdhkdshdskhsdkhdskhkdsf</Text>
        </Divider>
        <Divider style={{marginBottom: 15}}>
          <Text h3={1}>调用方法</Text>
          <Text>sdkhskdhfkshksdhkdshdskhsdkhdskhkdsf</Text>
        </Divider>
        <Divider style={{marginBottom: 15}}>
          <Text h3={1}>请求域名</Text>
          <Text>sdkhskdhfkshksdhkdshdskhsdkhdskhkdsf</Text>
        </Divider>
        <Divider style={{marginBottom: 15}}>
          <Text h3={1}>请求与返回示例</Text>
          <Card />
        </Divider>
        <Divider style={{marginBottom: 15}}>
          <Text h3={1}>参数表</Text>
          <Text>sadscsdsdsadsadsad</Text>
        </Divider>
        <Text h3={1}>价目表</Text>
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
