import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { navigationRef } from './NavigationService';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import ForgotPassword from 'app/screens/ForgotPassword';

import ThemeController from '../components/ThemeController';
import { Image, StatusBar } from 'react-native';
import { ILoginState } from 'app/models/reducers/login';
import Register from 'app/screens/Register';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfile from 'app/screens/Profile/UserProfile';
import ExpenseTrackerHome from 'app/screens/Home';
import AddExpensePage from 'app/screens/AddExpense/AddExpense';
import CreateGroupScreen from 'app/screens/AddGroup/AddGroup';
import SplitExpenseScreen from 'app/screens/GroupDetails/GroupDetails';
import UserSelectionScreen from 'app/screens/AddExpense/SelectUsers';
import ExpenseDetails from 'app/screens/GroupDetails/ExpenseDetails';
const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const homeOptions = {
  title: 'Home',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => <ThemeController />,
};

interface IState {
  loginReducer: ILoginState;
}

interface IProps {
  theme: Theme;
}

const AuthNavigator = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  return (
    <AuthStack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />
    </AuthStack.Navigator>
  );
};

const LoggedInNavigator = () => (
  <LoggedInStack.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') 
          iconName = "home"
        else if (route.name === 'Profile')
          iconName = "account"
        return (
          <MaterialCommunityIcons name={iconName} color={color} size={size} />
        );
      },
    })}>
    <Stack.Screen name="Home" component={HomeNav} options={homeOptions} />
    <Stack.Screen name="Profile" component={UserProfile} />
  </LoggedInStack.Navigator>
);

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Stack.Navigator headerMode="none">
        {isLoggedIn ? (
          <Stack.Screen
            name="Home"
            component={LoggedInNavigator}
            options={homeOptions}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={AuthNavigator}
            options={{
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
              headerRight: () => <ThemeController />,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

function HomeNav() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={ExpenseTrackerHome}
        options={homeOptions}
      />
      <HomeStack.Screen
        name="addscreen"
        component={AddExpensePage}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="CreateGroupScreen"
        
        component={CreateGroupScreen}
        options={{ title: 'Create a group' }}
        // options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="SplitExpenseScreen"
        component={SplitExpenseScreen}
        options={{ headerShown: false }}
      />
       <HomeStack.Screen
        name="ViewExpenseDetails"
        component={ExpenseDetails}
        // options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="UserSelectionScreen"
        component={UserSelectionScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
