import {
  Header,
  BottomSheet,
  Button,
  Text,
  ListItem,
} from 'react-native-elements';
import React from 'react';
import {View, StyleSheet, ScrollView, AsyncStorage, Alert} from 'react-native';
import {themeColor} from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getOrder} from '../service/DevService';
import OrderCard from '../component/apiCom/orderCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buy: {
    marginBottom: 0,
    height: 70,
    backgroundColor: themeColor,
  },
  buttonTitle: {
    fontSize: 40,
  },
});

class OrderDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      route: this.props.route,
      order: ' ',
    };
  }

  componentDidMount() {
    const {params} = this.state.route;

    getOrder(params.apiId, data => {
      this.setState({order: data});
      console.log(this.state.order);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={themeColor}
          leftComponent={
            <Icon
              name="angle-left"
              type="font-awesome"
              onPress={() => {
                this.state.navigation.navigate('Home');
              }}
              color={'#fff'}
              size={40}
            />
          }
          centerComponent={{
            text: '订单详情',
            style: {color: '#fff', fontSize: 30},
          }}
          rightComponent={
            <Icon
              name="info"
              type="AntDesign"
              //onPress={() => {
              //this.state.navigation.navigate('Start');
              //}}
              color={'#fff'}
              size={40}
            />
          }
        />

        <ScrollView>
          <OrderCard orderInfo={this.state.order} />
        </ScrollView>

        <Button
          title={'Cancel'}
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.buy}
          onPress={() => this.state.navigation.goBack()}
        />
      </View>
    );
  }
}

export default OrderDetailPage;
