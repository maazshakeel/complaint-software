import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Dimensions
} from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/colors'
import { useNavigation } from '@react-navigation/native'
import HL from '../components/hr'
import { CheckBox, Input } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { problems } from '../components/problems'
import * as ImagePicker from 'expo-image-picker'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ImagePick from '../components/ImagePick'
import { createComplaint } from '../../api/user.api'
import client from '../../api/api'

// getting height and width of screen
const { height, width } = Dimensions.get('screen')

export default function ComplaintDetails({ route, navigation }) {


  // state
  const [isChecked1, setIsChecked1] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)
  const [isChecked3, setIsChecked3] = useState(false)
  const [isChecked4, setIsChecked4] = useState(false)
  // urgent complaint
  const [urgentComplaint, setUrgentComplaint] = useState(false)

  // photo uri
  const [photoPath, setPhotoPath] = useState(null)

  const [details, setDetails] = useState(null)

  const { type } = route.params
  // Captlizing first letter
  const firstCh = type.charAt(0).toUpperCase() + type.slice(1)
  const complaintType = firstCh

  const onSubmit = async () => {

    const data = [
      {
        ticketNo: "12013",
        ComplaintCategory: [
          {
            id: "94db69bf-7d57-4217-a37d-a8b0b89438af",
            name: "Parking"
          }
        ],
        ComplaintStatus: [
          {
            id: "97d845bf-db40-4c7c-b5a6-72e530611bd5",
            whenRaised: "2022-07-26T17:16:10.591Z",
            isResolved: false,
            isClosed: false
          }
        ],
        ComplaintDetails: [
          {
            id: "6d0ec5ec-239d-464a-8a30-8f33af9e9438",
            complaintDetail: "Moiz complaint detail!!",
            complaintSelectedOptions: "Nothin, Option 2332",
            isUrgent: true
          }
        ],
        ComplaintType: [
          {
            id: "d138a3ae-cebe-458f-97f1-e5cb5707ba9e",
            type: "dunno"
          }
        ]
      },
    ]

    const res = await createComplaint()
    console.log(res.data)

    /* if (res.data.status === 'success') {

      navigation.navigate('Complaint Confirmation', {
        selectedOptions: [isChecked1, isChecked2, isChecked3, isChecked4],
        complaintDetail: details,
        complaintType: type,
        complaintStatus: {
          isResolved: false,
          isClosed: false,
        },
      })
    } else {
      Alert.alert("Hmm something is wrong")
    } */
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Text
          style={{ top: 103, fontSize: 21, color: '#BCB3BA', marginLeft: 10 }}
        >
          {complaintType}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ top: 103, marginRight: 10 }}
        >
          <Text style={{ fontSize: 20, color: '#2F5FE3' }}>Change</Text>
        </TouchableOpacity>
      </View>
      <View style={{ top: 113 }}>
        <HL width={10} />
      </View>
      <ScrollView style={{ top: 113 }}>
        <Text style={{ fontSize: 22, left: 13, paddingTop: 10 }}>
          Tell us your problem?
        </Text>
        <Text
          style={{
            fontSize: 15,
            left: 15,
            paddingTop: 3,
            color: '#C6C2C5'
          }}
        >
          You can select one or more options.
        </Text>
        <CheckBox
          title={problems.plumbing[0]}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={isChecked1}
          onPress={() => setIsChecked1(!isChecked1)}
        />
        <CheckBox
          title={problems.plumbing[1]}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={isChecked2}
          onPress={() => setIsChecked2(!isChecked2)}
        />
        <CheckBox
          title={problems.plumbing[2]}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={isChecked3}
          onPress={() => setIsChecked3(!isChecked3)}
        />
        <CheckBox
          title={problems.plumbing[3]}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={isChecked4}
          onPress={() => setIsChecked4(!isChecked4)}
        />
        <View style={{ paddingTop: 10 }}>
          <HL width={10} />
        </View>
        <Text style={{ fontSize: 22, left: 13, paddingTop: 10 }}>
          Add Details
        </Text>
        <Text
          style={{
            fontSize: 15,
            left: 15,
            paddingTop: 3,
            color: '#C6C2C5'
          }}
        >
          Details you think is important for us to know.
        </Text>
        <Input
          placeholder="Details"
          leftIcon={{ type: 'font-awesome', name: 'info' }}
          onChangeText={value => setDetails({ details: value })}
        />
        <View style={{ paddingBottom: 10 }}>
          <HL width={10} />
        </View>
        <Text style={{ fontSize: 22, left: 13, paddingTop: 10 }}>
          Add Photo
        </Text>
        <Text
          style={{
            fontSize: 15,
            left: 15,
            paddingTop: 3,
            color: '#C6C2C5'
          }}
        >
          Photos helps us to find best staff and loads for your needs as soon as
          possible.
        </Text>
        <ImagePick />

        <View style={{ paddingBottom: 10 }}>
          <HL width={10} />
        </View>

        <Text style={{ fontSize: 22, left: 13, paddingTop: 10 }}>
          Preffered slots for resolution?
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 35
          }}
        >
          <TouchableOpacity
            style={{
              width: 145,
              height: 54,
              marginLeft: 20,
              borderColor: '#495DC3',
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 6
            }}
          >
            <Text style={{ fontSize: 15, color: '#495DC3' }}>
              7:00 - 11:00 AM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 145,
              height: 54,
              borderColor: '#495DC3',
              borderWidth: 1,
              alignItems: 'center',
              marginRight: 20,
              justifyContent: 'center',
              borderRadius: 6
            }}
          >
            <Text style={{ fontSize: 15, color: '#495DC3' }}>
              4:00 - 7:00 PM
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 20 }}>
          <HL width={10} />
        </View>
        <CheckBox
          title="Is the complaint urgent?"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={urgentComplaint}
          onPress={() => setUrgentComplaint(!urgentComplaint)}
        />
        <View style={{ paddingTop: 10, paddingBottom: 40 }}>
          <HL width={10} />
        </View>
        <View
          style={{ alignItems: 'center', paddingTop: 15, paddingBottom: 15 }}
        >
          <TouchableOpacity
            onPress={onSubmit}
            style={{
              backgroundColor: '#2F5FE3',
              width: width - 47,
              height: 54,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 30,
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <Text style={{ fontSize: 20, color: '#FFF', marginRight: 7 }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: `#${colors.backgroundColor}`
    flex: 1,
    backgroundColor: 'green'
  }
})
