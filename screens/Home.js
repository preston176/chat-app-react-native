import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomListitem from '../components/CustomListitem'
import { Avatar } from 'react-native-elements';
import { auth, getAuth, signOut } from 'firebase/auth';
import {AntDesign, SimpleLineIcons } from "@expo/vector-icons"

const Home = ({ navigation }) => {

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

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListitem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})