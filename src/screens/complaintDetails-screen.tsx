import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../assets/colors'
import { useNavigation } from '@react-navigation/native'

export default function ComplaintDetails({ route, navigation }) {
  const { type } = route.params
  // Captlizing first letter
  const firstCh = type.charAt(0).toUpperCase() + type.slice(1)
  const complaintType = firstCh
  return (
    <View style={styles.container}>
      <Text style={{ top: 103, fontSize: 21, color: '#BCB3BA' }}>{type}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#${colors.backgroundColor}`
  }
})
