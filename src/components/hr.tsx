import React, { FC } from 'react'
import { View } from 'react-native'

interface IHrProps {
  width: number
}

const HL: FC<IHrProps> = ({ width }) => {
  return (
    // @ts-ignore
    <View
      style={{
        borderBottomColor: '#E4E4E5',
        borderBottomWidth: width
      }}
    />
  )
}

export default HL
