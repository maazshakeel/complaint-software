import client from './api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const getComplaints = async (email: string) => {

  const getComplaint = await client.get('/api/complaints',
    {
      headers:
      {
        'x-access-token': await AsyncStorage.getItem('user_token')
      },
    }
  )
  return getComplaint.data
}

const createComplaint = async () => {
  console.log(await AsyncStorage.getItem('user_token'))
  const resp = await client.post('/api/complaint', {
    headers: {
      'x-access-token': await AsyncStorage.getItem('user_token')
    },
    ticketNo: "00012",
    complaintStatus: {
      isResolved: false,
      isClosed: false
    },
    complaintCategory: {
      name: "Network"
    },
    complaintType: {
      type: "dunno"
    },
    complaintDetails: {
      complaintDetail: "I've been trying to connect to my network but i'm having some issues!!",
      complaintSelectedOptions: "Nothin, Option 2332",
      isUrgent: true
    },
    clientId: "219b0fae-1117-4823-83c6-72f41e6c11ef",
    email: "admin"
  })

  console.log(resp.data)

  return resp.data
}

export { getComplaints, createComplaint }
