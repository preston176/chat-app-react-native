import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'

const Chat = ({ navigation, route }) => {
    useLayoutEffect(() => {
        navigation.setOptions({

        })
    }, [navigation])

    return (
        <View>
            <Text>{route.params.chatName}</Text>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({})