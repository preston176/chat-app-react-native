import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Text } from '@rneui/base';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig'; 

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const auth = getAuth(); // Move the auth state outside of the register function

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Do something with the user
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle error
      });
  };

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create TecTalk account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={text => setName(text)}
        />
        <Input
          placeholder="Email ..."
          type="email"
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <Input
          placeholder="Password"
          type="text"
          value={password}
          onChangeText={password => setPassword(password)}
        />
        <Input
          placeholder="profile Pic Url (optional)"
          type="text"
          value={imageUrl}
          onChangeText={img => setImageUrl(img)}
          onSubmitEditing={register}
        />
      </View>

      <Button
        style={styles.button}
        raised
        title="Create Account"
        onPress={register}
      />
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white"
  },
  inputContainer: {
    width: 300
  },
  button: {
    width: 200,
    marginTop: 10,
  }
});
