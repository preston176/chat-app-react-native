import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Image } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => { }


    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image source={{
                uri: "https://png.pngtree.com/template/20190927/ourmid/pngtree-initial-p-chat-logo-design-vector-illustration-image_310613.jpg",
            }}
                style={{ width: 200, height: 200 }}
            />
            <View style={styles.inputContainer}>
                <Input placeholder='Enter your email' autoFocus type="Email" value={email} onChangeText={text => setEmail(text)} />
                <Input placeholder='Enter your Password' secureTextEntry type="Password" onChangeText={pass => setPassword(pass)} value={password} />
            </View>
            <Button title="Login" onPress={signIn} containerStyle={styles.button} />
            <Button title="Register" type='outline' containerStyle={styles.button} />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        
    },
    inputContainer: {

    },
    button: {

    }
})