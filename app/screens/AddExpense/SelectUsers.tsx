/* eslint-disable react-hooks/exhaustive-deps */
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { fetchGroupMembers } from 'app/store/actions/groupActions';
import { AddExpenseForGroup } from 'app/store/actions/expenseActions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';
import { toFixedDecimal } from 'app/utils/numberUtils';

const UserSelectionScreen = ({ navigation }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [prices, setPrices] = useState({});
  const [edited, setEdited] = useState([]);
  const [Average, setAverageAmount] = useState(0);

  const handleUserSelection = user => {
    const isSelected = selectedUsers.find(e => e.user_id == user.user_id);
    if (isSelected) {
      setSelectedUsers(selectedUsers.filter(e => e.user_id !== user.user_id));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }

    console.log('handleUserSelection:', isSelected, selectedUsers);
  };

  const handlePriceChange = (userId, price) => {
    console.log(price, 'price', route?.params?.amount);
    if (Number(price) <= Number(route?.params?.amount)) {
      if (Number(price) !== Number(prices[userId])) {
        setPrices({ ...prices, [userId]: price });
        //  setEdited([...edited,{id:}])
      }
    }
    if (Number(price) === 0) {
      setPrices({ ...prices, [userId]: String(Number(price)) });
    }
  };

  const route = useRoute();
  const users = useSelector(state => state.groupReducer.members) ?? [];
  const userId = useSelector(state => state.loginReducer.id) ?? '';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroupMembers(route?.params?.groupId ?? ''));
  }, []);

  useEffect(() => {
    const totalAmount = route?.params?.amount || 0;
    const averageAmount = totalAmount / selectedUsers.length;

    const avgNew = selectedUsers.reduce((result, item) => {
      result[item.user_id] = averageAmount;
      return result;
    }, {});
    setPrices(avgNew);
    console.log('average amount:', avgNew);
  }, [users, selectedUsers]);

  useEffect(() => {
    console.log(prices, 'pricess');
    if (prices) {
      const totalAmount = route?.params?.amount || 0;
      const averageAmount = totalAmount / users.length;
      console.log(prices, 'pricess');

      let remainingcost = route?.params?.amount;
      let i = 0;
      for (const ele in prices) {
        console.log(ele, 'ele', Number(prices[ele]));
        if (
          Number(prices[ele]) < Number(averageAmount) ||
          Number(prices[ele]) > Number(averageAmount)
        ) {
          remainingcost -= Number(prices[ele]);
          i += 1;
        }
      }
      console.log(remainingcost, 'cvvv', i);
      const newPrice = prices;

      console.log(newPrice, 'newPrice');
      // setPrices(newPrice);
    }
  }, [prices]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAddExpense = () => {
    if (selectedUsers.length === 0) {
      Alert.alert('Please select at least one user.');
      return;
    }

    const members = selectedUsers.map(item => {
      const user = users.find(ele => ele.user_id === item.user_id);
      return {
        ...user,
        payment_status: item.user_id === userId,
        amount: prices[item.user_id] || 0,
      };
    });

    dispatch(
      AddExpenseForGroup({
        group_id: route?.params?.groupId,
        expense_name: route?.params?.title,
        members: members,
        owner_id: userId,
        amount: members.reduce(
          (acc, member) => Number(acc) + Number(member.amount),
          0,
        ),
        created_at: new Date().toISOString(),
      }),
    );

    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [
          { name: 'Home' },
          {
            name: 'SplitExpenseScreen',
            params: { id: route?.params?.groupId },
          },
        ],
      });
    }, 1000);

    console.log('pricess:', prices);

    // console.log("Payload:", {
    //   group_id: route?.params?.groupId,
    //   expense_name: route?.params?.title,
    //   members: members,
    //   owner_id: userId,
    //   amount: members.reduce((acc, member) => Number(acc) + Number(member.amount), 0),
    //   created_at: new Date().toISOString(),
    // })
  };

  const handleSelectAll = () => {
    const allUserIds = users.map(user => user.user_id);
    const allSelected = allUserIds.every(id => selectedUsers.includes(id));

    if (allSelected) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(allUserIds);
    }
  };
  const colors = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Select Users</Text>
      <FlatList
        data={users}
        keyExtractor={user => user.user_id}
        renderItem={({ item: user }) => (
          <TouchableOpacity
            onPress={() => handleUserSelection(user)}
            style={[
              styles.userItem,
              // selectedUsers.includes(user.user_id) ? styles.selectedUser : null,
            ]}>
            <TouchableOpacity
              style={styles.userItemContent}
              onPress={() => handleUserSelection(user)}>
              {selectedUsers.find(e => e.user_id == user.user_id) && (
                <MaterialCommunityIcons
                  name="check-circle"
                  size={20}
                  color={'green'}
                  // style={styles.avatharCheck}
                />
              )}
              <Text style={styles.userName}>{user.name}</Text>
            </TouchableOpacity>
            {selectedUsers.find(e => e.user_id == user.user_id) && (
              <TextInput
                style={styles.priceInput}
                placeholder="Price"
                keyboardType="numeric"
                value={String(toFixedDecimal(prices[user.user_id]))}
                onChangeText={price => handlePriceChange(user.user_id, price)}
              />
            )}
          </TouchableOpacity>
        )}
      />

      <View style={styles.buttonContainer}>
        <Button title="Select All" onPress={handleSelectAll} />
        <Button title="Go Back" onPress={handleGoBack} />
        <Button title="Add Expense" onPress={handleAddExpense} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7F7F7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333',
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  selectedUser: {
    backgroundColor: '#4285F4',
  },
  userItemContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  priceInput: {
    width: 80,
    height: 40,
    marginLeft: 16,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    textAlign: 'right',
    color: '#333333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  avatharCheck: {
    position: 'absolute',
    zIndex: 20,
    right: -10,
    top: -2,
  },
});

export default UserSelectionScreen;
