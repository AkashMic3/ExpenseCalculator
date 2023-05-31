import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplitExpenseScreen = () => {
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');
  const [participants, setParticipants] = useState([]);
  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [memberName, setMemberName] = useState('');

  const data = [
    { id: 1, groupName: 'Group1', isPayed: true, amount: 399 },
    { id: 2, groupName: 'Group2', isPayed: false, amount: 200 },
  ];

  const handleParticipantSelection = participant => {
    const updatedSelectedParticipants = [...selectedParticipants];
    const index = updatedSelectedParticipants.findIndex(
      p => p.name === participant.name,
    );
    if (index !== -1) {
      updatedSelectedParticipants.splice(index, 1);
    } else {
      updatedSelectedParticipants.push(participant);
    }
    setSelectedParticipants(updatedSelectedParticipants);
  };

  function ShowExpenses({ item }) {
    return (
      <View style={styles.expenseContainer}>
        <Text style={styles.groupName}>{item.groupName}</Text>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={styles.paymentStatus}>
          {item.isPayed ? 'Paid' : 'Unpaid'}
        </Text>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={['#FAD961', '#F76B1C']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBackground}>
      <View style={styles.container}>
        <Text style={styles.title}>Group Expenses</Text>
        <FlatList data={data} renderItem={ShowExpenses} />

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Expense</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  expenseContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  amount: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
  },
  paymentStatus: {
    fontSize: 16,
    color: '#666666',
  },
  addButton: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F76B1C',
  },
});

export default SplitExpenseScreen;
