import React, { FC } from 'react'
import { View } from 'react-native'

interface ICircleProps {
  resolved: boolean
}

const Circle: FC<ICircleProps> = resolved => {
  if (resolved) {
    return (
      <View
        style={{
          backgroundColor: '#FC9700',
          borderColor: '#FC9700',
          width: 20,
          height: 20,
          borderRadius: 13
        }}
      />
    )
  } else {
    return (
      <View
        style={{
          backgroundColor: '#2FEB00',
          borderColor: '#2FEB00',
          width: 20,
          height: 20,
          borderRadius: 13
        }}
      />
    )
  }
}

export default Circle
