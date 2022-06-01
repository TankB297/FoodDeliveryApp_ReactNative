import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import AddNewPaymentMethodStyles from './AddNewPaymentMethodStyles';
import SignInScreenStyles from './SignInScreenStyles';
import CreditCardScreenStyles from './CreditCardScreenStyles';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const paymentMethod = [
  {label: 'Paypal', value: 'Paypal'},
  {label: 'Credit Card', value: 'Credit Card'},
];

const listBank = [
  {label: 'Vietinbank', value: 'Vietinbank'},
  {label: 'Techcombank', value: 'Techcombank'},
  {label: 'MBBank', value: 'MBBank'},
  {label: 'TPBank', value: 'TPBank'},
];

export default function AddNewPaymentMethod({navigation}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState(paymentMethod);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState('');
  const [items2, setItems2] = useState(listBank);

  const [date, setDate] = useState(new Date());
  const [open3, setOpen3] = useState(false);

  const [email, setEmail] = useState('');

  const [cvv, setCVV] = useState('');
  const [yourName, setYourName] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const handleCreateNewCreditCard = () => {
    AsyncStorage.getItem('nowAccount').then(acc => {
      const nowUserList = JSON.parse(acc);
      AsyncStorage.getItem('paymentInfor').then(acc => {
        const listPaymentInfor = JSON.parse(acc);
        const check = listPaymentInfor.some((item, index) => {
          if (item.username === nowUserList.username) {
            listPaymentInfor[index].bankName = value2;
            listPaymentInfor[index].yourName = yourName;
            listPaymentInfor[index].cardNumber = cardNumber;
            listPaymentInfor[index].date = date.toLocaleDateString();
            listPaymentInfor[index].cvv = cvv;
            return true;
          }
          return false;
        });
        if (check) {
          AsyncStorage.setItem(
            'paymentInfor',
            JSON.stringify(listPaymentInfor),
          );
        }
      });
    });
    Alert.alert('Thông báo', 'Thêm thẻ thành công!');
    navigation.navigate('MainPayment');
  };

  const handleCreateNewPaypal = () => {
    AsyncStorage.getItem('nowAccount').then(acc => {
      const nowUserList = JSON.parse(acc);
      AsyncStorage.getItem('paymentInfor').then(acc => {
        const listPaymentInfor = JSON.parse(acc);
        const check = listPaymentInfor.some((item, index) => {
          if (item.username === nowUserList.username) {
            listPaymentInfor[index].emailPaypal = email;
            return true;
          }
          return false;
        });
        if (check) {
          AsyncStorage.setItem(
            'paymentInfor',
            JSON.stringify(listPaymentInfor),
          );
          Alert.alert('Thông báo', 'Thêm email paypal thành công!');
        }
      });
    });
    navigation.navigate('MainPayment');
  };

  const formatCardNumber = value => {
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
    const onlyNumbers = value.replace(/[^\d]/g, '');
    return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
      [$1, $2, $3, $4].filter(group => !!group).join(' '),
    );
  };

  return (
    <View style={AddNewPaymentMethodStyles.container}>
      <View style={AddNewPaymentMethodStyles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MainPayment')}>
          <Image
            style={SignInScreenStyles.backButton}
            source={require('../Components/Images/backButton.png')}
          />
        </TouchableOpacity>
        <Text style={AddNewPaymentMethodStyles.headerContent}>Add New</Text>
      </View>
      {value === '' && (
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={AddNewPaymentMethodStyles.dropdown}
          placeholder="Select your payment method"
        />
      )}

      {value === 'Paypal' && (
        <View>
          <View style={AddNewPaymentMethodStyles.paymentItemContainer}>
            <View style={AddNewPaymentMethodStyles.itemContainer01}>
              <View style={AddNewPaymentMethodStyles.logoContainer}>
                <Image
                  style={AddNewPaymentMethodStyles.logo}
                  source={require('../Components/Images/Paypal.png')}
                />
              </View>
              <Text style={AddNewPaymentMethodStyles.content01}>Paypal</Text>
            </View>
            <View style={AddNewPaymentMethodStyles.itemContainer02}>
              <TextInput
                value={email}
                onChangeText={value => setEmail(value)}
                placeholder="Enter your paypal email"
              />
            </View>
          </View>
          <TouchableOpacity onPress={handleCreateNewPaypal}>
            <View style={AddNewPaymentMethodStyles.orderButton02}>
              <Text style={AddNewPaymentMethodStyles.orderButtonContent01}>
                Save
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      {value === 'Credit Card' && (
        <View>
          <View style={CreditCardScreenStyles.logoContainer}>
            <Image
              style={CreditCardScreenStyles.logo01}
              source={require('../Components/Images/CreditCardLogo01.png')}
            />
            <Text style={CreditCardScreenStyles.content01}>{yourName}</Text>
            <Text style={CreditCardScreenStyles.content02}>{value2}</Text>
            <Text style={CreditCardScreenStyles.content03}>{cardNumber}</Text>
            <Text style={CreditCardScreenStyles.content04}>{cvv}</Text>
            <Text style={CreditCardScreenStyles.content05}>{value2}</Text>
            <Image
              style={CreditCardScreenStyles.logo02}
              source={require('../Components/Images/CreditCardLogo02.png')}
            />
          </View>
          <View style={AddNewPaymentMethodStyles.detailContainer}>
            <Text style={AddNewPaymentMethodStyles.detailContent01}>
              Bank name
            </Text>
            <DropDownPicker
              open={open2}
              value={value2}
              items={items2}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setItems2}
              style={AddNewPaymentMethodStyles.bankNameDropdown}
              placeholder="Select your bank name"
            />
          </View>
          <View style={AddNewPaymentMethodStyles.detailContainer}>
            <Text style={AddNewPaymentMethodStyles.detailContent01}>
              Your name
            </Text>
            <TextInput
              value={yourName}
              onChangeText={value => setYourName(value)}
              placeholder="Enter your name"
              style={AddNewPaymentMethodStyles.input}
            />
          </View>
          <View style={AddNewPaymentMethodStyles.detailContainer}>
            <Text style={AddNewPaymentMethodStyles.detailContent01}>
              Card number
            </Text>
            <TextInput
              value={cardNumber}
              onChangeText={value => setCardNumber(formatCardNumber(value))}
              placeholder="Enter your card number"
              style={AddNewPaymentMethodStyles.input}
              keyboardType="number-pad"
              maxLength={19} //2222 2222 2222 2222
            />
          </View>
          <View style={AddNewPaymentMethodStyles.detailContainer}>
            <Text style={AddNewPaymentMethodStyles.detailContent01}>Date</Text>
            <View>
              <TouchableOpacity onPress={() => setOpen3(true)}>
                <View style={AddNewPaymentMethodStyles.datePicker}>
                  <Text>{date.toLocaleDateString()}</Text>
                </View>
              </TouchableOpacity>
              <DatePicker
                modal
                mode="date"
                open={open3}
                date={date}
                onConfirm={date => {
                  setOpen3(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen3(false);
                }}
              />
            </View>
          </View>
          <View style={AddNewPaymentMethodStyles.detailContainer}>
            <Text style={AddNewPaymentMethodStyles.detailContent01}>CVV</Text>
            <TextInput
              value={cvv}
              onChangeText={value => setCVV(value)}
              placeholder="Enter your CVV"
              style={AddNewPaymentMethodStyles.input}
              keyboardType='number-pad'
              maxLength={3}
            />
          </View>
          <TouchableOpacity onPress={handleCreateNewCreditCard}>
            <View style={AddNewPaymentMethodStyles.orderButton01}>
              <Text style={AddNewPaymentMethodStyles.orderButtonContent01}>
                Save
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
