import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CallScreen from '../CallScreen';
import ContactScreen from '../ContactScreen';
import CallingScreen from '../CallingScreen';
import IncomingCallScreen from '../IncomingCallScreen';
import LoginScreen from '../HomeScreen/Login';
import VideoComponent from '../components/VideoComponent/Video';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Contacts" component={ContactScreen} />
        <Stack.Screen name="Video" component={VideoComponent} />
        
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="Call" component={CallScreen} />
          <Stack.Screen name="Calling" component={CallingScreen} />
          <Stack.Screen name="IncomingCall" component={IncomingCallScreen} />
        </Stack.Group> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
