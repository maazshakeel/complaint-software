import React, { FC, useEffect, useState } from 'react'
import { ScrollView, View, Text } from 'react-native'
import Row from './Row'
import client from '../../api/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { getComplaints } from '../../api/user.api'

const ComplaintList: FC = ({ email }) => {

  const [complaints, setComplaints] = useState(null)

  const myComplaints = async () => {
    const complaints = await getComplaints()
    setComplaints(complaints)
    return
  }

  useEffect(() => {
    myComplaints()
  }, [])

  if (!complaints) {
    return <Text>Loading data from server.</Text>
  }
  if (complaints) {
    return (
      <ScrollView>
        <Row resolved={complaints.ComplaintStatus[0].isResolved} complaintDetail={"Detail"} complaintCategory={"Cateogry"} ticketNumber={"32323"} />
        <Row resolved={true} complaintDetail={"Detail"} complaintCategory={"Cateogry"} ticketNumber={"32323"} />
        <Row resolved={false} complaintDetail={"Detail"} complaintCategory={"Cateogry"} ticketNumber={"32323"} />
      </ScrollView>
    )
  }
}

export default ComplaintList
