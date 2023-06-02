import { useRoute } from '@react-navigation/native';
import { member } from 'app/models/actions/group';
import { AddExpenseForGroup } from 'app/store/actions/expenseActions';
import { fetchGroupMembers } from 'app/store/actions/groupActions';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const UserSelectionScreen = ({ navigation }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleUserSelection = userId => {
    const isSelected = selectedUsers.includes(userId);
    if (isSelected) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const route = useRoute();
  const users = useSelector(state => state.groupReducer.members) ?? [];
  const userId = useSelector(state => state.loginReducer.id) ?? '';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroupMembers(route?.params?.groupId ?? ''));
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAddExpense = () => {
    if (selectedUsers.length === 0) {
      // Show an error message or perform any necessary action
      Alert.alert('Please select at least one user.');
      return;
    } else {
      //call api and go back
      console.log(route.params);
      const members = selectedUsers.map(item => {
        console.log(item, 'item');
        const user = users.find(ele => ele.user_id === item);
        console.log(user);
        return {
          ...user,
          payment_status: item === userId ? true : false,
        };
      });
      dispatch(
        AddExpenseForGroup({
          group_id: route?.params?.groupId,
          expense_name: route?.params?.title,
          members: members,
          owner_id: userId,
          amount: route?.params?.amount,
          created_at: new Date().toISOString(),
        }),
      );
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }, { name: 'SplitExpenseScreen' }],
        });
      }, 2000);
    }
    // Logic for adding expense
  };
  const handleSelectAll = () => {
    // Check if all users are already selected
    const allUserIds = users.map(user => user.user_id);
    const allSelected = allUserIds.every(id => selectedUsers.includes(id));

    if (allSelected) {
      // Unselect all users
      setSelectedUsers([]);
    } else {
      // Select all users
      setSelectedUsers(allUserIds);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Users</Text>
      {users.map((user: member) => (
        <TouchableOpacity
          key={user.user_id}
          style={[
            styles.userItem,
            selectedUsers.includes(user.user_id) ? styles.selectedUser : null,
          ]}
          onPress={() => handleUserSelection(user.user_id)}>
          <Text style={styles.userName}>{user.name}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.buttonContainer}>
        <Button title="Select All" onPress={handleSelectAll} />
        <Button title="Go Back" onPress={handleGoBack} />
        <Button title="Add Expense" onPress={handleAddExpense} />
      </View>
    </View>
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
    overflow: 'hidden',
    // Gradient background
    backgroundGradientStart: '#FFA500',
    backgroundGradientEnd: '#FF7F00',
  },
  selectedUser: {
    backgroundColor: '#4285F4',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

export default UserSelectionScreen;
