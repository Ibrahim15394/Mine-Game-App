import React from 'react';
import {} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
// ============== navigation packages =========== \\
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './screens/Intro';
import HomeScreen from './screens/Home_screen';
import ViewScreen from './screens/View_Screen';
import Tabs from './screens/navigation/tabs';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
    <Stack.Navigator 
     screenOptions={{
         header : () => null
       }}
    >

      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="HomeScreen"  component={Tabs}  />
      <Stack.Screen name="ViewScreen" component={ViewScreen} />

    </Stack.Navigator>
  </NavigationContainer>
    )

};


export default App;
