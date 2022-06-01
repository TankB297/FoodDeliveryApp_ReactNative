import {View, Text, Image} from 'react-native';
import React from 'react';
import SingleFoodDetailStyles from './SingleFoodDetailStyles';

export default function SingleFoodDetail() {
  return (
    <View style={SingleFoodDetailStyles.foodDetailContainer}>
      <View>
        <Image
          style={SingleFoodDetailStyles.foodDetailImage}
          source={require('../Images/foodNearMe.png')}
        />
      </View>
      <View style={SingleFoodDetailStyles.foodDetailContentContainer01}>
        <Text style={SingleFoodDetailStyles.foodDetailTitle}>
          Dogmie jagong tutung
        </Text>
        <View style={SingleFoodDetailStyles.foodDetailContentContainer02}>
          <View style={SingleFoodDetailStyles.foodDetailContentContainer03}>
            <Image
              style={SingleFoodDetailStyles.foodDetailLike01}
              source={require('../Images/likeDetail.png')}
            />
            <Text style={SingleFoodDetailStyles.foodDetailContent}>
              999+ |{' '}
            </Text>
            <Image
              style={SingleFoodDetailStyles.foodDetailLike01}
              source={require('../Images/dislikeDetail.png')}
            />
            <Text style={SingleFoodDetailStyles.foodDetailContent}>93+</Text>
          </View>
          <View style={SingleFoodDetailStyles.foodDetailContentContainer03}>
            <Image
              style={SingleFoodDetailStyles.foodDetailDislike}
              source={require('../Images/dislikeDetail02.png')}
            />
            <Image
              style={SingleFoodDetailStyles.foodDetailLike}
              source={require('../Images/likeDetail02.png')}
            />
          </View>
        </View>
        <Text style={SingleFoodDetailStyles.foodDetailPrice}>$99.99</Text>
      </View>
    </View>
  );
}
