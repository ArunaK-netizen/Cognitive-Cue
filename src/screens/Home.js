import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { FontAwesome5, MaterialCommunityIcons,FontAwesome, Ionicons,Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import TravelNavigation from './TravelNavigation';
import CaregiverAlerts from './CaregiverAlerts';
import EmergencyAlerts from './EmergencyAlerts';
import Reminders from './Reminders';
import Fall from './Fall';
import { Entypo } from '@expo/vector-icons';
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';

const Stack = createStackNavigator();

const HomeScreen = () => {
  const auth = getAuth();
  const [username, setUsername] = useState('');
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Poppins_700Bold, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium
  });
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        setUsername(user.displayName || ''); 
      }
    });

    return () => unsubscribe(); 
  }, [auth]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstIcons}>
        <Entypo name="chevron-thin-left" size={30} color="#5BCB7C" style={styles.left}/>
        <Feather name="menu" size={30} color="#5BCB7C" style={styles.right}/>
      </View>
      <Text style={styles.welcomeName}>Hello {username},</Text>
      <Text style={[styles.welcomeHeading, styles.welcomeFirst]}>Good Morning</Text>
      <View style={styles.homepageContent}>
        
      <View style={styles.categoriesMenu}>
            <Text style={styles.categories}>Categories</Text>
            <TouchableOpacity onPress={() => console.log("Clicked")}>
              
                
                <Text style={styles.seeAll}>See all</Text>
              
            </TouchableOpacity>
      </View>
        
          <View style={styles.servicesOptions}>
            <TouchableOpacity onPress={() => navigation.navigate('TravelNavigation')}>
              <View style={styles.servicesContainer}>
                <MaterialCommunityIcons name="plus-box" size={150} color="#5BCB7C" />
                <Text style={styles.categoriesText}>Fall Detection</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Fall')}>
              <View style={styles.servicesContainer}>
                
                <MaterialCommunityIcons name="heart-box" size={150} color="#AA6FF5" />
                <Text style={styles.categoriesText}>Emergency Alerts</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CaregiverAlerts')}>
              <View style={styles.servicesContainer}>
                <MaterialCommunityIcons name="alert-box" size={150} color="#6AA3F9" />
                <Text style={styles.categoriesText}>Reminders</Text>
              </View>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate('EmergencyAlerts')}>
              <View style={styles.servicesContainer}>
                <FontAwesome name="heartbeat" size={24} color="white" />
                <Text style={styles.textStyle}>Emergency alerts</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Reminders')}>
              <View style={styles.servicesContainer}>
                <FontAwesome5 name="notes-medical" size={24} color="white" />
                <Text style={styles.textStyle}>Reminders</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Reminders')}>
              <View style={styles.servicesContainer}>
                <FontAwesome5 name="notes-medical" size={24} color="white" />
                <Text style={styles.textStyle}>Reminders</Text>
              </View>
            </TouchableOpacity> */}
          
          </View>
          {/* <Text style={[styles.welcomeHeading, styles.chatAiheading]}>Chat with ai</Text>
          <View style={styles.chatAi}>
            <View style={styles.servicesContainer}>                      
              <Text style={styles.textStyle}>24/7</Text>
              <TouchableOpacity onPress={() => console.log('Start now button clicked!')} style={styles.button}>
                <Text style={styles.buttonText}>Chat now</Text>
              </TouchableOpacity>
            </View>
          </View> */}
          <Text style={[styles.welcomeHeading, styles.welcome]}>Welcome to Cognitive Cue</Text>
          <View style={styles.homepageBanner}>
          
          <View style={styles.locationTracking}>
            <Text style={styles.bannerText}>Cognitive Cue</Text>
              <Text style={[styles.textStyle,styles.homepageLocation]}>Track your location</Text>
            
            
            
          </View>
          <TouchableOpacity onPress={() => console.log('Start now button clicked!')} style={styles.button}>
              <Text style={styles.buttonText}>Start now</Text>
          </TouchableOpacity>
        </View>
        </View>
      
    </SafeAreaView>
  );
};

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
    {/* <Stack.Screen name="TravelNavigation" component={TravelNavigation} options={{ headerShown: false }}/> */}
    <Stack.Screen name="Fall" component={Fall} options={{ headerShown: false }}/>
    <Stack.Screen name="CaregiverAlerts" component={CaregiverAlerts} options={{ headerShown: false }}/>
    <Stack.Screen name="EmergencyAlerts" component={EmergencyAlerts} options={{ headerShown: false }}/>
    <Stack.Screen name="Reminders" component={Reminders} options={{ headerShown: false }}/>

  </Stack.Navigator>
);


export default StackNavigator;

const styles = StyleSheet.create({
    firstIcons: {
      display: 'flex',
      flexDirection: 'row',
      gap: 450,
      marginTop: 25
    },  
    container: {
        flex: 1,
        fontFamily: 'Poppins_700Bold',
        marginTop: StatusBar.currentHeight * 1.5 || 0,
        marginLeft: 30,
        display: 'flex',
        flexDirection: 'column',
        gap: 30
    },
    welcome:{
      marginTop: 80
    },
    welcomeName:{
      color: "gray",
      fontFamily: "Poppins_400Regular",
      fontSize: 25,
      marginTop: 30
    },
    welcomeFirst:{
      marginTop: -35,
      fontSize: 30
    },
    welcomeHeading: {
        color: 'black',
        fontFamily: 'Poppins_700Bold',
        fontSize: 25,
        
    },
    textStyle: {
        fontFamily: 'Poppins_500Medium',
        color: 'white',
        fontSize: 15,
    },
    
    categoriesMenu:{
      display: 'flex',
      flexDirection: 'row',
      gap: 250,
      marginTop: 40
      
    },
    categories: {
      color: 'black',
      fontFamily: 'Poppins_500Medium',
      fontSize: 30,
      
      
    },
    seeAll:{
      color: '#4DC771',
      fontFamily: 'Poppins_500Medium',
      fontSize: 30,
      
    },
    homepageBanner: {
        backgroundColor: '#5BCB7C',
        padding: 30,
        display: 'flex',
        width: 540,
        marginTop: 20,
        flexDirection: 'column',
        borderRadius: 20,
       
    },
    // homepageMap: {
    //     width: 300,
    //     height: 200
    // },
    subscript: {
        fontSize: 10
    },
    locationTracking: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        
    },
    bannerText: {
      color: "white",
      fontFamily: "Poppins_400Regular",
      fontSize: 25
    },  
    button: {
        backgroundColor: '#B1FFC8',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        
        justifyContent: 'center',
        alignItems: 'center',
        left: 350,
        width: 130
       
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        justifyContent: 'center',
        alignItems: 'center'
    },
    servicesContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        verticalAlign: 'middle'
        
    },
    servicesOptions: {
        
        flexDirection: 'row',
        gap: 35,
        flexWrap: 'wrap'
    },
   
    categoriesText:{
      fontFamily: 'Poppins_400Regular',
      fontSize: 20
    },
    // chatAi:{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    // chatAiheading:{
    //     marginTop: 5
    // }
    homepageLocation: {
      fontSize: 30,
      color: "black",
      fontFamily: 'Poppins_700Bold',
    },
    box:{
      padding: 10,
      backgroundColor: '#6AA3F9',
      borderRadius: 10
    }
    
});
