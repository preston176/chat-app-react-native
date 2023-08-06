import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Avatar } from "react-native-elements"

const Chat = ({ navigation, route }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
            headerTitleAlign: "left",
            headerTitle: () => (
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    <Avatar rounded source={{
                        uri: "...."
                    }} />
                    <Text>{route.params.chatName}</Text>
                </View>
            )
        });
    }, [navigation])

    return (
        <View>
            <Text>{route.params.chatName}</Text>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({})