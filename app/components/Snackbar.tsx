import { IFlash } from 'app/models/reducers/flash';
import { hideFlashMessage } from 'app/store/actions/flashMessageActions';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

interface IState {
    flashReducer: IFlash;
  }

const SnackbarView: React.FC = () => {
  
  const [visible, setVisible] = React.useState(true);
  const dispatch =  useDispatch()
  const message = useSelector((state:IState) => state.flashReducer)
  const clearMessage = ()=> dispatch(hideFlashMessage())

  React.useEffect(()=> {
    if(message.visible) {
        let snakBarTimer = setTimeout(()=> hideFlashMessage(), 5000)
        return ()=> {
            clearTimeout(snakBarTimer)
        }
    }
   
  }, [message])

  return (
    <View style={styles.container}>
      <Snackbar
        visible={message.visible}
        onDismiss={clearMessage}
        action={{
          label: 'Hide',
          onPress: () => {
            // Do something
          },
        }}>
        {message?.message}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'space-between',
    position:'absolute',
    bottom:10,
    left:0,
    right:0
    
  },
});

export default SnackbarView;