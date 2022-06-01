import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function InputCommon({placeholderValue, inputType, ...rest}) {
  return (
    <View>
      <TextInput style={inputType} placeholder={placeholderValue} {...rest} />
    </View>
  )
}