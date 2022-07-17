import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ProblemCard from '../components/problemCard'

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
          <ProblemCard
            type="Electrical"
            backcolor="#F0F8FA"
            textcolor="#9ACFD4"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ProblemCard
            type="Plumbing"
            backcolor="#FFEFE0"
            textcolor="#F1D1A8"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ProblemCard type="Network" backcolor="#F7F2F3" textcolor="#E1C6CC" />
        </TouchableOpacity>
        <TouchableOpacity>
          <ProblemCard
            type="Hoticulture"
            backcolor="#FEF6F6"
            textcolor="#FDCECE"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ProblemCard
            type="Cleaning"
            backcolor="#FFEFE0"
            textcolor="#F1D1A8"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ProblemCard type="Parking" backcolor="#F7F2F3" textcolor="#E1C6CC" />
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
