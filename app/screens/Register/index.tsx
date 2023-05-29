import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
// import realm from 'app/config/realm-config';

interface IState {
  loginReducer: ILoginState;
}
interface Credential {
  email: any,
  phone:any
  password: any
}

const Register: React.FC = () => {
  const [userCredential, setUsercredential] = useState<Credential>({ email: '', password: '', phone:'' })

  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();

  const onRegister = async()  => {
    // let response:any =  await realm.emailPasswordAuth.registerUser({email:userCredential.email, password: userCredential.password})
    // console.log('register response', response)
  }
  const setCredential = (text: String, type: String) => {
    if (type === 'email')
      setUsercredential({ ...userCredential, email: text })
    else if (type === 'phone') 
    setUsercredential({ ...userCredential, phone: text })
    else
      setUsercredential({ ...userCredential, password: text })
  }


  const onLogin = () => NavigationService.navigate('Login');
  return (
    <View style={styles.container}>
      <View >
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
