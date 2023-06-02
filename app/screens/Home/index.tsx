import NavigationService from 'app/navigation/NavigationService';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { PieChart } from 'react-native-chart-kit';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups } from 'app/store/actions/groupActions';
import { LoginState } from 'app/models/api/login';
const data = [
  { name: 'Credit', population: 2800, color: '#F44336' },
  { name: 'Debit', population: 5250, color: '#2196F3' },
];

const renderExpenseItem = ({ item }) => {
  return (
    <LinearGradient
      colors={['red', '#3b5998', '#192f6a']}
      style={styles.expenseItem}>
      <TouchableOpacity
        onPress={() => {
          NavigationService.navigate('SplitExpenseScreen', { id: item._id });
        }}>
        <Text style={styles.expenseTitle}>{item?.group_name}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const ExpenseTrackerHome = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: LoginState) => state.loginReducer.id);
  const groups = useSelector((state: any) => state.groupReducer.groups);

  useEffect(() => {
    fetchUserGroups();
  }, [dispatch, userId]);

  const fetchUserGroups = () => {
    dispatch(fetchGroups(userId));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}>
        <Text style={styles.title}>Expense Tracker</Text>
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
      </LinearGradient>
    </SafeAreaView>
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
      <PieChart
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
      />
    </View>
  );
}
