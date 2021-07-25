import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, Bubble, Send} from 'react-native-gifted-chat';
import 'dayjs/locale/zh-cn';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {themeColor} from '../../styles';
import {SendService} from '../../service/UserService';

export default function ChatRoomScreen(props) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const {avatar} = props;
    setMessages([
      {
        _id: 1,
        text: '开始聊天吧！',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'mm',
          avatar: avatar,
        },
      },
    ]);
  }, []);
  const onSend = useCallback((msg = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, msg));
    console.log(msg[0].text);
    const {avatar} = props;
    SendService(msg[0].text, data => {
      console.log(data);
      let msg1 = {
        _id: 1,
        text: data.reply,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'mm',
          avatar: avatar,
        },
      };
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, msg1),
      );
    });
  }, []);

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        textStyle={{
          left: {},
          right: {
            color: 'white',
          },
        }}
        wrapperStyle={{
          left: {
            backgroundColor: '#fff',
          },
          right: {
            backgroundColor: themeColor,
          },
        }}
      />
    );
  };

  const renderSend = props => {
    return (
      <Send {...props} alwaysShowSend={true}>
        <View style={styles.sendBtn}>
          <Text style={{color: '#ffffff', fontSize: 17}}>Send</Text>
        </View>
      </Send>
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      showUserAvatar={true}
      locale={'zh-cn'}
      showAvatarForEveryMessage={true}
      renderBubble={renderBubble}
      placeholder={'开始聊天吧'}
      renderSend={renderSend}
      inverted={true}
      renderUsernameOnMessage={true}
      user={{
        _id: 50,
        name: '阳光',
        avatar: 'https://placeimg.com/140/140/any',
      }}
      alignTop={true}
    />
  );
}
const styles = StyleSheet.create({
  sendBtn: {
    width: 63,
    height: 32,
    borderRadius: 3,
    backgroundColor: themeColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginRight: 5,
  },
});
