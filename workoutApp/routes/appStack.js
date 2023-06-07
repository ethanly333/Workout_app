import StrengthScreen from '../pages/strength.js';
import AgilityScreen from '../pages/agility.js';
import FlexibilityScreen from '../pages/flexibility.js';
import SpeedScreen from '../pages/speed.js';
import HomeScreen from '../pages/home.js' ;
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack' ;
import StrengthListScreen from '../pages/strengthList.js';
import GenerateStrengthScreen from '../pages/generateStrength.js';
import AgilityListScreen from '../pages/agilityList.js';
import FlexListScreen from '../pages/flexibilityList.js';

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
  },
  StrengthList: {
    screen: StrengthListScreen,
    navigationOptions: {
        headerTitle: '',
        headerStyle: {
            backgroundColor: '#080808',
        },
        headerTintColor: 'white'
    }
  },
  GenerateStrength: {
    screen: GenerateStrengthScreen,
    navigationOptions: {
      headerTitle: '',
        headerStyle: {
            backgroundColor: '#080808',
        },
        headerTintColor: 'white'
    }
  },
  AgilityList: {
    screen: AgilityListScreen,
    navigationOptions: {
        headerTitle: '',
        headerStyle: {
            backgroundColor: '#080808',
        },
        headerTintColor: 'white'
    }
  },
  /*
  GenerateAgility: {
    screen: GenerateAgilityScreen,
    navigationOptions: {
      headerTitle: '',
        headerStyle: {
            backgroundColor: '#080808',
        },
        headerTintColor: 'white'
    }
  },*/
  FlexList: {
    screen: FlexListScreen,
    navigationOptions: {
        headerTitle: '',
        headerStyle: {
            backgroundColor: '#080808',
        },
        headerTintColor: 'white'
    }
  },


}

const Stack = createStackNavigator(screens) ;

export default createAppContainer(Stack) ;