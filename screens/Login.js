import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Input, Image } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';


const Login = () => {
    return (
        <View>
            <StatusBar style="light" />
            <Image source={{
                uri: "https://png.pngtree.com/template/20190927/ourmid/pngtree-initial-p-chat-logo-design-vector-illustration-image_310613.jpg",
            }}
                style={{ width: 200, height: 200 }}
            />
            <View style={styles.inputContainer}>
                <Input placeholder='Enter your email' />
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    inputContainer: {

    }
})