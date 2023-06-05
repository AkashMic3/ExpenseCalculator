import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    gradientBackground: {
      flex: 1,
    },
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 40,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: 20,
    },
    expenseContainer: {
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#cccccc',
      borderRadius: 8,
      padding: 16,
      backgroundColor: '#f9f9f9',
    },
    groupName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333333',
      marginBottom: 8,
    },
    amount: {
      paddingVertical: 5,
      fontSize: 16,
      color: '#333333',
      marginBottom: 4,
    },
    paymentStatus: {
      paddingVertical: 5,
      fontSize: 12,
      color: '#666666',
    },
    paymentleftStatus: {
        paddingLeft:10,
        fontWeight:'bold',
        fontSize: 12,
        color: '#666666',
      },
    addButton: {
      backgroundColor: '#ffffff',
      borderRadius: 8,
      paddingVertical: 12,
      alignItems: 'center',
      marginBottom: 20,
    },
    addButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#F76B1C',
    },
    progressContainer:{
   
        alignItems:'center',
        flexDirection:'row',
        paddingnHorizontal:10,
    },
    detailsViewAvathar: {
        
        justifyContent:'center',
        alignItems:'center'
    },
    expenseViewDetails:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    paidStatusLabel:{
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical:10
        
    },
    membersContainer: {
        paddingVertical:10,
     
    },
    membersItemContainer:{
        padding:5,
        paddingVertical:10,
    },
    membersItem:{
    
    flexDirection:'row'
    },
    membersName: {
        fontSize: 17,
        fontWeight: 'bold',
        paddingHorizontal:15
    },
    membersStatus:{
        fontSize: 13,
        color: '#666666',
        paddingHorizontal:15
    },
    avatharContainer: {
        zIndex:10,
        
    },
    avatharCheck: {
        
        position:'absolute',
        zIndex:20,
        right:-10,
        top:-2
        
    }

  });
  
  
  
  
  export default styles;
  