import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { Avatar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

const Chat = ({ navigation, route }) => {

  const [input, setInput] = useState('')
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
          <Avatar rounded source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" }} />
          <Text style={{color: "white", marginLeft:10, fontWeight: "700"}}>
            {route.params.chatName}
          </Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity style={{marginLeft: 10}}
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
  }, [])

  const sendMessage = () => {
    Keyboard.dismiss()
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}

        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView>
              {/* chat */}
            </ScrollView>
            <View style={styles.footer}>
              <TextInput
                placeholder='Message'
                style={styles.textInput}
                value={input}
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
