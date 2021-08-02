import {
  Header,
  BottomSheet,
  Button,
  ListItem,
  Overlay,
} from 'react-native-elements';
import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {themeColor} from '../styles';
import ApiCard from '../component/apiCom/apiCard';
import Icon from 'react-native-vector-icons/FontAwesome';

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

class BuyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      BuyVisibility: false,
      PurchaseAlert: true,
    };
  }

  buyAPI = () => {};

  BuyList = [
    {title: '7天'},
    {title: '30天'},
    {title: '90天'},
    {
      title: 'Cancel',
      containerStyle: {backgroundColor: 'red'},
      titleStyle: {color: 'white'},
      onPress: () => {
        this.setState({BuyVisibility: false});
        console.log('你好');
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
            text: 'API详情',
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
          <ApiCard></ApiCard>
        </ScrollView>

        <Button
          title={'购买API'}
          titleStyle={styles.buttonTitle}
          onPress={() => {
            this.setState({BuyVisibility: true});
          }}
          buttonStyle={styles.buy}
        />

        <BottomSheet
          isVisible={this.state.BuyVisibility}
          containerStyle={{backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)'}}>
          {this.BuyList.map((l, i) => (
            <ListItem
              key={i}
              containerStyle={l.containerStyle}
              onPress={l.onPress}>
              <ListItem.Content>
                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </BottomSheet>
        <Overlay isVisible={this.state.PurchaseAlert}>
          <Text>恭喜你，完成订阅</Text>
          <Button
            title={'确认'}
            onPress={() => {
              this.setState({PurchaseAlert: false});
            }}
          />
        </Overlay>
      </View>
    );
  }
}

export default BuyPage;
