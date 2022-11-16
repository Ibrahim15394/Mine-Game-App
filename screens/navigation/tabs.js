import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home_screen';
import ViewScreen from '../View_Screen';
import Icon from 'react-native-vector-icons/Entypo/';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
       
        <Tab.Navigator 
  
        screenOptions={({route}) => ({
          tabBarStyle: {
            // borderRadius: 15,
            // height: 90,
            backgroundColor:'#fff',
            elevation:0,
            borderColor:'#fff'
          
        },
        tabBarShowLabel: false,
          tabBarIcon: ({focused, size, color,}) => {
            let iconName;
            let labelName;
          
            if(route.name === 'HomeScreen') {
              iconName = 'home';
              size = focused ? 25 : 20 ;
              color = focused ? '#000000' : '#b7b3b2';
              labelName="Home"

            }else if (route.name === 'ViewScreen'){
              iconName = 'foursquare'
              size = focused ? 25 : 20 ;
              color = focused ? '#000000' : '#b7b3b2';
              labelName="View"

            }
            return(
              <>
                <Icon
              name = {iconName}
              size = {size}
              color = {color}
              />
             {
             focused ?  <Text>
                {labelName}
              </Text> : null 
              }
              </>
              
            );
          }
        })}
       
        >
          <Tab.Screen 
          name="HomeScreen"
           component={HomeScreen} 
           options = {{headerShown: false}}
           />
          <Tab.Screen
           name="ViewScreen"
            component={ViewScreen} 
            options = {{headerShown: false}}
            />
        </Tab.Navigator>
      
      );
  
  };

  export default Tabs;