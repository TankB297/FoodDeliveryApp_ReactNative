import { View, Text, TouchableOpacity, Button, Image } from 'react-native'
import React from 'react'
import FooterStyles from './FooterStyles'

export default function Footer({buttonName, buttonStyle}) {
  return (
    <View>
      <View style={FooterStyles.borderFooter} />
        <Text style={FooterStyles.textFooter}>Or connect with</Text>
        <Image style={FooterStyles.imgFooter} source={require('./Images/imgFooter.png')} />
        <Image style={FooterStyles.fbImg} source={require('./Images/Group.png')} />
        <Image style={FooterStyles.ggImg} source={require('./Images/Vector.png')} />
    </View>
  )
}