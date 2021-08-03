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
            title="Free"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
          />
          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
          />
          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
          />
          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
          />
        </Divider>
      </View>
    );
  }
}
export default ApiCard;
