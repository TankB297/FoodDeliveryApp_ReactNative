import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import PaymentSettingsScreenStyles from './PaymentSettingsScreenStyles';
import SignInScreenStyles from './SignInScreenStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PaymentSettingsScreen({navigation}) {
  const [check01, setCheck01] = useState(false);
  const [check02, setCheck02] = useState(false);
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
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
          setCheck02(true);
          setEmail(listPaymentInfor[index].emailPaypal);
        } else {
          setCheck02(false);
        }
      });
  }, []);

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
        if (
          listPaymentInfor[index].bankName !== '' &&
          listPaymentInfor[index].yourName !== '' &&
          listPaymentInfor[index].cardNumber !== '' &&
          listPaymentInfor[index].cvv !== ''
        ) {
          setCheck01(true);
          setCardNumber(listPaymentInfor[index].cardNumber);
        } else {
          setCheck01(false);
        }
      });
  }, []);

  return (
    <View style={PaymentSettingsScreenStyles.container}>
      <View style={PaymentSettingsScreenStyles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MainProfile')}>
          <Image
            style={SignInScreenStyles.backButton}
            source={require('../Components/Images/backButton.png')}
          />
        </TouchableOpacity>
        <Text style={PaymentSettingsScreenStyles.headerContent}>
          Payment Settings
        </Text>
      </View>
      {check02 && (
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
          <TouchableOpacity onPress={() => navigation.navigate('Paypal')}>
            <View style={PaymentSettingsScreenStyles.itemContainer02}>
              <Text style={PaymentSettingsScreenStyles.content02}>
                {email}
              </Text>
              <Image
                style={PaymentSettingsScreenStyles.logo02}
                source={require('../Components/Images/rightArrow.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      )}
      {check01 && (
        <View style={PaymentSettingsScreenStyles.paymentItemContainer02}>
          <View style={PaymentSettingsScreenStyles.itemContainer01}>
            <View style={PaymentSettingsScreenStyles.logoContainer}>
              <Image
                style={PaymentSettingsScreenStyles.logo}
                source={require('../Components/Images/CreditCard.png')}
              />
            </View>
            <Text style={PaymentSettingsScreenStyles.content01}>
              Credit Card
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('CreditCard')}>
            <View style={PaymentSettingsScreenStyles.itemContainer02}>
              <Text style={PaymentSettingsScreenStyles.content02}>
                {cardNumber}
              </Text>
              <Image
                style={PaymentSettingsScreenStyles.logo02}
                source={require('../Components/Images/rightArrow.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      )}
      <View style={PaymentSettingsScreenStyles.paymentItemContainer03}>
        <View style={PaymentSettingsScreenStyles.itemContainer01}>
          <Image
            style={PaymentSettingsScreenStyles.logo}
            source={require('../Components/Images/CreditCard02.png')}
          />
          <Text style={PaymentSettingsScreenStyles.content01}>
            Add new payment method
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddNewPaymentMethod')}>
          <View style={PaymentSettingsScreenStyles.logoContainer}>
            <Image
              style={PaymentSettingsScreenStyles.logo03}
              source={require('../Components/Images/plus.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
