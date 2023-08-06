import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import CustomListitem from '../components/CustomListitem'
import { Avatar } from 'react-native-elements';
import { auth, getAuth, signOut } from 'firebase/auth';
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"
import { db } from '../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

const Home = ({ navigation }) => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'chats'), (snapshot) => {
            setChats(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            );
        });

        // Clean up the subscription when the component unmounts
        return () => unsubscribe();
    }, []);


    const signOutUser = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            navigation.replace("Login")
        }).catch((error) => {
            // An error happened.
        });
    }


    useLayoutEffect(() => {
        navigation.setOptions({
            title: "TecTalk",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{ marginLeft: 20, marginRight: 20 }}>
                    <TouchableOpacity onPress={signOutUser}>
                        <Avatar rounded source=
                            {{ uri: auth?.currentUser?.photoURL || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" }}
                        />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20,
                }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name='camerao' size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("AddChat")} activeOpacity={0.5}>
                        <SimpleLineIcons name='pencil' size={24} color="black" />

                    </TouchableOpacity>

                </View>
            )
        })
    }, [navigation])
    const enterChat = (id, chatName) => {
        navigation.navigate("Chat", {
            id, chatName,
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {chats.map(({ id, data: { chatName } }) => (
                    <CustomListitem key={id} id={id} chatName={chatName} 
                        enterChat={enterChat}
                    />
                ))}

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
})