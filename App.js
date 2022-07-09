// App.js
import React, {useEffect, useState} from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Splash from './src/screens/Splash';
import AllUsers from './src/screens/AllUsers';
import Leaderboard from './src/screens/Leaderboard';
import User from './src/screens/User';

function Home() {
  return (
    <Tab.Navigator 
      initialRouteName="AllUsers"
      screenOptions={{
        tabBarActiveTintColor: '#000',
    }}>
      <Tab.Screen name="AllUsers" 
        component={AllUsers} 
        options={{ 
          headerTintColor: '#000',
          tabBarLabel: 'Users',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home" color={focused ? "#000" : "#808080"} size={26} />
          ),
          }} />
      <Tab.Screen name="Leaderboard" 
        component={Leaderboard} 
        options={{ 
          headerTintColor: '#000',
          tabBarLabel: 'Leaderboard',
          tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="weight-lifter" color={focused ? "#000" : "#808080"} size={26} />
          ),
        }}/>
    </Tab.Navigator>
  );
} 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
 
  return (
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen 
                  name="Splash" 
                  component={Splash} 
                  options={{ headerShown: false }}
                />
                <Stack.Screen 
                  name="Home" 
                  component={Home} 
                  options={{ headerShown: false }} />
                <Stack.Screen name="User" component={User} 
                  options={({ route }) => ({ 
                    title: route.params.name,
                    headerStyle: {
                      backgroundColor:"#FFF",
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                      textTransform: 'uppdercase',
                    }, 
                  })}/>
              </Stack.Navigator>
            </NavigationContainer>
  );
}


export default App;