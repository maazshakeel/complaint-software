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

const createComplaint = async (complaint) => {

  const config = {
    headers: {
      'x-access-token': await AsyncStorage.getItem('user_token')
    }
  }

  const data = {
    ticketNo: complaint.ticketNo,
    ComplaintStatus: {
      isResolved: complaint.complaintStatus.isResolved,
      isClosed: complaint.complaintStatus.isClosed
    },
    ComplaintCategory: {
      name: complaint.complaintCategory.name
    },
    ComplaintType: {
      type: complaint.complaintType.type
    },
    ComplaintDetails: {
      complaintDetail: complaint.complaintDetails.complaintDetail,
      complaintSelectedOptions: complaint.complaintDetails.complaintSelectedOptions,
      isUrgent: complaint.complaintDetails.isUrgent
    },
  }

  console.log(await AsyncStorage.getItem('user_token'))
  const resp = await client.post('/api/createComplaint', data, config)

  console.log(resp.data)

  return resp.data
}

export { getComplaints, createComplaint }
