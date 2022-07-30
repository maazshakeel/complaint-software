import React, { FC, useEffect, useState } from 'react'
import { ScrollView, View, Text, ActivityIndicator } from 'react-native'
import Row from './Row'
import client from '../../api/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { getComplaints } from '../../api/user.api'

const ComplaintList = ({ email }) => {

  const [complaints, setComplaints] = useState(null)
  const [complaintCategorys, setComplaintCategorys] = useState(null)
  const [ticketNo, setTicketNo] = useState(null)
  const [complaintDetails, setComplaintDetails] = useState(null)

  const myComplaints = async () => {
    console.log(await AsyncStorage.getItem('user_token'))
    const complaints = await getComplaints(email)
    const details = complaints.map(complaint => complaint.ComplaintDetails)
    const sub_data = details.map(d => d[0])
    const ticketNo = complaints.map(complaint => complaint.ticketNo)
    setTicketNo(ticketNo)
    console.log()

    const realComplaintDetail = sub_data.map(real => real.complaintDetail)
    setComplaintDetails(sub_data)
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
            return <Row key={complaint.ticketNo} resolved={false} complaintDetail={JSON.stringify(complaint.ComplaintDetails.map(d => d.complaintDetail)[0])} complaintCategory={"plum"} ticketNumber={complaint.ticketNo} />
          })
        }

      </ScrollView>
    )
  }
}

export default ComplaintList
