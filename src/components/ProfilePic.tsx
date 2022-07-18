import { View, Text, Image } from 'react-native'
import React from 'react'

export default function ProfilePic() {
  return (
    <View style={{ paddingTop: 10 }}>
      <Image source={require('../assets/static-profile.png')} />
    </View>
  )
}
