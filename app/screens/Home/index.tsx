import NavigationService from 'app/navigation/NavigationService';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { PieChart } from 'react-native-chart-kit';
import { useDispatch, useSelector } from 'react-redux';
import { deleteGroup, fetchGroups } from 'app/store/actions/groupActions';
import { LoginState } from 'app/models/api/login';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ExpenseTrackerHome = (props) => {
  const { colors } = useTheme();

  const dispatch = useDispatch();
  const userId = useSelector((state: LoginState) => state.loginReducer.id);
  const groups = useSelector((state: any) => state.groupReducer.groups);

  useEffect(() => {
    fetchUserGroups();
  }, [dispatch, userId]);

  const fetchUserGroups = () => {
    dispatch(fetchGroups(userId));
  };


  const deleteConfirmation = (group_id:string) => {
    Alert.alert(
        'Message',
        'Are you sure?',
        [
            { text: 'NO', onPress: () => null, style: 'cancel' },
            { text: 'YES', onPress: () => dispatch(deleteGroup(group_id, userId)) },
        ]
    );
}

  const renderExpenseItem = ({ item }) =>
  {
    return (
      <TouchableOpacity
        onPress={() => {
          NavigationService.navigate('SplitExpenseScreen', { id: item._id });
        }}>
        <Card.Title
          title={item?.group_name}
          subtitle={
            item.members.length +
            ' member' +
            ' - ' +
            moment(item?.created_at).format('DD/MM/YYYY')
          }
          left={props => <Avatar.Icon {...props} icon="account-group-outline" color='white' />}
          right={props => (
            <IconButton {...props} icon="delete" size={20} onPress={()=> deleteConfirmation(item._id)} color={colors.disabled} />
          )}
        />
      </TouchableOpacity>
    );
  };

  return (

      <View
        style={styles.container}>
        <Text style={[styles.title, {color:colors.text}]}>Expense Tracker</Text>
        <FlatList
          contentContainerStyle={[{flexGrow:1 }, !!groups.length == 0 && {justifyContent:'center' } ]}
          data={groups}
          renderItem={renderExpenseItem}
          keyExtractor={item => item._id}
          ListEmptyComponent={
            <View style={styles.groupEmptyContainer}>
              <Text style={[styles.groupEmptyText, {color:colors.text}]}>No groups available ? </Text>
              <Text style={{color:colors.text}}>create a new one</Text>
            </View>
          }
        />
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate('CreateGroupScreen');
          }}
          style={styles.addButton}>
             <MaterialCommunityIcons name='plus' size={25} color={'white'}   />
        </TouchableOpacity>
      </View>

  );
};

export default ExpenseTrackerHome;


