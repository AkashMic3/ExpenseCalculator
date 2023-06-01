import { member } from 'app/models/actions/group';
import { fetchGroupMembers } from 'app/store/actions/groupActions';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
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

  const users = useSelector(state => state.groupReducer.members) ?? [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroupMembers('6476d6663cccd26ce40b5311'));
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAddExpense = () => {
    // Logic for adding expense
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
