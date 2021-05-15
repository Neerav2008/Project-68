import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function FacebookScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Facebook</Text>
     
    </View>
  );
}

function InstagramScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Instagram</Text>
     
    </View>
  );
}

const FacebookStack = createStackNavigator();

function FacebookStackScreen() {
  return (
    <FacebookStack.Navigator>
      <FacebookStack.Screen name="Facebook" component={FacebookScreen} />
    </FacebookStack.Navigator>
  );
}

const InstagramStack = createStackNavigator();

function InstagramStackScreen() {
  return (
    <InstagramStack.Navigator>
      <InstagramStack.Screen name="Instagram" component={InstagramScreen} />
    </InstagramStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Facebook" component={FacebookStackScreen} />
        <Tab.Screen name="Instagram" component={InstagramStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
