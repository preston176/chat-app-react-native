import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, Input, Image } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebaseConfig';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            navigation.replace("Home")
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log(user)
          } else {
            // User is signed out
            // ...
          }
        });
    }, []);


    const signIn = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user) {
                    navigate.replace("Home")
                }
            })
            .catch((error) => {
                const errorCode = console.log(error.code);
                const errorMessage = console.log(error.message)
            });
    }


    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
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
            <Button onPress={() => { navigation.navigate('Register') }} title="Register" type='outline' containerStyle={styles.button} />
            <View style={{ height: 150 }} />
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
})