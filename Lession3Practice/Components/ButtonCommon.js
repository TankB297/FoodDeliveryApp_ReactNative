import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'

export default function ButtonCommon({ buttonName, buttonStyle, textButtonStyle, setActionType}) {
    return (
        <View>
            <TouchableOpacity onPress={setActionType} style={buttonStyle}>
                <Text style={textButtonStyle}>{buttonName}</Text>
            </TouchableOpacity>
        </View>
    )
}