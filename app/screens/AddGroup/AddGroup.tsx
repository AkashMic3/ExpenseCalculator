import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const CreateGroupScreen = () => {
  const [groupName, setGroupName] = useState('');
  const [memberName, setMemberName] = useState('');
  const [members, setMembers] = useState([]);

  const handleCreateGroup = () => {
    // Implement logic to create the group with members
    console.log('Creating group:', groupName);
    console.log('Group members:', members);
    // Reset the input fields and members list
    setGroupName('');
    setMemberName('');
    setMembers([]);
  };

  const handleAddMember = () => {
    // Add the member to the members list
    setMembers([...members, memberName]);
    // Reset the member name input
    setMemberName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Group</Text>

      <TextInput
        style={styles.input}
        placeholder="Group Name"
        value={groupName}
        onChangeText={setGroupName}
      />

      <View style={styles.membersContainer}>
        <TextInput
          style={styles.memberInput}
          placeholder="Member Name"
          value={memberName}
          onChangeText={setMemberName}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddMember}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.membersTitle}>Group Members:</Text>
      {members.map((member, index) => (
        <View key={index} style={styles.memberContainer}>
          <Text style={styles.memberText}>{member}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleCreateGroup}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f1f1f1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    color: '#333333',
  },
  membersContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  memberInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    color: '#333333',
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  addButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  membersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
  },
  memberContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    padding: 10,
    marginBottom: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  memberText: {
    fontSize: 16,
    color: '#333333',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default CreateGroupScreen;
