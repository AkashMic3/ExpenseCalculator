import { useFocusEffect, useRoute } from '@react-navigation/native';
import NavigationService, {
  navigationRef,
} from 'app/navigation/NavigationService';
import { fetchExpense } from 'app/store/actions/expenseActions';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

const SplitExpenseScreen = () => {
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');
  const [participants, setParticipants] = useState([]);
  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [memberName, setMemberName] = useState('');
  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      // Run your side effects here

      dispatch(fetchExpense(route?.params?.id, userId));
      // Return a cleanup function if needed
      return () => {
        // Cleanup logic here
      };
    }, []),
  );
  const userId = useSelector((state: any) => state.loginReducer.id);
  const expenseData =
    useSelector(state => state?.expenseReducer?.ExpenseList) ?? [];
  console.log(expenseData, 'expenseData');
  const data = [
    { id: 1, groupName: 'Group1', isPayed: true, amount: 399 },
    { id: 2, groupName: 'Group2', isPayed: false, amount: 200 },
  ];
  const route = useRoute();
  function ShowExpenses({ item }) {
    console.log(item, 'statsus');
    const status = item.members.filter(item => item.user_id === userId)[0];
    console.log(status, 'status', status?.payment_status);
    return (
      <View style={styles.expenseContainer}>
        <Text style={styles.groupName}>{item.expense_name}</Text>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={styles.paymentStatus}>
          {status?.payment_status ? 'Paid' : 'Unpaid'}
        </Text>
      </View>
    );
  }
  //6476d6663cccd26ce40b5311

  return (
    <LinearGradient
      colors={['#FAD961', '#F76B1C']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBackground}>
      <View style={styles.container}>
        <Text style={styles.title}>Group Expenses</Text>
        <FlatList data={expenseData} renderItem={ShowExpenses} inverted />

        <TouchableOpacity
          onPress={() => {
            console.log(route?.params, 'route?.params');
            NavigationService.navigate('addscreen', {
              groupId: route?.params?.id ?? '',
            });
          }}
          style={styles.addButton}>
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
