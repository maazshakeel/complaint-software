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
import HL from '../components/hr'
import { CheckBox, Input } from 'react-native-elements'
import { problems } from '../components/problems'
import ImagePick from '../components/ImagePick'
import { createComplaint } from '../../api/user.api'
import { fiveDigitNo } from '../utils/random-ticket-no'

// getting height and width of screen
const { width } = Dimensions.get('screen')

export default function ComplaintDetails({ route, navigation }: any) {


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

    console.log(isChecked1, isChecked2, isChecked3, isChecked4)
    console.log(fiveDigitNo())
    console.log(photoPath)
    navigation.navigate('Dashboard')
    return
    /*const ticketNo = fiveDigitNo()
    const res = await createComplaint(type, ticketNo, details, urgentComplaint)
    console.log(res.data)

    navigation.navigate('Dashboard') */
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
