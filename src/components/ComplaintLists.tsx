import React, { FC, useEffect, useState } from 'react'
import { ScrollView, View, Text, ActivityIndicator } from 'react-native'
import Row from './Row'
import client from '../../api/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { getComplaints } from '../../api/user.api'

const ComplaintList = ({ email }) => {

  const [complaints, setComplaints] = useState(null)
  const [complaintDetail, setComplaintDetail] = useState('')

  const myComplaints = async () => {
    const complaints = await getComplaints(email)
    setComplaints(complaints)
    const s = complaints.map(dt => dt.ComplaintDetails.map(detail => detail))
    console.log(s)
    setComplaintDetail(s[1][0].complaintDetail)
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
            return <Row key={complaint.ticketNo} resolved={complaint.ComplaintStatus.isResolved} complaintDetail={complaintDetail} complaintCategory={"plum"} />
          })
        }

      </ScrollView>
    )
  }
}

export default ComplaintList
