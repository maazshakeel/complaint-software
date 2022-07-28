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

  const config = {
    headers: {
      'x-access-token': await AsyncStorage.getItem('user_token')
    }
  }

  const data = {
    ticketNo: "00488",
    ComplaintStatus: {
      isResolved: false,
      isClosed: false
    },
    ComplaintCategory: {
      name: "Network"
    },
    ComplaintType: {
      type: "dunno"
    },
    ComplaintDetails: {
      complaintDetail: "I've been trying to connect to my network but i'm having some issues!!",
      complaintSelectedOptions: "Nothin, Option 2332",
      isUrgent: true
    },

  }

  console.log(await AsyncStorage.getItem('user_token'))
  const resp = await client.post('/api/createComplaint', data, config)

  console.log(resp.data)

  return resp.data
}

export { getComplaints, createComplaint }
