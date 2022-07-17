import { StatusBar } from 'native-base'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, Text } from 'react-native-elements'
import HL from '../components/hr'
// import { Avatar } from '@rneui/themed'

export default function Dashbaord() {
  return (
    // @ts-ignore
    <View>
      <StatusBar barStyle="dark-content" />
      {/* @ts-ignore */}
      <View style={styles.profileContainer}>
        <Text h3 style={{ paddingBottom: 20 }}>
          Profile
        </Text>
      </View>
      <HL />
    </View>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    marginTop: 100,
    alignItems: 'center',
    display: 'flex',
    marginBottom: 35
  }
})
