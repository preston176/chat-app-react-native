import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Avatar, TouchableOpacity } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

const Chat = ({ navigation, route }) => {

//   useEffect(() => {
//     navigation.setOptions({
//       title: "Chat",
//       headerTitleAlign: "left",
//       headerTitle: () => (
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center"
//           }}
//         >
//           <Avatar rounded
//           //  source={{ uri: "...." }} 
//           />
//           <Text style={{
//             color: "white",
//             marginLeft: 10,
//             fontWeight: "700"
//           }}>{route.params.chatName}</Text>
//         </View>
//       ),
//       headerLeft: () => (
//         <TouchableOpacity style={{
//           marginLeft: 10
//         }}
//         onPress={navigation.goBack}
//         >
//           <AntDesign name='arrowleft'
//             size={24} color="white" />
//         </TouchableOpacity>
//       ),
//       headerRight: () => (
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             width: 80,
//             marginRight: 20,
//           }}
//         >
//           <TouchableOpacity>
//             <FontAwesome name='video-camera' size={24} color="white" />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Ionicons name='call' size={24} color="white" />
//           </TouchableOpacity>
//         </View>
//       )
//     });
//   }, [navigation, route.params.chatName]);

  return (
    <View>
      <Text>{route.params.chatName}</Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
