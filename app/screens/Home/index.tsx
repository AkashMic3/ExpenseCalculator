import NavigationService from 'app/navigation/NavigationService';
import React, { useState } from 'react';
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
const data = [
  { name: 'Credit', population: 2800, color: '#F44336' },
  { name: 'Debit', population: 5250, color: '#2196F3' },
];
const ExpenseTrackerHome = () => {
  const [expenses, setExpenses] = useState([
    { id: '1', title: 'Groceries', amount: 50.0 },
    { id: '2', title: 'Transportation', amount: 20.0 },
    { id: '3', title: 'Eating Out', amount: 30.0 },
    { id: '3', title: 'Eating Out', amount: 30.0 },
    { id: '3', title: 'Eating Out', amount: 30.0 },
    { id: '3', title: 'Eating Out', amount: 30.0 },
    { id: '3', title: 'Eating Out', amount: 30.0 },
    { id: '3', title: 'Eating Out', amount: 30.0 },
    { id: '3', title: 'Eating Out', amount: 30.0 },
    // Add more expense items here
  ]);

  const renderExpenseItem = ({ item }) => (
    <LinearGradient
      colors={['red', '#3b5998', '#192f6a']}
      style={styles.expenseItem}>
      <Text style={styles.expenseTitle}>{item.title}</Text>
      {/* <Text style={styles.expenseAmount}>${item.amount.toFixed(2)}</Text> */}
    </LinearGradient>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}>
        <Text style={styles.title}>Expense Tracker</Text>
        <FlatList
          data={expenses}
          renderItem={renderExpenseItem}
          keyExtractor={item => item.id}
          ListFooterComponent={ShowPieChart}
        />

        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate('addscreen');
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
