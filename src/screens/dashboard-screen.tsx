import { ScrollView, StatusBar } from 'native-base'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, Text } from 'react-native-elements'
import HL from '../components/hr'
import Icon from 'react-native-vector-icons/FontAwesome5'
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
      <View style={styles.filterSectionContainer}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <Text
            h5
            style={{ paddingLeft: 10, color: '#766C6D', paddingRight: 10 }}
          >
            Showing:
          </Text>
          <Text style={{ color: '#554949' }}>All Categories</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <Icon
            name="stream"
            size={14}
            style={{ paddingRight: 10, paddingTop: 3 }}
          />
          <Text style={{ paddingRight: 10 }}>Filters</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    marginTop: 100,
    alignItems: 'center',
    display: 'flex',
    marginBottom: 35
  },
  filterSectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  }
})
