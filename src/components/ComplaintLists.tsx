import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import Row from './Row'

const ComplaintList: FC = () => {
  return (
    <ScrollView>
      <Row ticketNumber={'32233'} resolved={false} />
    </ScrollView>
  )
}

export default ComplaintList
