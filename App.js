import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home.js';
import { Entypo, FontAwesome5, Octicons,Ionicons, FontAwesome, AntDesign, EvilIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { User, onAuthStateChanged } from "firebase/auth";
import Login from './src/screens/Login.js';
import Calendar from './src/screens/Calendar.js';
import Add from './src/screens/Add.js';
import Edit from './src/screens/Edit.js';

import Fall from './src/screens/Fall.js';

import EmergencyAlerts from './src/screens/EmergencyAlerts.js';
import CaregiverAlerts from './src/screens/CaregiverAlerts.js';
import Reminders from './src/screens/Reminders.js';
import { FIREBASE_AUTH } from './FirebaseConfig.ts';

const Tab = createBottomTabNavigator();

const InsideLayout = () => {
  return (
    
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
        <Tab.Screen name={'Home'} component={Home} style={styles.iconPadding} options={{
          tabBarIcon: ({ focused }) => (<AntDesign name="home"  size={30} color={focused? "black":'gray'} />)
        }} />
        <Tab.Screen name={'Calendar'} component={Calendar} style={styles.iconPadding} options={{
          tabBarIcon: ({ focused }) => (<Octicons name={'graph'} size={30} color={focused? "black":'gray'} />)
        }} />
        <Tab.Screen name={'Add'} component={Add} style={styles.iconPadding} options={{
          tabBarIcon: ({ focused }) => (<FontAwesome5 name={'user'} size={30} color={focused? "black":'gray'} />)
        }} />
        <Tab.Screen name={'Edit'} component={Edit} style={styles.iconPadding} options={{
          tabBarIcon: ({ focused }) => (<EvilIcons name={'gear'} size={40} color={focused? "black":'gray'} />)
        }} />
        
      </Tab.Navigator>
    
  );
}

const TopStack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = React.useState(null);

  useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH, (user)=>{
      setUser(user);
    })
  }, []);

  return (
    <NavigationContainer>
      <TopStack.Navigator initialRouteName='Login'>
        {user ? (<TopStack.Screen name="Inside" component={InsideLayout} options={{headerShown: false}}/>) : (<TopStack.Screen name="login" component={Login} options={{ headerShown: false }} />)}
        
      </TopStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight * 1.5 || 0,
  },
  tabNavigatorColor: {
    backgroundColor: 'black',
    
  },
  
  

});
