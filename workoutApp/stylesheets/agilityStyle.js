import { StyleSheet } from 'react-native';

const AGILITYSTYLE = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#080808',
      alignItems: 'center',
      justifyContent: 'center',
    },

    exercise: {
      color: 'black',
      fontSize: 30,
    },

    exerciseContainer: {
      height: 75,
      width: 300,
      backgroundColor: '#869D1D',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20, 
      borderRadius: 10,
    },

    listIcon: {
      marginRight: 10, 
    },

    mainBtns: {
      flex: 1,
      height: 75,
      width: '100%',
      alignSelf: 'center',
      backgroundColor: '#737373',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20, 
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }, 

    mainText: {
      color: 'black',
      fontSize: 30,
    },

    listContainer: {
      height: '100%', 
      backgroundColor: '#080808', 
      alignItems: 'center',
      justifyContent: 'center',
    },

    generateBtn: {
      height: 50,
      width: 180,
      backgroundColor: '#c752b1',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },

    workoutModalContainer: {
      backgroundColor: '#869D1D',
      alignSelf: 'center',
      height: 550,
      width: '100%',
      borderRadius: 10,
    },

    workoutModalBtns: {
      height: 55,
      backgroundColor: 'black',
      margin: 15,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
    },

});

export { AGILITYSTYLE } ;