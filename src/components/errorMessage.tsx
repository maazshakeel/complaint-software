import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface IErrorMessageProps {
  message: string
}

export default function ErrorMessage({ message }: IErrorMessageProps) {
  return (
    <View style={styles.errorMessageContainer}>
      <Text style={{ color: '#705154' }}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  errorMessageContainer: {
    height: 75,
    width: 300,
    padding: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#90585b',
    borderWidth: 2.5,
    backgroundColor: '#fff3f7'
  }
})
