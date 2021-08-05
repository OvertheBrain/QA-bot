import {Card, Text, Divider} from 'react-native-elements';
import React from 'react';
import {View, StyleSheet, ScrollView, Platform} from 'react-native';
import {Row, Rows, Table} from 'react-native-table-component';
import {themeColor} from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 10, backgroundColor: '#fff'},
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  text: {
    margin: 10,
    textAlign: 'center',
  },
  table: {
    paddingTop: 10,
  },
  titleView: {
    height: Platform.OS === 'ios' ? 64 : 44,
    paddingTop: Platform.OS === 'ios' ? 14 : 0,
    marginBottom: 10,
    backgroundColor: '#4a65ff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleStyle: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

class OrderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderInfo: this.props.orderInfo,
    };
  }

  render() {
    const order = this.state.orderInfo;
    console.log(order);
    const OverView = {
      tableHead: ['订单编号', '开发者编号', 'API编号', 'API Key'],
      tableData: [[order.orderid, order.devid, order.apiid, 30]],
    };
    const Status = {
      tableHead: ['API', '截止日期', '请求地址', '已调用次数'],
      tableData: [['api1', order.end_date, 'kkk', order.count]],
    };
    return (
      <View style={styles.container}>
        <Divider style={styles.table}>
          <View style={styles.titleView}>
            <Text style={styles.titleStyle}>订单概览</Text>
          </View>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row
              data={OverView.tableHead}
              style={styles.head}
              textStyle={styles.text}
            />
            <Rows data={OverView.tableData} textStyle={styles.text} />
          </Table>
        </Divider>
        <Divider style={styles.table}>
          <View style={styles.titleView}>
            <Text style={styles.titleStyle}>订单状态</Text>
          </View>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row
              data={Status.tableHead}
              style={styles.head}
              textStyle={styles.text}
            />
            <Rows data={Status.tableData} textStyle={styles.text} />
          </Table>
        </Divider>
        <Divider style={styles.table}>
          <View style={styles.titleView}>
            <Text style={styles.titleStyle}>请求与返回示例</Text>
          </View>
          <Card />
        </Divider>
      </View>
    );
  }
}
export default OrderCard;
