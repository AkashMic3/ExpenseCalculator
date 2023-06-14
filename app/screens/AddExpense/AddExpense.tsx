import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import NavigationService from 'app/navigation/NavigationService';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { IconButton, TextInput, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const AddExpensePage = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const route = useRoute();
  const handleAddExpense = () => {
    // Validation logic and navigation code here
    // ...
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
    console.log(route.params);
    NavigationService.navigate('UserSelectionScreen', {
      groupId: route.params.groupId,
      title,
      amount,
    });

    setTitle('');
    setAmount('');
    setError('');
  };

  const handleBack = () => {
    navigation.goBack();
  };
  const colors = useTheme();
  return (
    <LinearGradient
      colors={['#2196F3',"#ffffff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      <View style={styles.backButton}>
        <IconButton
          icon="keyboard-backspace"
          size={30}
          style={{ position: 'absolute', zIndex: 1 }}
          onPress={() => {
            handleBack();
            //   deleteExpense(item);
          }}
          color={'#fff'}
        />
        <Text style={styles.title}>Add Expense</Text>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Expense Title"
          mode="outlined"
          onChangeText={setTitle}
          outlineColor="#fff"
          value={title}
          error={error}
        />
        <TextInput
          style={styles.input}
          placeholder="Expense Amount"
          value={amount}
          mode="outlined"
          onChangeText={setAmount}
          keyboardType="numeric"
          outlineColor="#fff"
          error={error}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity style={styles.addButton} onPress={handleAddExpense}>
          <Text style={styles.addButtonLabel}>Next</Text>
          <IconButton
            icon="page-next"
            size={16}
            //  style={{ position: 'absolute', zIndex: 1 }}
            disabled
            onPress={() => {
              handleAddExpense();
              // handleBack();
              //   deleteExpense(item);
            }}
            //color={'#fff'}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backButton: {
    //position: 'absolute',
    top: 10,
    left: 5,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  content: {
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    //marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
  },
  error: {
    color: '#FF0000',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    // paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonLabel: {
    //color: '#2196F3',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddExpensePage;
