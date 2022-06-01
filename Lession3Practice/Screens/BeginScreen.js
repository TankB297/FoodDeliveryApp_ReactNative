import { View, Text, Image } from 'react-native'
import React from 'react'
import ButtonCommon from '../Components/ButtonCommon'
import BeginScreenStyles from './BeginScreenStyles'
import ButtonCommonStyles from '../Components/ButtonCommonStyles'
import Footer from '../Components/Footer'


export default function BeginScreen({navigation}) {
  return (
    <View style={BeginScreenStyles.container}>
      <Image style={BeginScreenStyles.logoStyle} source={require('../Components/Images/hamburger01.png')} />
      <ButtonCommon setActionType={() => navigation.navigate('SignIn')} buttonName={'Sign in'} textButtonStyle={ButtonCommonStyles.textButton01} buttonStyle={ButtonCommonStyles.buttonType01} />
      <ButtonCommon setActionType={() => navigation.navigate('SignUp')} buttonName={'Sign up'} textButtonStyle={ButtonCommonStyles.textButton02} buttonStyle={ButtonCommonStyles.buttonType02} />
      <Footer />
    </View>
  )
}