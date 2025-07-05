import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      Alert.alert('Login Success', `Welcome, ${username}!`);
    } else {
      Alert.alert('Error', 'Please enter username and password.');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Uy, ikaw na naman</ThemedText>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="gray"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.buttonContainer}>
        <Button title="Log In" onPress={handleLogin} />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 8,
    color: '#ccc', 
  },
  buttonContainer: {
    marginTop: 16,
  },
});
