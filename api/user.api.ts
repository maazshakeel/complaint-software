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

const createComplaint = async (ticketNo, complaintStatus, complaintCategory, complaintType, complaintDetails) => {

  const config = {
    headers: {
      'x-access-token': await AsyncStorage.getItem('user_token')
    }
  }

  const data = {
    ticketNo,
    ComplaintStatus: {
      isResolved: complaintStatus.isResolved,
      isClosed: complaintStatus.isClosed
    },
    ComplaintCategory: {
      name: complaintCategory.name
    },
    ComplaintType: {
      type: complaintType.type
    },
    ComplaintDetails: {
      complaintDetail: complaintDetails.complaintDetail,
      complaintSelectedOptions: complaintDetails.complaintSelectedOptions,
      isUrgent: complaintDetails.isUrgent
    },
  }

  console.log(await AsyncStorage.getItem('user_token'))
  const resp = await client.post('/api/createComplaint', data, config)

  console.log(resp.data)

  return resp.data
}

export { getComplaints, createComplaint }
