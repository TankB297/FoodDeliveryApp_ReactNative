import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen01 from '../Screens/MainScreen01';
import OrderScreen from '../Screens/OrderScreen';
import MyProfileScreen from '../Screens/MyProfileScreen';
import MyListScreen from '../Screens/MyListScreen';
import BeginScreen from '../Screens/BeginScreen';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ChangePassScreen from '../Screens/ChangePassScreen';
import MyProfileNavigation from './MyProfileNavigation';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tabbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Main01') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Order') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'MyList') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          } else if (route.name === 'MyProfile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Main01" component={MainScreen01} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="MyList" component={MyListScreen} />
      <Tab.Screen name="MyProfile" component={MyProfileNavigation} />
    </Tab.Navigator>
  );
};
export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Begin">
        <Stack.Screen
          name="Tab"
          component={Tabbar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Begin"
          component={BeginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
