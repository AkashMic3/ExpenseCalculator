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
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonLabel}>Add Expense</Text>
      </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  expenseTitle: {
    fontSize: 16,
    color: '#fff',
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#1c92d2',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ExpenseTrackerHome;
