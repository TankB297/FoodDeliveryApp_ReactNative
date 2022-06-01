import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import ChangePassScreenStyles from './ChangePassScreenStyles';
import SignInScreenStyles from './SignInScreenStyles';
import InputCommon from '../Components/InputCommon';
import OrderScreenStyles from './OrderScreenStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ChangePassScreen({navigation}) {
  const [orderPass, setOrderPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmNewPass, setConfirmNewPass] = useState('');
  const handleChangePassword = () => {
    AsyncStorage.getItem('nowAccount').then(acc => {
      const nowUserList = JSON.parse(acc);
      if (nowUserList.password !== orderPass) {
        Alert.alert('Thông báo', 'Mật khẩu cũ không chính xác!');
      } else {
        if (newPass !== confirmNewPass) {
          Alert.alert('Thông báo', 'Mật khẩu mới phải nhập trùng khớp!');
        } else {
          AsyncStorage.getItem('account').then(account => {
            const listAccount = JSON.parse(account);
            const newAccount = {
              username: nowUserList.username,
              password: newPass
            }
            const check = listAccount.some((item, index) => {
              if(item.username === nowUserList.username){
                listAccount[index] = newAccount
                return true;
              }
              return false
            });
            if(check){
              AsyncStorage.setItem('account', JSON.stringify(listAccount))
              Alert.alert('Thông báo', 'Thay đổi mật khẩu thành công!');
            }
          });
        }
      }
    });
  };
  return (
    <View style={ChangePassScreenStyles.container}>
      <View style={ChangePassScreenStyles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MainProfile')}>
          <Image
            style={SignInScreenStyles.backButton}
            source={require('../Components/Images/backButton.png')}
          />
        </TouchableOpacity>
        <Text style={ChangePassScreenStyles.headerContent}>
          Change Password
        </Text>
      </View>
      <View style={ChangePassScreenStyles.inputContainer}>
        <Text style={ChangePassScreenStyles.inputLabel}>
          Enter Old Password
        </Text>
        <InputCommon
          style={ChangePassScreenStyles.inputPassword}
          value={orderPass}
          onChangeText={txt => setOrderPass(txt)}
          placeholderValue={'Password'}
          secureTextEntry={true}
        />
        <Text style={ChangePassScreenStyles.inputLabel}>
          Create New Password
        </Text>
        <InputCommon
          style={ChangePassScreenStyles.inputPassword}
          value={newPass}
          onChangeText={txt => setNewPass(txt)}
          placeholderValue={'Enter new password'}
          secureTextEntry={true}
        />
        <InputCommon
          style={ChangePassScreenStyles.inputPassword}
          value={confirmNewPass}
          onChangeText={txt => setConfirmNewPass(txt)}
          placeholderValue={'Re-enter new password'}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity onPress={handleChangePassword}>
        <View style={OrderScreenStyles.orderButton}>
          <Text style={OrderScreenStyles.orderButtonContent}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
