// App.js
import React, {useEffect, useState} from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Splash from './src/screens/Splash';
import Users from './src/screens/Users';
import Leaderboard from './src/screens/Leaderboard';
import User from './src/screens/User';
import UserContext from '../Leaderboard/src/contexts/UserContext';
import Styles from '../Leaderboard/src/utility/styles';

import userList from './src/data/leaderboard.json';

function Home() {
  return (
    <Tab.Navigator 
      initialRouteName="Users"
      screenOptions={{
        tabBarActiveTintColor: Styles.colors.emeraldGreen,
    }}>
      <Tab.Screen name="Users" 
        component={Users} 
        options={{ 
          headerTintColor: Styles.colors.white,
          headerStyle: {
            backgroundColor: Styles.colors.emeraldGreen,
          },
          tabBarLabel: 'Users',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="account-group" color={focused ? Styles.colors.emeraldGreen : Styles.colors.gray} size={26} />
          ),
          }} />
      <Tab.Screen name="Leaderboard" 
        component={Leaderboard} 
        options={{ 
          headerTintColor: Styles.colors.white,
          headerStyle: {
            backgroundColor: Styles.colors.emeraldGreen,
          },
          tabBarLabel: 'Leaderboard',
          tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="trophy" color={focused ? Styles.colors.emeraldGreen : Styles.colors.gray} size={26} />
          ),
        }}/>
    </Tab.Navigator>
  );
} 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [users, setUsers] = useState([]);

    
  useEffect(() => {
    function getUsers () {
       let  userData = [];
       for (const [key, value] of Object.entries(userList)) {
        userData.push(userList[`${key}`]);
       }
       setUsers(userData);
     }
     getUsers();
     
   }, [setUsers]);
  return (
    <UserContext.Provider value={{users}}>
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
            options={{ headerShown: false }} 
          />
          <Stack.Screen name="User" component={User} 
            options={({ route }) => ({ 
            title: route.params.name,
            headerStyle: {
              backgroundColor: Styles.colors.emeraldGreen,
            },
            headerTintColor: Styles.colors.white,
            headerTitleStyle: {
            textTransform: 'uppdercase',
            fontFamily: 'Poppins-Regular',
          }, 
        })}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}


export default App;