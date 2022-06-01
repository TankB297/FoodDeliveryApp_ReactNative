import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import CreditCardScreenStyles from './CreditCardScreenStyles';
import SignInScreenStyles from './SignInScreenStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CreditCardScreen({navigation}) {
  const [bankName, setBankName] = useState('');
  const [yourName, setYourName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [date, setDate] = useState('');
  const [cvv, setCVV] = useState('');
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
        setBankName(listPaymentInfor[index].bankName);
        setYourName(listPaymentInfor[index].yourName);
        setCardNumber(listPaymentInfor[index].cardNumber);
        setDate(listPaymentInfor[index].date);
        setCVV(listPaymentInfor[index].cvv);
      });
  }, []);
  return (
    <View style={CreditCardScreenStyles.container}>
      <View style={CreditCardScreenStyles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MainPayment')}>
          <Image
            style={SignInScreenStyles.backButton}
            source={require('../Components/Images/backButton.png')}
          />
        </TouchableOpacity>
        <Text style={CreditCardScreenStyles.headerContent}>Credit Card</Text>
      </View>
      <View style={CreditCardScreenStyles.logoContainer}>
        <Image
          style={CreditCardScreenStyles.logo01}
          source={require('../Components/Images/CreditCardLogo01.png')}
        />
        <Text style={CreditCardScreenStyles.content01}>{yourName}</Text>
        <Text style={CreditCardScreenStyles.content02}>{bankName}</Text>
        <Text style={CreditCardScreenStyles.content03}>
          {cardNumber}
        </Text>
        <Text style={CreditCardScreenStyles.content04}>$12.999.999.99</Text>
        <Text style={CreditCardScreenStyles.content05}>{bankName}</Text>
        <Image
          style={CreditCardScreenStyles.logo02}
          source={require('../Components/Images/CreditCardLogo02.png')}
        />
      </View>
      <View style={CreditCardScreenStyles.detailContainer}>
        <Text style={CreditCardScreenStyles.detailContent01}>Bank name</Text>
        <Text style={CreditCardScreenStyles.detailContent02}>{bankName}</Text>
      </View>
      <View style={CreditCardScreenStyles.detailContainer}>
        <Text style={CreditCardScreenStyles.detailContent01}>Your name</Text>
        <Text style={CreditCardScreenStyles.detailContent02}>{yourName}</Text>
      </View>
      <View style={CreditCardScreenStyles.detailContainer}>
        <Text style={CreditCardScreenStyles.detailContent01}>Card number</Text>
        <Text style={CreditCardScreenStyles.detailContent02}>
          {cardNumber}
        </Text>
      </View>
      <View style={CreditCardScreenStyles.detailContainer}>
        <Text style={CreditCardScreenStyles.detailContent01}>Date</Text>
        <Text style={CreditCardScreenStyles.detailContent02}>{date}</Text>
      </View>
      <View style={CreditCardScreenStyles.detailContainer}>
        <Text style={CreditCardScreenStyles.detailContent01}>CVV</Text>
        <Text style={CreditCardScreenStyles.detailContent02}>{cvv}</Text>
      </View>
    </View>
  );
}
