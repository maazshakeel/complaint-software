import { View, Dimensions, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

// getting height and width of screen
const { height, width } = Dimensions.get('screen')

export default function ComplaintConfirmation({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FAF9FE' }}>
      <View style={{ top: 116, alignItems: 'center' }}>
        <Image source={require('../assets/party-poper.png')} />
      </View>
      <Text
        style={{
          color: '#2F5FE3',
          top: 130,
          fontSize: 19,
          alignSelf: 'center'
        }}
      >
        Complaint succesfully raised
      </Text>
      <Text
        style={{
          color: '#747374',
          top: 140,
          alignSelf: 'center'
        }}
      >
        We want you to sit back and relax. Resolving your complaint will be our
        top priority.
      </Text>
      <Text style={{ fontSize: 22, alignSelf: 'center', top: 165 }}>
        Would you like to rate your experience?
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          top: 180,
          alignSelf: 'center'
        }}
      >
        <Icon name="star" size={30} />
        <Icon name="star" size={30} />
        <Icon name="star" size={30} />
        <Icon name="star" size={30} />
        <Icon name="star" size={30} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Complaint Confirmation')}
        style={{
          backgroundColor: '#2F5FE3',
          width: width - 47,
          height: 54,
          top: 220,
          alignSelf: 'center',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 30,
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Text style={{ fontSize: 20, color: '#FFF' }}>
          Rate us on Play Store
        </Text>
      </TouchableOpacity>
      <View
        style={{
          bottom: 22,
          position: 'absolute',
          alignItems: 'center',
          marginLeft: 10
        }}
      >
        <TouchableOpacity
          style={{
            width: width - 37,
            height: 54,
            marginLeft: 10,
            borderColor: '#495DC3',
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6
          }}
        >
          <Text style={{ fontSize: 15, color: '#495DC3' }}>
            Review or Edit complaint
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
