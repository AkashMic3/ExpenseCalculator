import NavigationService from 'app/navigation/NavigationService';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const ExpenseTrackerHome = () => {
  const [expenses, setExpenses] = useState([
    { id: '1', title: 'Groceries', amount: 50.0 },
    { id: '2', title: 'Transportation', amount: 20.0 },
    { id: '3', title: 'Eating Out', amount: 30.0 },
    // Add more expense items here
  ]);

  const renderExpenseItem = ({ item }) => (
    <View style={styles.expenseItem}>
      <Text style={styles.expenseTitle}>{item.title}</Text>
      <Text style={styles.expenseAmount}>${item.amount.toFixed(2)}</Text>
    </View>
  );

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Expense Tracker</Text>
        <FlatList
          data={expenses}
          renderItem={renderExpenseItem}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate('addscreen');
          }}
          style={styles.addButton}>
          <Text style={styles.addButtonLabel}>Add Expense</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ExpenseTrackerHome;
