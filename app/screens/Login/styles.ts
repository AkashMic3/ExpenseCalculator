import { StyleSheet } from 'react-native';
import metrics from 'app/config/metrics'; 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
    padding:5
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  inputContainer:{
    height: metrics.screenHeight * 0.06
    
  },
  login: {
    marginTop: 10,
   
  },
  forgot: {
    marginTop: 12,
  },
  labelStyle: {
    fontSize: 12,
  },
});

export default styles;
