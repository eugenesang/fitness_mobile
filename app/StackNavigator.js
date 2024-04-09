import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.js';
import WorkoutScreen from './screens/WorkoutScreen.js';
import FitScreen from './screens/FitScreen.js';
import RestScreen from './screens/RestScreen.js';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="Workout" component={WorkoutScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Fit" component={FitScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Rest" component={RestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator