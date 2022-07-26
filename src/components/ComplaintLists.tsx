import React, { FC, useEffect, useState } from 'react'
import { ScrollView, View, Text, ActivityIndicator } from 'react-native'
import Row from './Row'
import client from '../../api/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { getComplaints } from '../../api/user.api'

const ComplaintList: FC = ({ email }) => {

  const [complaints, setComplaints] = useState(null)

  const myComplaints = async () => {
    const complaints = await getComplaints(email)
    console.log(complaints)
    setComplaints(complaints)
    return
  }

  useEffect(() => {
    myComplaints()
  }, [])

  if (complaints === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  if (complaints !== null) {
    return (
      <ScrollView>
        {
          complaints.map(complaint => {
            return <Row key={complaint.ticketNo} resolved={complaint.ComplaintStatus[0].isResolved} complaintDetail={complaint.ComplaintDetails[0].complaintDetail} complaintCategory={complaint.ComplaintCategory[0].name} />
          })
        }
      </ScrollView>
    )
  }
}

export default ComplaintList
