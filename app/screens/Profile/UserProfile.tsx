import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as loginActions from 'app/store/actions/loginRegisterActions';
import { useDispatch, useSelector } from 'react-redux';
import { ILoginResponse } from 'app/models/api/login';

interface LoginState {
  loginReducer:ILoginResponse
}

const UserProfile = () => {

  const loggedUser = useSelector(((state:LoginState) => state.loginReducer));
  // Sample user data
  const user = {
    name:  loggedUser?.name,
    email:loggedUser?.email,
    profileImage:
      'data:image/png;base64,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',
  };

  const dispatch = useDispatch();
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
    dispatch(loginActions.logOut());
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1c92d2', '#f2fcfe']}
        // start={[0, 0]}
        // end={[1, 1]}
        style={styles.background}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: user.profileImage }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  email: {
    fontSize: 18,
    color: '#fff',
  },
  logoutButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1c92d2',
  },
});

export default UserProfile;
