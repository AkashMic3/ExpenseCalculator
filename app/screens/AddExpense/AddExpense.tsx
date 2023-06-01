import NavigationService from 'app/navigation/NavigationService';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';

const AddExpensePage = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleAddExpense = () => {
    if (!title.trim()) {
      setError('Expense title is required');
      return;
    }

    if (!amount.trim()) {
      setError('Expense amount is required');
      return;
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('Expense amount must be a valid positive number');
      return;
    }
    NavigationService.navigate('UserSelectionScreen', {
      groupId: '6476d6663cccd26ce40b5311',
      title,
      amount,
    });
    // Perform the necessary logic to add the expense
    // e.g., call an API, update a state, etc.

    setTitle('');
    setAmount('');
    setError('');
  };

  return (
    <LinearGradient
      colors={['#FAD961', '#F76B1C']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>
      <TextInput
        style={styles.input}
        placeholder="Expense Title"
        value={title}
        mode="outlined"
        onChangeText={setTitle}
        outlineColor="#FAD961"
        error={error}
      />
      <TextInput
        style={styles.input}
        placeholder="Expense Amount"
        value={amount}
        mode="outlined"
        onChangeText={setAmount}
        keyboardType="numeric"
        outlineColor="#FAD961"
        error={error}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.addButton} onPress={handleAddExpense}>
        <Text style={styles.addButtonLabel}>Next</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    //  borderColor: 'gray',
    //  borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#fff',
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  addButtonLabel: {
    color: '#3b5998',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddExpensePage;
