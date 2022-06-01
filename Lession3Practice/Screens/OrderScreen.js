import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import SingleFoodDetail from '../Components/FoodDetail/SingleFoodDetail';
import SignInScreenStyles from './SignInScreenStyles';
import OrderScreenStyles from './OrderScreenStyles';

export default function OrderScreen() {
  return (
    <View style={OrderScreenStyles.orderScreenContainer}>
      <View style={OrderScreenStyles.headerContainer}>
        <Text style={OrderScreenStyles.headerContent}>Your Order</Text>
      </View>
      <View style={OrderScreenStyles.itemContainer}>
        <SingleFoodDetail />
        <SingleFoodDetail />
        <SingleFoodDetail />
      </View>
      <TouchableOpacity>
        <View style={OrderScreenStyles.orderButton}>
          <Text style={OrderScreenStyles.orderButtonContent}>Send</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
