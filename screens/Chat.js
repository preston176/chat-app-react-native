import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Avatar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

const Chat = ({ navigation, route }) => {

  const [input, setInput] = useState('')

  const sendMessage = () => {

  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        padding
        style={styles.container}
        keyboardVerticalOffset={90}
      >
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
            <Ionicons name='send' size={24} color="#2B68E6"/>
</TouchableOpacity>
          </View>
        </>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {

  },
  footer: {},
  textInput: {},
});
