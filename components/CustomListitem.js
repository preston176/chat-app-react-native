import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ListItem, Avatar } from 'react-native-elements'
import { onSnapshot } from 'firebase/firestore';
import { query } from 'firebase/firestore';
import { orderBy } from 'firebase/firestore';

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


  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}  >
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1}
          ellipsizeMode="tail">
          This is the subtitle area
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default CustomListitem

const styles = StyleSheet.create({})