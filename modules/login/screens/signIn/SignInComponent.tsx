import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { styles } from "./signInStyles";

interface SignInComponentProps {
  userName: string;
  setUserName: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  handleLogin: () => void;
  errorService: Error | null | undefined;
  isLoading: boolean;
}

export default function SignInComponent({
  userName,
  setUserName,
  setPassword,
  password,
  handleLogin,
  errorService,
  isLoading,
}: SignInComponentProps) {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.title}>Iniciar Sesión</Text>

        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={userName}
          onChangeText={setUserName}
          keyboardType="default"
          autoCapitalize="none"
          editable={!isLoading}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          editable={!isLoading}
        />

        <View style={styles.errorContainer}>
          {errorService && (
            <Text style={styles.errorText}>{errorService.message}</Text>
          )}
        </View>
        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          )}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}