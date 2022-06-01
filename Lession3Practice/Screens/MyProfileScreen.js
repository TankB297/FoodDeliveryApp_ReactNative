import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MyProfileScreenStyles from './MyProfileScreenStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyProfileScreen({navigation}) {
  const signOut = () => {
    AsyncStorage.removeItem('nowAccount');
    navigation.navigate('Begin');
  }
  return (
    <View style={MyProfileScreenStyles.container}>
      <View style={MyProfileScreenStyles.avatarContainer}>
        <Image
          style={MyProfileScreenStyles.avatar}
          source={require('../Components/Images/ProfileImage.png')}
        />
        <Text style={MyProfileScreenStyles.avatarName}>Itoh</Text>
        <Text style={MyProfileScreenStyles.avatarBio}>+1 11229382748</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ChooseCountry')}>
        <View style={MyProfileScreenStyles.profileContentContainter}>
          <Text style={MyProfileScreenStyles.profileContent}>
            My Profile
          </Text>
          <Image source={require('../Components/Images/rightArrow.png')} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ChangePass')}>
        <View style={MyProfileScreenStyles.profileContentContainter}>
          <Text style={MyProfileScreenStyles.profileContent}>
            Change Password
          </Text>
          <Image source={require('../Components/Images/rightArrow.png')} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
        <View style={MyProfileScreenStyles.profileContentContainter}>
          <Text style={MyProfileScreenStyles.profileContent}>
            Payment Settings
          </Text>
          <Image source={require('../Components/Images/rightArrow.png')} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyVoucher')}>
        <View style={MyProfileScreenStyles.profileContentContainter}>
          <Text style={MyProfileScreenStyles.profileContent}>My Voucher</Text>
          <Image source={require('../Components/Images/rightArrow.png')} />
        </View>
      </TouchableOpacity>
      <View style={MyProfileScreenStyles.profileContentContainter}>
        <Text style={MyProfileScreenStyles.profileContent}>Notification</Text>
        <Image source={require('../Components/Images/rightArrow.png')} />
      </View>
      <View style={MyProfileScreenStyles.profileContentContainter}>
        <Text style={MyProfileScreenStyles.profileContent}>About Us</Text>
        <Image source={require('../Components/Images/rightArrow.png')} />
      </View>
      <View style={MyProfileScreenStyles.profileContentContainter}>
        <Text style={MyProfileScreenStyles.profileContent}>Contact Us</Text>
        <Image source={require('../Components/Images/rightArrow.png')} />
      </View>
      <TouchableOpacity onPress={signOut}>
        <View style={MyProfileScreenStyles.profileButton}>
          <Text style={MyProfileScreenStyles.profileButtonContent}>
            Sign Out
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
