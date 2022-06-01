import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChangePassScreen from '../Screens/ChangePassScreen';
import MyProfileScreen from '../Screens/MyProfileScreen';
import PaymentSettingsScreen from '../Screens/PaymentSettingsScreen';
import ChooseCountryScreen from '../Screens/ChooseCountryScreen';
import MyVoucherScreen from '../Screens/MyVoucherScreen';
import PaypalScreen from '../Screens/PaypalScreen';
import CreditCardScreen from '../Screens/CreditCardScreen';
import AddNewPaymentMethod from '../Screens/AddNewPaymentMethod';

const PaymentStack = createNativeStackNavigator();
export default function PaymentNavigation() {
  return (
    <PaymentStack.Navigator initialRouteName="MainPayment">
      <PaymentStack.Screen
        name="MainPayment"
        component={PaymentSettingsScreen}
        options={{headerShown: false}}
      />
      <PaymentStack.Screen
        name="Paypal"
        component={PaypalScreen}
        options={{headerShown: false}}
      />
      <PaymentStack.Screen
        name="CreditCard"
        component={CreditCardScreen}
        options={{headerShown: false}}
      />
      <PaymentStack.Screen
        name="AddNewPaymentMethod"
        component={AddNewPaymentMethod}
        options={{headerShown: false}}
      />
    </PaymentStack.Navigator>
  );
}
