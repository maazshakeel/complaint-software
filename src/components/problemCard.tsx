import { View, Text, StyleSheet, Image } from 'react-native'
import React, { FC } from 'react'

interface IProblemCardProps {
  backcolor: string
}

const ProblemCard: FC<IProblemCardProps> = props => {
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
        borderColor: props.backcolor,
        borderWidth: 1,
        backgroundColor: props.backcolor
      }}
    >
      {props.children}
    </View>
  )
}

export default ProblemCard
