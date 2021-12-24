// import {createStackNavigator} from 'react-navigation/stack';
// import {createAppContainer} from 'react-navigation';

// import Home from '../screens/home';
// import ReviewDetails from '../screens/reviewDetails';

// const screens = {
//   Home: {
//     screen: ReviewDetails,
//   },
//   ReviewDetails: {
//     screen: Home,
//   },
// };
// const HomeStack = createStackNavigator(screens);

// export default createAppContainer(HomeStack);

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import ImageScreen from '../screens/DemoComponentReuse/ImageScreen';
import CounterScreen from '../screens/DemoState/CounterScreen';
import ColorScreen from '../screens/DemoState/ColorsScreen';
import SquareScreen from '../screens/DemoState/SquareScreen';
import TextScreen from '../screens/DemoState/TextScreen';
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
        <Stack.Screen name="SquareScreen" component={SquareScreen} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
