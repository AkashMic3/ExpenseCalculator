import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Button, TextInput, Text, Avatar, } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
export default function SaveGroupScreen({ members, setView, setGroupName, handleCreateGroup, groupNameError }) {
    const navigation = useNavigation();
    const loading = useSelector((state: any) => state.loadingReducer.isLoginLoading)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Name Your Group", headerLeft: () => (
                <Button mode="text" color='#007AFF' onPress={() => setView('Add_Member')}>
                    Back
                </Button>
            ),
        })
        navigation.setOptions({ headerRight: null })
    })

    return (
        <Animatable.View
            duration={300}
            animation={'slideInRight'} style={styles.container}>
            <TextInput
                autoFocus
                style={styles.input}
                placeholder="Group Name"
                error={groupNameError}
                // value={groupName}
                onChangeText={setGroupName}
            />
            <Button style={styles.button}
                onPress={handleCreateGroup}
                loading={loading}
                disabled={loading}
            >
                <Text style={styles.buttonText}>Create</Text>
            </Button>
            <View style={styles.membersContainer}>
                <Text variant="headlineMedium">{members.length} memebrs</Text>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                >
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        {members.map(data => (
                            <View style={styles.avatharContainer}>
                                <Avatar.Text size={40} label={data.name.substring(0, 2).toUpperCase()} color='white' />
                                <Text style={{ width: 40, margin: 5 }} numberOfLines={1}>{data.name}</Text>
                            </View>
                        ))
                        }
                    </View>
                </ScrollView>
            </View>


        </Animatable.View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
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

        padding: 10,
    },

    avatharContainer: {
        flex: 1,
        justifyContent: 'center',
        // alignItems:'center',
        // textAlign:'center',
        marginTop: 10,
        margin: 5
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