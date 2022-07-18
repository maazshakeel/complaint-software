import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/colors'
import { useNavigation } from '@react-navigation/native'
import HL from '../components/hr'
import { CheckBox, Input } from 'react-native-elements'
import { problems } from '../components/problems'
import * as ImagePicker from 'expo-image-picker'
import Icon from 'react-native-vector-icons/FontAwesome5'

// getting height and width of screen
const { height, width } = Dimensions.get('screen')

export default function ComplaintDetails({ route, navigation }) {
  // state
  const [isChecked1, setIsChecked1] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)
  const [isChecked3, setIsChecked3] = useState(false)
  const [isChecked4, setIsChecked4] = useState(false)

  const [details, setDetails] = useState('')

  const { type } = route.params
  // Captlizing first letter
  const firstCh = type.charAt(0).toUpperCase() + type.slice(1)
  const complaintType = firstCh
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
        <TouchableOpacity style={{ paddingTop: 10 }}>
          <View
            style={{
              borderColor: '#000',
              borderWidth: 3,
              borderRadius: 10,
              borderStyle: 'dotted',
              width: width - 37,
              alignSelf: 'center',
              height: 127
            }}
          >
            <View
              style={{
                alignItems: 'center',
                paddingTop: 35
              }}
            >
              <Icon name="images" size={50} />
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ height: 200 }} />
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
