// imports
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native'
import React from 'react'
import ProblemCard from '../components/problemCard'
import Icon from 'react-native-vector-icons/FontAwesome5'

// getting height and width of screen
const { height, width } = Dimensions.get('screen')

export default function NewComplaint() {
  return (
    <>
      {/* container */}
      <View style={styles.container}>
        <Text style={styles.textHeading}>
          Choose the category under which your complaint falls.
        </Text>
        <View
          style={{
            top: 140,
            display: 'flex',
            marginLeft: 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}
        >
          <TouchableOpacity>
            <ProblemCard backcolor="#FFEFE0">
              <Image source={require('../assets/cleaning.png')} />
              <Text style={{ color: '#F1D1A8', fontSize: 13 }}>Cleaning</Text>
            </ProblemCard>
          </TouchableOpacity>
          <TouchableOpacity>
            <ProblemCard backcolor="#F0F8FA">
              <Image source={require('../assets/Electrical.png')} />
              <Text style={{ color: '#9ACFD4', fontSize: 13 }}>Electrical</Text>
            </ProblemCard>
          </TouchableOpacity>
          <TouchableOpacity>
            <ProblemCard backcolor="#FFEFE0">
              <Image source={require('../assets/plumbing-icon.png')} />
              <Text style={{ color: '#F1D1A8', fontSize: 13 }}>Plumbing</Text>
            </ProblemCard>
          </TouchableOpacity>
          <TouchableOpacity>
            <ProblemCard backcolor="#FEF6F6">
              <Image source={require('../assets/network.png')} />
              <Text style={{ color: '#FDCECE', fontSize: 13 }}>Network</Text>
            </ProblemCard>
          </TouchableOpacity>
          <TouchableOpacity>
            <ProblemCard backcolor="#F0F8FA">
              <Image source={require('../assets/parking.png')} />
              <Text style={{ color: '#9ACFD4', fontSize: 13 }}>Parking</Text>
            </ProblemCard>
          </TouchableOpacity>
          <TouchableOpacity>
            <ProblemCard backcolor="#F7F2F3">
              <Image source={require('../assets/security.png')} />
              <Text style={{ color: '#E1C6CC', fontSize: 13 }}>Security</Text>
            </ProblemCard>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: width / 2 - 55 }}>
            <ProblemCard backcolor="#F7F2F3">
              <Image source={require('../assets/three-dots.png')} />
              <Text style={{ color: '#E1C6CC', fontSize: 13 }}>Others</Text>
            </ProblemCard>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#2F5FE3',
            width: 311,
            height: 54,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 30,
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <Text style={{ fontSize: 18, color: '#FFF', marginRight: 7 }}>
            Next
          </Text>
          <Icon name="caret-right" size={27} />
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9FE',
    alignItems: 'center'
  },
  textHeading: {
    top: 113,
    fontSize: 19
  }
})
