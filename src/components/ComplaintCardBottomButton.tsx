import React, { FC } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

const ComplaintCardBottomButton: FC = props => {
  if (!props.resolved) {
    return (
      <>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Withdraw Complaint')}
          style={{
            width: 145,
            height: 54,
            marginLeft: 10,
            borderColor: '#495DC3',
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6
          }}
        >
          <Text style={{ fontSize: 15, color: '#495DC3' }}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 145,
            height: 54,
            borderColor: '#495DC3',
            borderWidth: 1,
            alignItems: 'center',
            marginRight: 10,
            justifyContent: 'center',
            borderRadius: 6
          }}
        >
          <Text style={{ fontSize: 15, color: '#495DC3' }}>Track</Text>
        </TouchableOpacity>
      </>
    )
  }
  return (
    <>
      <TouchableOpacity
        style={{
          width: 300,
          height: 54,
          marginLeft: 10,
          borderColor: '#495DC3',
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6
        }}
      >
        <Text style={{ fontSize: 15, color: '#495DC3' }}>Reopen</Text>
      </TouchableOpacity>
    </>
  )
}

export default ComplaintCardBottomButton
