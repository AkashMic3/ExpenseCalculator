import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import * as loginActions from 'app/store/actions/loginRegisterActions';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import SnackbarView from 'app/components/Snackbar';

const Login: React.FC = () => {
  const [usercredential, setUsercredential] = useState({
    email: '',
    password: '',
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const id = useSelector((state: ILoginState) => state.loginReducer.id);
  const dispatch = useDispatch();

  const onLogin = () => {
    const emailValid = validateEmail(usercredential.email);
    const passwordValid = validatePassword(usercredential.password);

    setIsEmailValid(emailValid);
    setIsPasswordValid(passwordValid);
    console.log('login');
    if (emailValid && passwordValid) {
      dispatch(
        loginActions.requestLogin(
          usercredential.email,
          usercredential.password,
        ),
      );
    }
  };

  const setCredential = (text, type) => {
    setUsercredential(prevState => ({
      ...prevState,
      [type]: text,
    }));

    // Perform validation on input change
    if (type === 'email') {
      setIsEmailValid(validateEmail(text));
    } else if (type === 'password') {
      setIsPasswordValid(validatePassword(text));
    }
  };

  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const onRegister = () => NavigationService.navigate('Register');

  const validateEmail = email => {
    // Simple email validation
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const validatePassword = password => {
    // Minimum password length validation
    return password.length >= 8;
  };

  return (
    <LinearGradient
      colors={['#fbc2eb', '#a6c1ee']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            placeholder="Email"
            keyboardType="email-address"
            value={usercredential.email}
            onChangeText={email => setCredential(email, 'email')}
            error={!isEmailValid}
            outlineColor="blue"
            activeOutlineColor="#90EE90"
          />
          {!isEmailValid && (
            <Text style={styles.errorText}>Invalid email format</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            placeholder="Password"
            secureTextEntry
            value={usercredential.password}
            onChangeText={password => setCredential(password, 'password')}
            error={!isPasswordValid}
            outlineColor="blue"
            activeOutlineColor="#90EE90"
          />
          {!isPasswordValid && (
            <Text style={styles.errorText}>
              Password must be at least 8 characters long
            </Text>
          )}
        </View>
        <TouchableOpacity
          style={[
            styles.loginButton,
            (!isEmailValid || !isPasswordValid) && styles.disabledButton,
          ]}
          onPress={onLogin}
          disabled={!isEmailValid || !isPasswordValid}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotButton} onPress={onForgot}>
          <Text style={styles.forgotButtonText}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={onRegister}>
          <Text style={styles.signupButtonText}>
            Don't have an account yet?
            <Text style={{ color: 'blue', fontWeight: 'bold' }}>
              {' '}
              Sign up now
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundContainer: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  inputContainer: {
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  loginButton: {
    marginVertical: 10,
    backgroundColor: '#f4511e',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  forgotButtonText: {
    color: '#f4511e',
    textDecorationLine: 'underline',
  },
  signupButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  signupButtonText: {
    color: '#000',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default Login;
