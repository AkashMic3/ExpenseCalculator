import React, { useState } from 'react';
import { View, StyleSheet, Alert, Image } from 'react-native';
import { Text, Button, TextInput, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import * as loginRegisterActions from 'app/store/actions/loginRegisterActions';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { ScrollView } from 'react-native-gesture-handler';
import images from 'app/config/images';
import metrics from 'app/config/metrics';

const Register: React.FC = () => {
  const { colors,dark } = useTheme();
  const [userCredential, setUserCredential] = useState({
    email: '',
    password: '',
    phone: '',
    name: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const id = useSelector((state: ILoginState) => state.loginReducer.id);
  const dispatch = useDispatch();

  const onRegister = () => {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(userCredential.email));

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    setIsPhoneValid(phoneRegex.test(userCredential.phone));

    // Password validation
    setIsPasswordValid(userCredential.password.length >= 8);

    if (isEmailValid && isPhoneValid && isPasswordValid) {
      dispatch(loginRegisterActions.requestRegsiter(userCredential));
    } else {
      Alert.alert('Invalid Form', 'Please fix the errors in the form');
    }
  };

  const setCredential = (text, type) => {
    setUserCredential(prevState => ({
      ...prevState,
      [type]: text,
    }));

    if (type === 'email') {
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(emailRegex.test(text));
    } else if (type === 'phone') {
      // Phone validation
      const phoneRegex = /^[0-9]{10}$/;
      setIsPhoneValid(phoneRegex.test(text));
    } else if (type === 'password') {
      // Password validation
      setIsPasswordValid(text.length >= 8);
    }
  };

  const onLogin = () => NavigationService.navigate('Login');

  return (
    <>
     <View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image resizeMode='contain' source={images.icons.logo} style={styles.logoContainer} />
        </View>
      </View>
  

    <View
    
      style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="never"
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        style={{ flex: 1 }}>
        <View style={[styles.backgroundContainer, dark  && {backgroundColor: colors.backdrop} ]}>
          <TextInput
            style={[styles.inputContainer, !isEmailValid && styles.errorInput]}
            mode="outlined"
            placeholder="Name"
            onChangeText={name => setCredential(name, 'name')}
          />
          <TextInput
            style={[styles.inputContainer, !isEmailValid && styles.errorInput]}
            mode="outlined"
            placeholder="Email"
            onChangeText={email => setCredential(email, 'email')}
          />
          {!isEmailValid && (
            <Text style={styles.errorText}>Please enter a valid email</Text>
          )}
          <TextInput
            style={[styles.inputContainer, !isPhoneValid && styles.errorInput]}
            mode="outlined"
            placeholder="Phone"
            keyboardType="numeric"
            onChangeText={phone => setCredential(phone, 'phone')}
          />
          {!isPhoneValid && (
            <Text style={styles.errorText}>
              Please enter a valid phone number
            </Text>
          )}
          <TextInput
            style={[
              styles.inputContainer,
              !isPasswordValid && styles.errorInput,
            ]}
            mode="outlined"
            placeholder="Password"
            secureTextEntry={!showPassword}
            onChangeText={password => setCredential(password, 'password')}
          />
          {!isPasswordValid && (
            <Text style={styles.errorText}>
              Password must be at least 8 characters long
            </Text>
          )}
          <Button
            mode="contained"
            onPress={onRegister}
            style={styles.registerButton}
            labelStyle={styles.registerButtonText}>
            Register
          </Button>


          
          <Button
            mode="text"
            onPress={onLogin}
            labelStyle={styles.loginButtonText}>
            Already have an account? Sign in
          </Button>
        </View>
      </ScrollView>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  backgroundContainer: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    margin: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  registerButton: {
    marginVertical: 10,
    // backgroundColor: ,
    padding: 4,
    alignItems: 'center',
    borderRadius: 5,

  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loginButtonText: {

 
    fontSize: 10,
  },
  logoContainer:{
    width: metrics.screenWidth / 7,
    height: metrics.screenHeight * .12,
  }
});

export default Register;
