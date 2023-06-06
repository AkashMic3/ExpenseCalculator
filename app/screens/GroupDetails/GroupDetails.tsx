import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import NavigationService, {
  navigationRef,
} from 'app/navigation/NavigationService';
import {
  deleteExpensess,
  fetchExpense,
} from 'app/store/actions/expenseActions';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, IconButton, ProgressBar, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import moment from 'moment';
import ExpenseLoader from 'app/components/ExpenseLoader';
import { floor } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const SplitExpenseScreen = () => {
  const loading = useSelector(
    (state: any) => state.loadingReducer.isLoginLoading,
  );
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
  const { colors } = useTheme();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Expenses',
      headerLeft: () => (
        <Button mode="text" color="#007AFF" onPress={() => navigation.goBack()}>
          Back
        </Button>
      ),
    });
  }, [navigation]);
  const route = useRoute();
  function ShowExpenses({ item }) {
    const status = item.members.filter(item => item.user_id === userId)[0];
    console.log(status, 'status3333', item);
    const nonPaidCount = item?.members?.filter(
      e => e.payment_status == false,
    )?.length;
    function deleteExpense(item) {
      Alert.alert('Message', `Are you sure to delete ${item.expense_name} ?`, [
        { text: 'NO', onPress: () => null, style: 'cancel' },
        {
          text: 'YES',
          onPress: () => {
            dispatch(deleteExpensess(item?._id));
            dispatch(fetchExpense(route?.params?.id, userId));
          },
        },
      ]);
    }

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          NavigationService.navigate('ViewExpenseDetails', {
            groupDetails: item,
          });
        }}>
        <View style={styles.expenseContainer}>
          <View style={styles.nameWrapper}>
            <Text style={styles.groupName}>{item.expense_name}</Text>
            {item?.owner_id === userId && (
              <IconButton
                icon="delete"
                size={20}
                onPress={() => {
                  deleteExpense(item);
                }}
                color={colors.disabled}
              />
            )}
          </View>

          <Text style={styles.amount}>₹{item.amount}</Text>
          <View style={styles.progressContainer}>
            <View style={{ flex: 1 }}>
              <ProgressBar
                progress={
                  (item.members.length - nonPaidCount) / item.members.length
                }
                color={'#007AFF'}
              />
            </View>
            <Text style={styles.paymentleftStatus}>
              ₹{' '}
              {Math.round(
                (item.amount / item.members.length) * nonPaidCount * 100,
              ) / 100}{' '}
              left
            </Text>
          </View>
          <Text style={styles.paymentStatus}>
            <MaterialCommunityIcons name="clock-outline" />
            {item.members &&
              ` ${item.members.length - nonPaidCount} of ${
                item.members.length
              } paid`}{' '}
            • {moment(item?.created_at).format('MMM D')}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <LinearGradient
      colors={['#1c92d2', '#f2fcfe']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBackground}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Group Expenses</Text>
        {loading ? (
          <ExpenseLoader />
        ) : (
          <FlatList
            data={expenseData}
            showsVerticalScrollIndicator={false}
            renderItem={ShowExpenses}
            inverted
          />
        )}
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
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SplitExpenseScreen;
