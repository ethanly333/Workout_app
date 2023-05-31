import { StatusBar } from 'expo-status-bar' ;
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, Button } from 'react-native' ;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tennis Workouts</Text>
      <SafeAreaView style={styles.btnContainer}>
        <TouchableOpacity style={styles.exerciseBtn}>
          <Image 
            style = {styles.exerciseIcon}
            source = {require('./assets/strength.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.exerciseBtn}>
          <Image 
            style = {styles.exerciseIcon}
            source = {require('./assets/speed.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.exerciseBtn}>
          <Image 
            style = {styles.exerciseIcon}
            source = {require('./assets/flexibility.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.exerciseBtn}>
          <Image 
            style = {styles.exerciseIcon}
            source = {require('./assets/agility.png')}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.randomizeBtn}>
        <Button
          title='Randomize'
          color='black'
          fontWeight='bold'
        />
      </SafeAreaView>

    </SafeAreaView>
  ) ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    fontFamily: 'AlNile-Bold',
    color: '#f5f5f5',
    margin: 25, 
  },

   btnContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10, 
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 50,
   },

  exerciseBtn: {
    height: 150,
    width: 150,
    backgroundColor: '#404b0e',
    borderRadius: 15, 
    margin: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  exerciseIcon: {
    height: 110,
    width: 110,
  },

  randomizeBtn: {
    height: 50,
    width: 180,
    backgroundColor: '#c752b1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
}) ;
