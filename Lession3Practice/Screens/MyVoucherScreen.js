import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import MyVoucherScreenStyles from './MyVoucherScreenStyles';
import SignInScreenStyles from '../Screens/SignInScreenStyles';

export default function MyVoucherScreen({navigation}) {
  return (
    <View style={MyVoucherScreenStyles.container}>
      <View style={MyVoucherScreenStyles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MainProfile')}>
          <Image
            style={SignInScreenStyles.backButton}
            source={require('../Components/Images/backButton.png')}
          />
        </TouchableOpacity>
        <Text style={MyVoucherScreenStyles.headerContent}>My Voucher</Text>
      </View>
      <View style={MyVoucherScreenStyles.itemContainer}>
        <View style={MyVoucherScreenStyles.mainLogoContainer}>
          <Image source={require('../Components/Images/Voucher.png')} />
        </View>
        <View style={MyVoucherScreenStyles.contentContainer}>
          <Text style={MyVoucherScreenStyles.title}>
            Sale off 30% for Pizza
          </Text>
          <View style={MyVoucherScreenStyles.timeContainer}>
            <Image
              style={MyVoucherScreenStyles.timeIcon}
              source={require('../Components/Images/WallClock.png')}
            />
            <Text style={MyVoucherScreenStyles.timeContent}>
              Apr 10 - Apr 30
            </Text>
          </View>
          <Text style={MyVoucherScreenStyles.timeContent02}>11 days left</Text>
        </View>
        <View style={MyVoucherScreenStyles.checkContainer}>
          <View style={MyVoucherScreenStyles.checkLogoContainer}>
            <Image
              style={MyVoucherScreenStyles.checkLogo}
              source={require('../Components/Images/Check.png')}
            />
          </View>
        </View>
      </View>
      <View style={MyVoucherScreenStyles.itemContainer02}>
        <View style={MyVoucherScreenStyles.mainLogoContainer}>
          <Image source={require('../Components/Images/Voucher.png')} />
        </View>
        <View style={MyVoucherScreenStyles.contentContainer}>
          <Text style={MyVoucherScreenStyles.title}>
            Sale off 30% for Pizza
          </Text>
          <View style={MyVoucherScreenStyles.timeContainer}>
            <Image
              style={MyVoucherScreenStyles.timeIcon}
              source={require('../Components/Images/WallClock.png')}
            />
            <Text style={MyVoucherScreenStyles.timeContent}>
              Apr 10 - Apr 30
            </Text>
          </View>
          <Text style={MyVoucherScreenStyles.timeContent02}>11 days left</Text>
        </View>
        <View style={MyVoucherScreenStyles.checkContainer}>
          <View style={MyVoucherScreenStyles.checkLogoContainer02}>
            <Image
              style={MyVoucherScreenStyles.checkLogo}
              source={require('../Components/Images/Check.png')}
            />
          </View>
        </View>
      </View>
      <View style={MyVoucherScreenStyles.itemContainer02}>
        <View style={MyVoucherScreenStyles.mainLogoContainer}>
          <Image source={require('../Components/Images/Voucher.png')} />
        </View>
        <View style={MyVoucherScreenStyles.contentContainer}>
          <Text style={MyVoucherScreenStyles.title}>
            Sale off 30% for Pizza
          </Text>
          <View style={MyVoucherScreenStyles.timeContainer}>
            <Image
              style={MyVoucherScreenStyles.timeIcon}
              source={require('../Components/Images/WallClock.png')}
            />
            <Text style={MyVoucherScreenStyles.timeContent}>
              Apr 10 - Apr 30
            </Text>
          </View>
          <Text style={MyVoucherScreenStyles.timeContent02}>11 days left</Text>
        </View>
        <View style={MyVoucherScreenStyles.checkContainer}>
          <View style={MyVoucherScreenStyles.checkLogoContainer02}>
            <Image
              style={MyVoucherScreenStyles.checkLogo}
              source={require('../Components/Images/Check.png')}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <View style={MyVoucherScreenStyles.orderButton}>
          <Text style={MyVoucherScreenStyles.orderButtonContent}>Send</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
