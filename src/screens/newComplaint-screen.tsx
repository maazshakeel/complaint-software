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

const { height, width } = Dimensions.get('screen')

export default function NewComplaint() {
  return (
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
      </View>
    </View>
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
