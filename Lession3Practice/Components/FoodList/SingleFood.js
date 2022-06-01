import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import SingleFoodStyles from './SingleFoodStyles';

export default function SingleFood({item}) {
  const checkId1 = (id) => {
    if(id % 2 === 0){
      return SingleFoodStyles.foodContainer02
    }
    else{
      return SingleFoodStyles.foodContainer01
    }
  }
  return (
    <View>
      <View style={checkId1(item[0].id)}>
        <Text style={SingleFoodStyles.foodName}>{item[0].foodName}</Text>
        <Image source={item[0].image} />
      </View>
      <View style={checkId1(item[1].id)}>
        <Text style={SingleFoodStyles.foodName}>{item[1].foodName}</Text>
        <Image source={item[1].image} />
      </View>
    </View>
  );
}
