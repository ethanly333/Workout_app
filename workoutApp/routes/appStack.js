import StrengthScreen from '../pages/strength.js';
import AgilityScreen from '../pages/agility.js';
import FlexibilityScreen from '../pages/flexibility.js';
import SpeedScreen from '../pages/speed.js';
import HomeScreen from '../pages/home.js' ;
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack' ;

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
        headerTitle: 'Workouts',
        headerStyle: {
            backgroundColor: '#080808',
        },
        headerTintColor: 'white'
    }
  },
  Strength: {
    screen: StrengthScreen,
    navigationOptions: {
        headerTitle: 'Strength',
        headerStyle: {
            backgroundColor: '#080808'
        },
        headerTintColor: 'white'
    }
  },
  Agility: {
    screen: AgilityScreen,
    navigationOptions: {
        headerTitle: 'Agility',
        headerStyle: {
            backgroundColor: '#080808'
        },
        headerTintColor: 'white'
    }
  },
  Flexibility: {
    screen: FlexibilityScreen,
    navigationOptions: {
        headerTitle: 'Flexibility',
        headerStyle: {
            backgroundColor: '#080808'
        },
        headerTintColor: 'white'
    }
  },
  Speed: {
    screen: SpeedScreen,
    navigationOptions: {
        headerTitle: 'Speed',
        headerStyle: {
            backgroundColor: '#080808',
        },
        headerTintColor: 'white'
    }
  }
}

const Stack = createStackNavigator(screens) ;

export default createAppContainer(Stack) ;