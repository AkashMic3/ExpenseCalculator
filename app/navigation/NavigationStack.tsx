import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

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

        if (route.name === 'Home') {
          iconName =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAYFBMVEX///8AAADGxsbZ2dkKCgq2trZYWFjg4OAXFxexsbH5+fns7Oz8/Pzx8fEqKioxMTHQ0NB+fn6SkpJdXV2ampo4ODiGhoZqamolJSVOTk6mpqZjY2NAQEAcHBxwcHC8vLwkspY1AAADhElEQVRoge2a63aqMBBGuVhRIILXitf3f8u2dkaBfLmA4Zy1uub7p5FsmmwmgRJFEolEIpG8UtRJUhemxqwbFRSd3qr4O9UtRa2b1aKb6hQOXW7iZzalfmaxniwUO5+3u93m/fYPAE8CsYtZt99Zf+YnhCfOnqeDn0DPcdenyeAHxI7jwz+Ad1VrZ96Sfhp4cTWx43j10m4SOFAN9j8FHKrWDms3AXztYj+1Cw43q9bOeRJ4sdL7q2v9u6oIDweq7b+XSbWHlLDwnd7Z52/Lp95yCgsHqm24bQPaAsLzrd7V8tW81FvBZIyEZ5XeU93+AdAuFByoVtGOrKCCqsDpBYED1c60hNTXK41AeZ4CXlpUe1j1QR+Adu/CFfiLWDUakh19BNq9B8+AtTTQ+XNI1rR9dGk3EA5U4zVbXV7fXVg/UIBHw1FVY9XgaJSg2o2D21TT5pc9sGk3AF6YVStRQS0NpzUGnl30o2lwFRzcT5p4s3becFTVSLUC1e3v7LndVO184WCvxqpZtpDUu0k7T7hFNesWkrePWDsvOFKNimhpuFvhHGh40HLuBQeqLei4Aqzr3Wxp4pOF3nZ3s9GWkG7rM3sFe2TFv9W1W9Rm6m/AdeqhWjsW7ZZm7k8sqoFii8PLHNBubUEX4LaAVMtvvuw4vtEyB7TbGh9KpXr5OLJqjT87jhvW7qg1XQyPhYBq/NPUcmOMcqXHY+DKmUHtgGr8lOk+DP0Tuq4cm26ORTX39gzEcnBfOwVUozPMPTamKOfcOKLzjnagJKxobtA2zi97EqbWa1PV0g6UD1atnultvmG3kHbPQg9Wqq15zIaEZw5odzKqxs/UPJ6D2MNugdXwpykH5YNOWA2qLDiNMg5hk0d62TzyVOn1aUSOLI/e2zrSvmLVkjdUa4fdAtpF/QucS7/zkZt/yC3V124eZd0v2JABi5g7N+xv1ivcrNroyoKzR9o9yv9rl8C3+inYgb2XBS1z9Wt53HVHg1WDe89389HTjueXLnWuaqMWMXc2nWrXPP8npNqn4rlPHB4u54+Bbq1r6rB+VvrJ4dH9djBt5aaHWyJwgQtc4P8b3sy1eOw1w8Bn4BWN1L3jE7jABS5wgQtc4AIXuMAF/jfg6B3pIHD4Nng/zrcNx8HnPuz+o+BQcM83zDPXXR+COw5p/N9uTxNrwCM8ZT/Ca74lEolE8gfyBRpiN3EM6jiDAAAAAElFTkSuQmCC';
        } else if (route.name === 'Profile') {
          iconName =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAACSCAMAAACZpWO8AAAAYFBMVEX///8AAACgoKD8/PwEBASUlJTv7+/s7OxwcHCPj4+zs7MwMDDg4OCsrKzOzs6cnJxCQkI4ODjHx8fZ2dm/v78bGxteXl5nZ2dNTU0qKip2dnZ8fHwkJCRHR0dXV1cUFBTs1v2CAAACJUlEQVR4nO2Z627CMAxGk7j03tIbMFg33v8tl4wxAW2SDSnxpH2HH1RVpRxixxgjBAAAAAAAAAAAAAAAAAAAAPg3ZG2pVNlm5pq4ZUhQve0S+UnSbUd9i1eKRJbv5A27PGMV0krFZXvkzVvBuEsk0lyukKd8CZVVMkkehfSdii146V6HaqmkX/uURYjEYelz5cBw7vSCpc3HUHLUgrSzb1Iiu/ihI6FcmySlin/qqHcrVbGFhGjdRlK20ZW2PqVtbCM6+ZROsXMpffEpvcQ+c2nlU6qg9CeV3nxK0es3rXZKt+TRq/fGp7SJbSQGn9IUXYmObqNj9OaEROFWKhj678zZCvQs7beSth4uMe0SC3t7W7nnMRK1tYJXNZOSqC2n7shmJMTYP+RTYn5q9iOXD+nKk57knZS51L0bcU1PzLo09Pfb1A/EP2MaXuer0Pw6MMt8QelYqqJQ5cgzClhwnzbMIzgXDGqXJcehUZsHVDPUTFJj8362Ve/zexO5NunPPx12Np8Lu8P09WgEH73K4JlRXDAlKkr4bEPTNfJIVWGa/S5X5uAd+GfQfi5kmALnk1ZqrL3kGvrRJmw+kZl0LUfdDqUk+Owr844ClgQezHsHXWvkIY3aXyXSNwFD558GrnMKJiTqX1SkW+Y6WCFw/kXhogwkJMSPv0geCZfg3bNKXajA+eY3do6hUoka9STN3+3IAQAAAAAAAAAAAAAAAAAAwJN8ANaBEwDtwu0EAAAAAElFTkSuQmCC';
        }

        return (
          <Image source={{ uri: iconName }} style={{ width: 20, height: 20 }} />
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
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="SplitExpenseScreen"
        component={SplitExpenseScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="UserSelectionScreen"
        component={UserSelectionScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
