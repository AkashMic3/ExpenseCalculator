import { fetchGroupMembers } from 'app/store/actions/groupActions';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

const UserSelectionScreen = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleUserSelection = userId => {
    const isSelected = selectedUsers.includes(userId);
    if (isSelected) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    // Add more users as needed
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGroupMembers('767'));
    //
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Users</Text>
      {users.map(user => (
        <TouchableOpacity
          key={user.id}
          style={[
            styles.userItem,
            selectedUsers.includes(user.id) ? styles.selectedUser : null,
          ]}
          onPress={() => handleUserSelection(user.id)}>
          <Text style={styles.userName}>{user.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
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
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
  },
  selectedUser: {
    backgroundColor: '#4285F4',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default UserSelectionScreen;
