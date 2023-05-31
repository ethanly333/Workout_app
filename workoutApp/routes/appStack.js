import { StrengthScreen } from './pages/strength.js';
import { AgilityScreen } from './pages/mobility_agility.js';
import { FlexibilityScreen } from './pages/balance_flex.js';
import { SpeedScreen } from './pages/speed.js';
import { HomeScreen } from './pages/home.js' ;
import { createAppContainer } from 'react-navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const screens = {
  Home: {
    screen: HomeScreen
  },
  Strength: {
    screen: StrengthScreen
  },
  Agility: {
    screen: AgilityScreen
  },
  Flexibility: {
    screen: FlexibilityScreen
  },
  Speed: {
    screen: SpeedScreen
  },
}

const Stack = createNativeStackNavigator(screens) ;

export default createAppContainer(Stack) ;