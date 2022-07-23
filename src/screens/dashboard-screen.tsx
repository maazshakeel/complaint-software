// imports
import { ScrollView, StatusBar } from 'native-base'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Header, Text } from 'react-native-elements'
import HL from '../components/hr'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ComplaintList from '../components/ComplaintLists'
import Circle from '../components/Circle'
import { useNavigation } from '@react-navigation/native'
import client from '../../api/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Dashbaord(): JSX.Element {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  // navigation
  const navigation = useNavigation()

  const getClientData = async () => {
    const response = await client.get('/api/client_data', { token: await AsyncStorage.getItem('user_token') })
    setEmail(`${response.data.email}`)
    setFullName(`${response.data.firstName} ${response.data.lastName}`)
    return
  }

  useEffect(() => {
    getClientData()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      {/* Profile - Pending */}
      <View style={styles.profileContainer}>
        <Image source={require('../assets/static-profile.png')} />
        <Text style={{ fontSize: 27, marginRight: 21 }}>{fullName}</Text>
      </View>
      {/* Hover line */}
      <HL width={1} />
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
      <ComplaintList email={email} />
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
    marginTop: 75,
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 35
  },
  filterSectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  }
})
