import { View, Text, Image } from 'react-native'
import React from 'react'
import SingleFoodNearMeStyles from './SingleFoodNearMeStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SingleFoodNearMe() {
  return (
    <View style={SingleFoodNearMeStyles.foodNearMeContainer}>
      <View style={SingleFoodNearMeStyles.foodNearMeImageContainer}>
          <Image style={SingleFoodNearMeStyles.foodNearMeImage} source={require('../Images/foodNearMe.png')} />
      </View>
      <View style={SingleFoodNearMeStyles.foodNearMeContentContainer}>
          <View>
              <Text style={SingleFoodNearMeStyles.foodNearMeTitle}>Depur ljah Restaurant</Text>
          </View>
          <View style={SingleFoodNearMeStyles.foodNearMeLocationTimeContainer}>
              <Image source={require('../Images/location01.png')}/>
              <Text style={SingleFoodNearMeStyles.foodNearMeLocation}>13 th Street, 46 W 12th St, NY</Text>
          </View>
          <View style={SingleFoodNearMeStyles.foodNearMeLocationTimeContainer}>
              <Image source={require('../Images/time.png')} />
              <Text style={SingleFoodNearMeStyles.foodNearMeTime}>3 min - 1.1 km</Text>
          </View>
          <View style={SingleFoodNearMeStyles.foodNearMeRateContainer}>
            <Ionicons name={'star'} size={12} color={'yellow'} />
            <Ionicons name={'star'} size={12} color={'yellow'} />
            <Ionicons name={'star'} size={12} color={'yellow'} />
            <Ionicons name={'star'} size={12} color={'yellow'} />
          </View>
      </View>
    </View>
  )
}