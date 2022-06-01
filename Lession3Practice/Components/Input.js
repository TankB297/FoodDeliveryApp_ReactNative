import {View, Text, TextInput, Alert, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import InputStyles from './InputStyle.scss';

export default function Input() {
  const onPress = () => {
    Alert.alert('Thông báo', 'Đăng nhập thành công');
  };
  return (
    <View style={InputStyles.container}>
      <View style={InputStyles.containerInput}>
        <Text style={InputStyles.labelInput}>Username</Text>
        <TextInput
          style={InputStyles.inputText}
          placeholder={'Username...'}></TextInput>
      </View>
      <View style={InputStyles.containerInput}>
        <Text style={InputStyles.labelInput}>Password</Text>
        <TextInput
          style={InputStyles.inputText}
          placeholder={'Password...'}></TextInput>
      </View>
      <TouchableOpacity onPress={onPress} style={InputStyles.submitButton}>
        <Text style={InputStyles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
