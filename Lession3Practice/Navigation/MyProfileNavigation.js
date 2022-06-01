import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChangePassScreen from '../Screens/ChangePassScreen';
import MyProfileScreen from '../Screens/MyProfileScreen';
import PaymentSettingsScreen from '../Screens/PaymentSettingsScreen';
import ChooseCountryScreen from '../Screens/ChooseCountryScreen';
import MyVoucherScreen from '../Screens/MyVoucherScreen';
import PaymentNavigation from './PaymentNavigation';

const ProfileStack = createNativeStackNavigator();
export default function MyProfileNavigation() {
  return (
    <ProfileStack.Navigator initialRouteName="MainProfile">
      <ProfileStack.Screen
        name="MainProfile"
        component={MyProfileScreen}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="ChangePass"
        component={ChangePassScreen}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="Payment"
        component={PaymentNavigation}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="ChooseCountry"
        component={ChooseCountryScreen}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="MyVoucher"
        component={MyVoucherScreen}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
}
