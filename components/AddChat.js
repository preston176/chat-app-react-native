import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { Button, Input } from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome"
import { db } from "../firebaseConfig"
import { collection, addDoc, onSnapshot } from 'firebase/firestore';


const AddChat = ({ navigation }) => {
    const [input, setInput] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat",
            // headerBackTitle: "Chats",
        })

    }, [])


    const handleCreateChat = async () => {
        try {
          const chatsRef = collection(db, 'chats');
          await addDoc(chatsRef, {
            chatName: input,
          });
          setInput(''); // Clear the input field after adding a chat
        } catch (error) {
          alert(error.message);
        }
      };

    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter a chat name'
                value={input}
                onChangeText={text => setInput(text)}
                onSubmitEditing={handleCreateChat}
                leftIcon={
                    <Icon
                        name='wechat'
                        type="antdesign"
                        size={24}
                        color="black"

                    />}
            />
            <Button
            disabled={!input}
                onPress={handleCreateChat}
                title="Create new Chat"
            />

        </View>
    )
}

export default AddChat

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%"
    }
})