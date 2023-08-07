import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { Avatar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { db, auth } from '../firebaseConfig';
import firebase from 'firebase/app';
import { addDoc, doc, collection, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";


const Chat = ({ navigation, route }) => {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackVisible: false,
      headerTitleAlign: "left",
      headerTitle: () => (
        <View style={{
          flexDirection: "row",
          alignItems: 'center',
        }}>
          <Avatar rounded source={{
            uri: messages[0]?.data.photoURL,
          }} />
          <Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }}>
            {route.params.chatName}
          </Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity style={{ marginLeft: 10 }}
          onPress={navigation.goBack}
        >
          <AntDesign name='arrowleft' size={24} color="white" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: 80,
          marginRight: 20,
        }}>
          <TouchableOpacity>
            <FontAwesome name='video-camera' size={24} color="white"></FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='call' size={24} color="white"></Ionicons>
          </TouchableOpacity>
        </View>
      )
    })
  }, [navigation, messages])
  const sendMessage = async () => {
    Keyboard.dismiss()
    try {
      const chatRef = doc(db, 'chats', route.params.id);
      const messagesRef = collection(chatRef, 'messages');

      await addDoc(messagesRef, {
        timestamp: serverTimestamp(),
        message: input,
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoURL: auth.currentUser.photoURL
      });
    } catch (error) {
      alert('Error sending message: ' + error);
    }
    setInput('')
  };

  useLayoutEffect(() => {
    const chatRef = doc(db, 'chats', route.params.id);
    const messagesRef = collection(chatRef, 'messages');
    const q = query(messagesRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }))
      );
    });

    return unsubscribe;
  }, [route.params.id]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}

        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView contentContainerStyle={{
              paddingTop: 15
            }}>
              {messages.map(({ id, data }) => (
                data.email === auth.currentUser.email ? (
                  <View key={id} style={styles.receiver}>
                    <Avatar
                      position="absolute"
                      rounded
                      containerStyle={{
                        position: "absolute",
                        bottom: -15,
                        left: -5,
                      }}
                      size={30}
                      source={{
                        uri: data.photoURL,
                      }}
                    />
                    <Text style={styles.receiverText}>{data.message}</Text>
                  </View>
                ) : (
                  <View key={id} style={styles.senderText}>
                    <Avatar
                      position="absolute"
                      containerStyle={{
                        position: "absolute",
                        bottom: -15,
                        left: -5,
                      }}
                    />
                    <Text style={styles.senderText}>{data.message}</Text>
                    <Text style={styles.senderText}>{data.displayName}</Text>
                  </View>
                )
              ))}
            </ScrollView>
            <View style={styles.footer}>
              <TextInput
                placeholder='Message'
                style={styles.textInput}
                value={input}
                onSubmitEditing={sendMessage}
                onChangeText={text => setInput(text)}
              />
              <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                <Ionicons name='send' size={24} color="#2B68E6" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  receiver: {
    padding: 15,
    backgroundColor: "#ECECEC",
    alignSelf: "flex-end",
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: "80%",
    position: "relative"
  },
  sender: {
    padding: 15,
    backgroundColor: "2B868E6",
    alignSelf: "flex-start",
    borderRadius: 20,
    margin: 15,
    maxWidth: "80%",
    position: "relative"
  },
  senderText: {
    color: "white",
    fontWeight: "500",
    marginLeft: 10,
    marginBottom: 15,
  },
  receiverText: {
    color: "black",
    fontWeight: "500",
    marginLeft: 10,
  },
  senderName: {
    left: 10,
    paddingRight: 10,
    fontSize: 10,
    color: "white",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: "transparent",
    backgroundColor: "#ECECEC",
    borderWidth: 1,
    padding: 10,
    color: "grey",
    borderRadius: 30,
  },
});
