import {Header, BottomSheet, Button, ListItem} from 'react-native-elements';
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  AsyncStorage,
  Alert,
} from 'react-native';
import {themeColor} from '../styles';
import ApiCard from '../component/apiCom/apiCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import {addOrder} from '../service/DevService';

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
      user: {},
    };
  }

  async componentDidMount() {
    try {
      const shop = await AsyncStorage.getItem('user');
      this.setState({user: shop});
      console.log(this.state.user);
    } catch (error) {
      console.log(error);
    }
  }

  BuyCallback = buying => {
    this.setState({BuyVisibility: buying});
  };

  BuyList = [
    {
      title: '7天',
      onPress: () => {
        this.buyAPI(7);
      },
    },
    {
      title: '30天',
      onPress: () => {
        this.buyAPI(30);
      },
    },
    {
      title: '90天',
      onPress: () => {
        this.buyAPI(90);
      },
    },
    {
      title: '180天',
      onPress: () => {
        this.buyAPI(180);
      },
    },

    {
      title: 'Cancel',
      containerStyle: {backgroundColor: themeColor},
      titleStyle: {color: 'white'},
      onPress: () => {
        this.setState({BuyVisibility: false});
      },
    },
  ];

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
          <ApiCard callback={this.BuyCallback} />
        </ScrollView>

        <Button
          title={'购买API'}
          titleStyle={styles.buttonTitle}
          onPress={() => {
            this.setState({BuyVisibility: true});
          }}
          buttonStyle={styles.buy}
        />
      </View>
    );
  }
}

export default OrderDetailPage;
