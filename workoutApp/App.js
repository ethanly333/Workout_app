import { StatusBar } from 'expo-status-bar';
import { Expo } from 'expo';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native' ;
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, Button } from 'react-native';
import StrengthScreen from './pages/strength.js';
import { AgilityScreen } from './pages/agility.js';
import { FlexibilityScreen } from './pages/flexibility.js';
import { SpeedScreen } from './pages/speed.js';
import HomeScreen from './pages/home.js' ;
import Navigator from './routes/appStack.js' ;

export default function App() {
  return (
    <Navigator/>
  );
}