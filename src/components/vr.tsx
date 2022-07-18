import React, { FC } from 'react'
import { View } from 'react-native'

interface IHrProps {
  width: number
  height: number
}

const VR: FC<IHrProps> = ({ width, height }) => {
  return (
    // @ts-ignore
    <View
      style={{
        borderBottomColor: '#E4E4E5',
        borderLeftWidth: width,
        height
      }}
    />
  )
}

export default VR
