/**
 * React Native App
 * Everything starts from the Entry-point
 */
import React from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';

import {
  PaperThemeDefault,
  PaperThemeDark,
  CombinedDefaultTheme,
  CombinedDarkTheme,
} from 'app/config/theme-config';
import Navigator from 'app/navigation';
import configureStore from 'app/store';
import { IThemeState } from 'app/models/reducers/theme';
import { AppProvider } from '@realm/react';
import {
  getUnhandledPromiseRejectionTracker,
  setUnhandledPromiseRejectionTracker,
} from 'react-native-promise-rejection-utils'
import { showFlashMessage } from './store/actions/flashMessageActions';
import SnackbarView from './components/Snackbar';

const prevTracker = getUnhandledPromiseRejectionTracker()

const { persistor, store } = configureStore();
interface IState {
  themeReducer: IThemeState;
}

const RootNavigation: React.FC = () => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const dispatch =  useDispatch()
  const paperTheme = isDark ? PaperThemeDark : PaperThemeDefault;
  const combinedTheme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;

  setUnhandledPromiseRejectionTracker((id, error) => {
  
    dispatch(showFlashMessage('Error!, Please verify your details'));
    // Alert.alert('Error Invalid details')
    if (prevTracker !== undefined) {
      prevTracker(id, error)
    }
  })


  return (
    <PaperProvider theme={paperTheme}>
      <Navigator theme={combinedTheme} />
      <SnackbarView />
    </PaperProvider>
  );
};

const EntryPoint: React.FC = () => {
  console.log('{entry}');
  return (
   
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
   
  );
};

export default EntryPoint;
