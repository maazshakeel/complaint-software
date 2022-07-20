import { View, Text } from 'react-native'
import React from 'react'

interface IErrorMessageProps {
  message: string
}

export default function ErrorMessage() {
  return (
    <View>
      <Text>errorMessage</Text>
    </View>
  )
}
