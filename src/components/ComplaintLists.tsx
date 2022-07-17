import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import Row from './Row'

const ComplaintList: FC = () => {
  return (
    <ScrollView>
      <Row resolved={false} ticketNumber={33245} />
      <Row resolved={true} ticketNumber={99322} />
      <Row resolved={true} ticketNumber={32932} />
    </ScrollView>
  )
}

export default ComplaintList
