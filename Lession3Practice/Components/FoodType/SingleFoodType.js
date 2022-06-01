import {View, Image, Text} from 'react-native';
import React from 'react';
import SingleFoodTypeStyles from './SingleFoodTypeStyles';

export default function SingleFoodType({image, title, id}) {
  return (
    <View style={SingleFoodTypeStyles.foodTypeContainer01}>
      <View style={id === 2 ? SingleFoodTypeStyles.foodTypeContainer03 : SingleFoodTypeStyles.foodTypeContainer02}>
        <Image source={image} />
      </View>
      <Text>{title}</Text>
    </View>
  );
}
