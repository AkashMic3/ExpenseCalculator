import { useNavigation } from '@react-navigation/native';
import { fetchGroupMembers } from 'app/store/actions/groupActions';
import { searchUser } from 'app/store/actions/loginRegisterActions';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button, Card, List, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';
const SelectMemberScreen = ({ selectedUsers, setSelectedUsers, setView }) => {
  const userId = useSelector((state:any) => state.loginReducer.id)
  const navigation = useNavigation();
  const handleUserSelection = (user: any) => {

    const isSelected = selectedUsers.find(data => data._id == user._id);
    if (!!isSelected) {
      setSelectedUsers(selectedUsers.filter(data => data._id !== user._id));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const [searchQuery, setSearchQuery] = useState('')

  const users = useSelector((state: any) => state?.searchMembersReducer?.members)
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchUser(searchQuery));
    //
  }, [searchQuery]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Create a Group",
      headerRight: () => (
        <Button mode="text" disabled={!(!!selectedUsers.length)} color='#007AFF' onPress={() => setView('Finish')}>
          Next
        </Button>
      ),
      headerLeft: () => (
        <Button mode="text" color='#007AFF' onPress={() => navigation.navigate('Home')}>
          Back
        </Button>
      ),
    });
  })
  
  const isSelected = (user) => selectedUsers.find(sUser => sUser._id == user._id)
  return (
    <Animatable.View
      duration={300}
      animation={'slideInLeft'} style={styles.container}>
      <Text style={styles.title}>Add Members</Text>
      <TextInput
        label="Search"
        placeholder='Enter Name or Phone '
        style={{ height: 50 }}
        mode='flat'
        onChangeText={setSearchQuery}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
        {users.map(user => ( userId!=user.user_id &&
          
          <TouchableOpacity
            key={user._id}
            style={[
              styles.userItem,
              isSelected(user) ? styles.selectedUser : null,
            ]}
            onPress={() => handleUserSelection(user)}>
            <Avatar.Text size={30} label={user.name.substring(0, 2).toUpperCase()} color='white' />
            <View>
            <Text style={[styles.userName,{color: isSelected(user)? 'white': 'black'} ]}>{user.name}</Text>
            <Text style={[styles.userName,{color: isSelected(user)? 'white': 'black', fontSize:9} ]}>{user.phone}</Text>
            </View>
      
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {

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
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000000',
    paddingLeft:10
  },
});

export default SelectMemberScreen;
