import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    // color: '#fff',
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 16,
    // paddingHorizontal: 20,borderRadius:8,marginVertical:5
  },
  expenseTitle: {
    fontSize: 16,
    color: '#fff',
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    justifyContent:'center',
    backgroundColor: '#1c92d2',
    // paddingVertical: 12,
    // paddingHorizontal: 16,
    width:55,
    height:55,
    borderRadius: 27,
    alignItems: 'center',
    // marginTop: 16,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addButtonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  groupEmptyContainer:{

    justifyContent:'center',
    alignItems:'center'
  },

  groupEmptyText: {
    fontSize:18,
    fontWeight:'bold'
    
  }
});

export default styles;
