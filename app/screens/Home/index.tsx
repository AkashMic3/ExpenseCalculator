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
          left={props => <Avatar.Icon {...props} icon="account-group-outline"  />}
          right={props => (
            <IconButton {...props} icon="delete" size={20} onPress={()=> deleteConfirmation(item._id)} />
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
          data={groups}
          renderItem={renderExpenseItem}
          keyExtractor={item => item._id}
          ListFooterComponent={ShowPieChart}
        />
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate('CreateGroupScreen');
          }}
          style={styles.addButton}>
          <Text style={styles.addButtonLabel}>Add Group</Text>
        </TouchableOpacity>
      </View>

  );
};

export default ExpenseTrackerHome;

function ShowPieChart() {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <PieChart
        data={data}
        width={Dimensions.get('screen').width}
        height={300}
        chartConfig={{
          backgroundColor: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForLabels: {
            fill: '#fff', // Set the legend text color to black
          },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="45"
        absolute
        hasLegend={true}
      /> */}
    </View>
  );
}
