import React, { FC, useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import Row from './Row'
import client from '../../api/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const ComplaintList: FC = ({ email }) => {

  const [complaints, setComplaints] = useState([])

  const navigation = useNavigation()

  const getComplaints = async () => {
    const getComplaint = await client.get('/api/complaints', { email })
    setComplaints(...complaints, getComplaint.data.complaints)
    return
  }

  useEffect(() => {

    getComplaints()

  }, [])

  return (
    <ScrollView>
      {
        complaints.map(complaint => <Row ticketNumber={complaint.ticketNumber} resolved={false} />)
      }
    </ScrollView>
  )
}

export default ComplaintList
