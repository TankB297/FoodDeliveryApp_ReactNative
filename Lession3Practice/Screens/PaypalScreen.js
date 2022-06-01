import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import PaymentSettingsScreenStyles from './PaymentSettingsScreenStyles';
import SignInScreenStyles from './SignInScreenStyles';
import PaypalScreenStyles from './PaypalScreenStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PaypalScreen({navigation}) {
  const [email, setEmail] = useState('');
  const refInfor = useRef('');
  useEffect(() => {
    AsyncStorage.getItem('nowAccount')
      .then(acc => {
        const nowUserList = JSON.parse(acc);
        refInfor.current = nowUserList.username;
        return AsyncStorage.getItem('paymentInfor');
      })
      .then(acc2 => {
        const listPaymentInfor = JSON.parse(acc2);
        const index = listPaymentInfor.findIndex(
          item => item.username === refInfor.current,
        );
        if (listPaymentInfor[index].emailPaypal !== '') {
          setEmail(listPaymentInfor[index].emailPaypal);
        }
      });
  }, []);
  return (
    <View style={PaymentSettingsScreenStyles.container}>
      <View style={PaypalScreenStyles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MainPayment')}>
          <Image
            style={SignInScreenStyles.backButton}
            source={require('../Components/Images/backButton.png')}
          />
        </TouchableOpacity>
        <Text style={PaypalScreenStyles.headerContent}>Paypal</Text>
      </View>
      <View style={PaymentSettingsScreenStyles.paymentItemContainer}>
        <View style={PaymentSettingsScreenStyles.itemContainer01}>
          <View style={PaymentSettingsScreenStyles.logoContainer}>
            <Image
              style={PaymentSettingsScreenStyles.logo}
              source={require('../Components/Images/Paypal.png')}
            />
          </View>
          <Text style={PaymentSettingsScreenStyles.content01}>Paypal</Text>
        </View>
        <TouchableOpacity>
          <View style={PaymentSettingsScreenStyles.itemContainer02}>
            <Text style={PaymentSettingsScreenStyles.content02}>
              {email}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View style={PaypalScreenStyles.orderButton01}>
          <Text style={PaypalScreenStyles.orderButtonContent01}>
            Make as Default
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={PaypalScreenStyles.orderButton02}>
          <Text style={PaypalScreenStyles.orderButtonContent02}>Remove</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
