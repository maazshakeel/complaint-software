import client from './api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getComplaintCategory } from '../backend/src/controllers/complaints.controller'

const getComplaints = async (email: string) => {

  const getComplaint = await client.get('/api/complaints',
    {
      headers:
      {
        'x-access-token': await AsyncStorage.getItem('user_token')
      },
    }
  )
  console.log(`Complaints${getComplaint.data} type: ${typeof(getComplaint.data)}`)
  if (getComplaint.data === "NoComplaint") {
    return null
  }
  return getComplaint.data
}

const createComplaint = async (complaintCategory, ticketNo, complaintDetail, isUrgent) => {

  const config = {
    headers: {
      'x-access-token': await AsyncStorage.getItem('user_token')
    }
  }

  const data = {
    ticketNo,
    ComplaintStatus: {
      isResolved: false,
      isClosed: false,
    },
    ComplaintCategory: {
      name: complaintCategory
    },
    ComplaintType: {
      type: "dunno"
    },
    ComplaintDetails: {
      complaintDetail: complaintDetail,
      complaintSelectedOptions: "nothin",
      isUrgent,
    },
  }

  console.log(await AsyncStorage.getItem('user_token'))
  const resp = await client.post('/api/createComplaint', data, config)

  return resp.data
}

export { getComplaints, createComplaint }
