import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import SelectMemberScreen from './SelectMembers/index';
import SaveGroupScreen from './SaveGroup';
import { useDispatch, useSelector } from 'react-redux';
import { addGroup } from 'app/store/actions/groupActions';

const CreateGroupScreen = () => {
  const userId = useSelector((state:any) => state.loginReducer.id)
  const dispatch = useDispatch()
  const [selectedView, setView] = useState('Add_Member')
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [groupNameError, setGroupNameError] = useState(false);
  // const [memberName, setMemberName] = useState('');
  // const [members, setMembers] = useState([]);

  const handleCreateGroup = () => {
    // Implement logic to create the group with members
    if(groupName == '') {
      setGroupNameError(true);
      return
    } else
    setGroupNameError(false);

    let payload = {
      group_name:groupName,
      members: selectedUsers,
      owner_id: userId,
      created_at: new Date()
    }
    if(groupName!='' && setSelectedUsers.length!=0)
        dispatch(addGroup(payload.group_name, payload.members,payload.owner_id, payload.created_at))
  };


  return (
    <View style={styles.container}>

      {selectedView == 'Add_Member' ?
        <SelectMemberScreen setView={setView} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} />
        : <SaveGroupScreen groupNameError={groupNameError} handleCreateGroup={handleCreateGroup} setGroupName={setGroupName} setView={setView} members={selectedUsers} />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 10,
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
