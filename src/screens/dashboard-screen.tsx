// imports
import { StatusBar } from 'native-base'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome5'

import HL from '../components/hr'
import ComplaintList from '../components/ComplaintLists'
import client from '../../api/api'

export default function Dashbaord(): JSX.Element {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  // navigation
  const navigation = useNavigation()

  const logOut = async () => {
    await AsyncStorage.clear()
    navigation.navigate('Login')
  }

  const getClientData = async () => {
    const res = await client.get('/api/client_data', {
      headers: {
        'x-access-token': await AsyncStorage.getItem('user_token')
      }
    })
    setFullName(`${res.data.firstName} ${res.data.lastName}`)
    setEmail(`${res.data.email}`)
    console.log(res.data)
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
        <Text style={{ fontSize: 27, marginRight: 21 }}>{fullName}{email}</Text>
        <TouchableOpacity onPress={logOut}>
          <Text>
            Sign Out
          </Text>
        </TouchableOpacity>
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
