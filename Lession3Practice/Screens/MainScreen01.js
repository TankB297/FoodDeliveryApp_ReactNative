import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputCommon from '../Components/InputCommon';
import InputCommonStyles from '../Components/InputCommonStyles';
import MainScreen01Styles from './MainScreen01Styles';
import SingleFoodType from '../Components/FoodType/SingleFoodType';
import SingleFood from '../Components/FoodList/SingleFood';
import SingleFoodNearMe from '../Components/FoodNearMe/SingleFoodNearMe';

export default function MainScreen01({navigation, route}) {
  const [foodTypeList, setFoodTypeList] = useState([
    {
      id: 1,
      image: require('../Components/Images/CoffeeCup.png'),
      title: 'Drink',
      isSelected: false,
    },
    {
      id: 2,
      image: require('../Components/Images/Burger01.png'),
      title: 'Food',
      isSelected: false,
    },
    {
      id: 3,
      image: require('../Components/Images/PieceOfCake.png'),
      title: 'Cake',
      isSelected: false,
    },
    {
      id: 4,
      image: require('../Components/Images/Chips.png'),
      title: 'Snack',
      isSelected: false,
    },
  ]);
  const [foodList, setFoodList] = useState([
    [
      {
        id: 1,
        foodName: 'Burgers',
        price: '$99.00',
        image: require('../Components/Images/food01.png'),
        like: 100,
        dislike: 10,
      },
      {
        id: 2,
        foodName: 'Pizza',
        price: '$99.00',
        image: require('../Components/Images/food02.png'),
        like: 100,
        dislike: 10,
      },
    ],
    [
      {
        id: 4,
        foodName: 'BBQ',
        price: '$99.00',
        image: require('../Components/Images/food03.png'),
        like: 100,
        dislike: 10,
      },
      {
        id: 3,
        foodName: 'Fruit',
        price: '$99.00',
        image: require('../Components/Images/food04.png'),
        like: 100,
        dislike: 10,
      },
    ],
    [
      {
        id: 5,
        foodName: 'Sushi',
        price: '$99.00',
        image: require('../Components/Images/food05.png'),
        like: 100,
        dislike: 10,
      },
      {
        id: 6,
        foodName: 'Noodle',
        price: '$99.00',
        image: require('../Components/Images/food06.png'),
        like: 100,
        dislike: 10,
      },
    ],
  ]);
  const renderItem = ({item}) => (
    <SingleFoodType id={item.id} image={item.image} title={item.title} />
  );
  const renderItem02 = ({item, index}) => <SingleFood item={item} />;
  return (
    <ScrollView style={MainScreen01Styles.mainContainer}>
      <View style={MainScreen01Styles.searchContainer}>
        <Image
          style={MainScreen01Styles.searchIcon}
          source={require('../Components/Images/SearchIcon.png')}
        />
        <InputCommon
          style={InputCommonStyles.searchInput}
          placeholderValue={'Search...'}
        />
      </View>
      <View style={MainScreen01Styles.locationContainer}>
        <Image
          style={MainScreen01Styles.locationIcon}
          source={require('../Components/Images/Location.png')}
        />
        <Text style={MainScreen01Styles.locationContent}>
          9 West 46 Th Street, New York City
        </Text>
      </View>
      <FlatList
        data={foodTypeList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled={true}
        horizontal={true}
        style={MainScreen01Styles.foodTypeListContainer}
      />
      <View style={MainScreen01Styles.foodMenuContainer}>
        <Text style={MainScreen01Styles.foodMenuTitle01}>Food Menu</Text>
        <TouchableOpacity style={MainScreen01Styles.foodMenuTitle02}>
          <Text>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={foodList}
        renderItem={renderItem02}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        scrollEnabled={true}
        style={MainScreen01Styles.foodListContainer}
      />
      <View style={MainScreen01Styles.foodMenuContainer}>
        <Text style={MainScreen01Styles.foodMenuTitle01}>Near me</Text>
        <TouchableOpacity style={MainScreen01Styles.foodMenuTitle02}>
          <Text>View all</Text>
        </TouchableOpacity>
      </View>
      <SingleFoodNearMe />
      <SingleFoodNearMe />
    </ScrollView>
  );
}
