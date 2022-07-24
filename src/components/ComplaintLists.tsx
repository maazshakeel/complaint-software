import React, { FC, useEffect, useState } from 'react'
import { ScrollView, View, Text } from 'react-native'
import Row from './Row'
import client from '../../api/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const ComplaintList: FC = ({ email }) => {

  const [complaints, setComplaints] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation()

  const getComplaints = async () => {
    const getComplaint = await client.get('/api/complaints', { clientId: "5b5ea998-dc33-4571-8984-1b4215b9f79f" })
    setComplaints(getComplaint.data.complaints[0])

    console.log(getComplaint.data.complaints[0].ticketNo)
    console.log(complaints.ComplaintDetails[0].complaintDetail)
    setIsLoading(false)
    return
  }

  useEffect(() => {

    setIsLoading(true)
    getComplaints()

  }, [])

  if (isLoading) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      <Row resolved={false} complaintDetail={"hell"} complaintCategory={"nohting"} ticketNumber={complaints.ticketNo} />
    </ScrollView>
  )
}

export default ComplaintList
