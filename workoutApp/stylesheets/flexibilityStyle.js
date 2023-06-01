import { StyleSheet } from 'react-native';

const FLEXIBILITYSTYLE = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#080808',
      alignItems: 'center',
      justifyContent: 'center',
    },

    exercise: {
      color: 'white',
      fontSize: 30,
    },

    exerciseContainer: {
      height: 75,
      width: 300,
      backgroundColor: '#404b0e',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20, 
      borderRadius: 10,

    },

});

export { FLEXIBILITYSTYLE } ;