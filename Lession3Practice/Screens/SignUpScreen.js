import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Footer from '../Components/Footer';
import SignInScreenStyles from './SignInScreenStyles';
import InputCommon from '../Components/InputCommon';
import InputCommonStyles from '../Components/InputCommonStyles';
import ButtonCommon from '../Components/ButtonCommon';
import ButtonCommonStyles from '../Components/ButtonCommonStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUpScreen({navigation}) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRepass] = useState('');
  const newAccount = {
    username: '',
    password: '',
  };
  const infor = {
    username: '',
    firstname: '',
    lastName: '',
    email: '',
    dob: '11/11/2011',
    gender: '',
    location: '',
  };
  const paymentInfor = {
    username: '',
    emailPaypal: '',
    bankName: '',
    yourName: '',
    cardNumber: '',
    date: '11/11/2022',
    cvv: ''
  }
  const handleSignUp = () => {
    try {
      AsyncStorage.getItem('account').then(account => {
        const listAccount = JSON.parse(account);
        const check = listAccount.some(item => item.username === user);
        if (check) {
          Alert.alert('Thông báo', 'Tên tài khoản đã bị trùng!');
        } else {
          if (user !== '' && pass !== '' && rePass !== '') {
            if (pass !== rePass) {
              Alert.alert(
                'Thông báo',
                'Nhập lại mật khẩu và mật khẩu phải trùng khớp!',
              );
              return;
            } else {
              if (user.length >= 6 && pass.length >= 6) {
                newAccount.username = user;
                newAccount.password = pass;
                listAccount.push(newAccount);
                AsyncStorage.getItem('personalInfor').then(acc => {
                  const listInfor = JSON.parse(acc);
                  infor.username = user;
                  listInfor.push(infor);
                  AsyncStorage.setItem('personalInfor', JSON.stringify(listInfor));
                })
                AsyncStorage.getItem('paymentInfor').then(acc => {
                  const listPaymentInfor = JSON.parse(acc);
                  paymentInfor.username = user;
                  listPaymentInfor.push(paymentInfor);
                  AsyncStorage.setItem('paymentInfor', JSON.stringify(listPaymentInfor));
                })
                AsyncStorage.setItem('account', JSON.stringify(listAccount));
                Alert.alert('Thông báo', 'Đăng ký tài khoản thành công!');
                navigation.navigate('SignIn');
              } else {
                Alert.alert(
                  'Thông báo',
                  'Tên đăng nhập và mật khẩu phải có ít nhất 6 ký tự!',
                );
              }
            }
          } else {
            Alert.alert('Thông báo', 'Hãy nhập đầy đủ các trường!');
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={SignInScreenStyles.container}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Image
          style={SignInScreenStyles.backButton}
          source={require('../Components/Images/backButton.png')}
        />
      </TouchableOpacity>
      <Text style={SignInScreenStyles.title02}>Sign Up</Text>
      <InputCommon
        value={user}
        onChangeText={setUser}
        inputType={InputCommonStyles.usernameSignUp}
        placeholderValue={'Enter Username'}
      />
      <InputCommon
        value={pass}
        onChangeText={setPass}
        inputType={InputCommonStyles.passwordSignUp}
        placeholderValue={'Enter Password'}
        secureTextEntry={true}
      />
      <InputCommon
        value={rePass}
        onChangeText={setRepass}
        inputType={InputCommonStyles.confirmPasswordSignUp}
        placeholderValue={'Re-enter Password'}
        secureTextEntry={true}
      />
      <ButtonCommon
        buttonName={'Sign Up'}
        textButtonStyle={ButtonCommonStyles.textButton01}
        buttonStyle={ButtonCommonStyles.buttonType04}
        setActionType={handleSignUp}
      />
      <TouchableOpacity>
        <Text style={SignInScreenStyles.title03}>Forgot Password?</Text>
      </TouchableOpacity>
      <Footer />
    </View>
  );
}
