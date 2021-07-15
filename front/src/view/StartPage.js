import React from 'react';
import {Button,SocialIcon,ThemeProvider,Divider,Tile,Text} from 'react-native-elements';
import {StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


const
    styles=StyleSheet.create({
        container: {
            justifyContent:'flex-end',
            height:'100%'
        },
        button:{
            width:'50%'
        }

    })
class StartPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            navigation:this.props.navigation
        }
    }



    render() {
        return (

            <Divider style={styles.container}>
                <Text h1 h1Style={{textAlign:"center",marginBottom:200,color:"#1d3f63"}}>
                    QA Robot2
                </Text>


                <Button
                    buttonStyle={{height:60,borderRadius:20}}
                    containerStyle={{ marginHorizontal:30 ,marginVertical:10}}
                    title="Login"
                    type="outline"
                    onPress={()=>this.state.navigation.navigate('Home')}

                />

                <Button
                    buttonStyle={{height:60,borderRadius:20}}
                    containerStyle={{ marginHorizontal:30 ,marginVertical:10 }}
                    title="Register"
                    type="outline"
                />




            </Divider>
        )
    }
}
export default StartPage