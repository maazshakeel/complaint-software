import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import Circle from './Circle'

interface ITrackProblemProps {
  isDone: boolean
  date: string
  inProgress: boolean
}

const TrackProblem: FC<ITrackProblemProps> = ({ isDone, date, inProgress }) => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingTop: 7,
          justifyContent: 'space-between'
        }}
      >
        <View style={{ paddingLeft: 10, paddingTop: 3 }}>
          <Circle isDone={isDone} inProgress={inProgress} />
        </View>
        <Text style={{ fontSize: 18, paddingLeft: 0 }}>Complaint Raised</Text>
        <Text
          style={{
            fontSize: 17,
            color: '#776D6D',
            paddingRight: 10
          }}
        >
          {date}
        </Text>
      </View>
    </View>
  )
}

export default TrackProblem
