// imports
import { ScrollView, StatusBar } from 'native-base'
import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Header, Text } from 'react-native-elements'
import HL from '../components/hr'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ComplaintList from '../components/ComplaintLists'
import Circle from '../components/Circle'
import { useNavigation } from '@react-navigation/native'

export default function Dashbaord() {
  // navigation
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      {/* Profile - Pending */}
      <View style={styles.profileContainer}>
        <Text h3 style={{ paddingBottom: 20 }}>
          Profile
        </Text>
      </View>
      {/* Hover line */}
      <HL />
      {/* Filter */}
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
        {/* Whenever user would click, user will be able to filter somehow */}
        <TouchableOpacity
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
        </TouchableOpacity>
      </View>
      <ComplaintList />
      {/* Whenever user will try to create a new complaint we'll navigate to another screen */}
      <TouchableOpacity
        onPress={() => navigation.navigate('New Complaint')}
        style={{ position: 'absolute', right: 12, bottom: 12 }}
      >
        <Image source={require('../assets/edit-icon.png')} />
      </TouchableOpacity>
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
