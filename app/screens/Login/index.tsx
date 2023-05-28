import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginRegisterActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';

interface IState {
  loginReducer: ILoginState;
}
interface Credential {
  email: String,
  password: String
}

const Login: React.FC = () => {
  const [usercredential, setUsercredential] = useState<Credential>({ email: '', password: '' })

  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => {
    dispatch(loginActions.requestLogin(usercredential.email as string, usercredential.password as string));
  }
  const setCredential = (text: String, type: String) => {
    if (type === 'email')
      setUsercredential({ ...usercredential, email: text })
    else
      setUsercredential({ ...usercredential, password: text })
  }

  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const onRegister = () => NavigationService.navigate('Register');
  return (
    <View style={styles.container}>
      <View >
        <TextInput style={styles.inputContainer} mode="outlined" placeholder="Email" onChangeText={(email) => setCredential(email, 'email')} />
        <TextInput style={styles.inputContainer} mode="outlined" placeholder="Password" secureTextEntry onChangeText={(password) => setCredential(password, 'password')} />
        <Button icon="login" mode="outlined" onPress={onLogin} style={styles.login}>
          Login
        </Button>
        <Button
          mode="text"
          style={styles.forgot}
          labelStyle={styles.labelStyle}
          onPress={onForgot}>
          Forgot Password
        </Button>
        <Button
          mode="text"
          labelStyle={styles.labelStyle}
          onPress={onRegister}>
          Don't have an account yet? Sign up now
        </Button>
      </View>
    </View>
  );
};

export default Login;
