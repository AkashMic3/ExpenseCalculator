import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginRegisterActions from 'app/store/actions/loginRegisterActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';

interface IState {
  loginReducer: ILoginState;
}
interface Credential {
  name:string,
  email: string,
  phone:string
  password: string
}

const Register: React.FC = () => {
  const [userCredential, setUsercredential] = useState<Credential>({ email: '', password: '', phone:'', name:'' })

  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();

  const onRegister = ()  => {
       dispatch(loginRegisterActions.requestRegsiter(userCredential));
  }
  const setCredential = (text: String, type: String) => {
    if (type === 'email')
      setUsercredential({ ...userCredential, email: text as string })
      else if (type === 'phone') 
    setUsercredential({ ...userCredential, phone: text as string })
    else if (type === 'name') 
      setUsercredential({ ...userCredential, name: text as string })
    else
      setUsercredential({ ...userCredential, password: text as string })
  }


  const onLogin = () => NavigationService.navigate('Login');
  return (
    <View style={styles.container}>
      <View >
      <TextInput style={styles.inputContainer} mode="outlined" placeholder="Name" onChangeText={(name) => setCredential(name, 'name')} />
        <TextInput style={styles.inputContainer} mode="outlined" placeholder="Email" onChangeText={(email) => setCredential(email, 'email')} />
        <TextInput style={styles.inputContainer} mode="outlined" placeholder="Phone" keyboardType='numeric'  onChangeText={(password) => setCredential(password, 'phone')} />
        <TextInput style={styles.inputContainer} mode="outlined" placeholder="Password" secureTextEntry onChangeText={(password) => setCredential(password, 'password')} />
        <Button icon="login" mode="outlined" onPress={onRegister} style={styles.login}>
          Register
        </Button>
      
        <Button
          mode="text"
          labelStyle={styles.labelStyle}
          onPress={onLogin}>
         Already have an account, sign in
        </Button>
      </View>
    </View>
  );
};

export default Register;
