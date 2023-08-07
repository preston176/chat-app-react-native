import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ListItem, Avatar } from 'react-native-elements'
import { doc, collection, query, orderBy, onSnapshot, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';

const CustomListitem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([])
  // useEffect(() => {
  //   const q = query(messagesRef, orderBy("timestamp", "desc"));
  //   const unsubscribe = onSnapshot(q, snapshot => {
  //     setChatMessages(
  //       snapshot.docs.map(doc => ({
  //         id: doc.id,
  //         data: doc.data()
  //       }))
  //     );
  //   });

  //   return unsubscribe;
  // }, []);
  useEffect(() => {
    const chatRef = doc(db, 'chats', id);
    const messagesRef = collection(chatRef, 'messages');
    const unsubscribe = onSnapshot(query(messagesRef, orderBy('timestamp', 'desc')), (snapshot) => {
      setChatMessages(snapshot.docs.map((doc) => doc.data()));
    });

    return () => unsubscribe();
  }, []);


  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri: chatMessages?.[0]?.photoURL || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}  >
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1}
          ellipsizeMode="tail">
          {chatMessages?.[0]?.displayName}
          : {chatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default CustomListitem

const styles = StyleSheet.create({})