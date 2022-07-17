import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import Circle from './Circle'

const Row: FC = () => {
  return (
    <View style={styles.rowContainer}>
      <Circle />
    </View>
  )
}

const styles = StyleSheet.create({
  rowContainer: {
    padding: 10
  }
})
