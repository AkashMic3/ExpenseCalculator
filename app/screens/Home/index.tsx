import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import * as HomeActions from 'app/store/actions/homeActions';
import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  // useEffect(() => {
  //   console.log('onFocus');
  //   dispatch(HomeActions.FetchEmployees());
  // });

  return (
    <View style={styles.container}>
      <ScrollView>
        <Button
          icon="logout"
          mode="outlined"
          onPress={onLogout}>
          Logout
        </Button>
      </ScrollView>
    </View>
  );
};

export default Home;
