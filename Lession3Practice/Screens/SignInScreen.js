import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, Alert} from 'react';
import SignInScreenStyles from './SignInScreenStyles';
import Footer from '../Components/Footer';
import InputCommon from '../Components/InputCommon';
import InputCommonStyles from '../Components/InputCommonStyles';
import ButtonCommon from '../Components/ButtonCommon';
import ButtonCommonStyles from '../Components/ButtonCommonStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignInScreen({navigation}) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const handleSaveNowUser = () => {
    const saveList = {}
    saveList['username'] = user
    saveList['password'] = pass
    AsyncStorage.setItem('nowAccount', JSON.stringify(saveList));
  }
  const handleSignIn = () => {
    try {
      AsyncStorage.getItem('account').then(account => {
        const listAccount = JSON.parse(account);
        const check = listAccount.some(
          item => item.username === user && item.password === pass
        );
        if (check) {
          handleSaveNowUser()
          navigation.navigate('Tab');
        } else {
          alert('Tài khoản hoặc mật khẩu sai!');
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
      <Text style={SignInScreenStyles.title}>Sign In</Text>
      <InputCommon
        value={user}
        onChangeText={txt => setUser(txt)}
        placeholderValue={'Username'}
        inputType={InputCommonStyles.userName}
      />
      <InputCommon
        value={pass}
        onChangeText={txt => setPass(txt)}
        placeholderValue={'Password'}
        inputType={InputCommonStyles.password}
        secureTextEntry={true}
      />
      <ButtonCommon
        buttonName={'Sign in'}
        textButtonStyle={ButtonCommonStyles.textButton01}
        buttonStyle={ButtonCommonStyles.buttonType03}
        setActionType={handleSignIn}
      />
      <TouchableOpacity>
        <Text style={SignInScreenStyles.linkForgotPassword}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <Footer />
    </View>
  );
}

