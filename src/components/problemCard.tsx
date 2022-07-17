import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'

interface IProblemCardProps {
  type: string
  textcolor: string
  backcolor: string
}

const ProblemCard: FC<IProblemCardProps> = ({ backcolor, textcolor, type }) => {
  return (
    <View
      style={{
        width: 101,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        height: 115,
        marginTop: 10,
        marginRight: 10,
        borderColor: backcolor,
        borderWidth: 1,
        backgroundColor: backcolor
      }}
    >
      <Text style={{ color: textcolor, fontSize: 13 }}>{type}</Text>
    </View>
  )
}

export default ProblemCard
