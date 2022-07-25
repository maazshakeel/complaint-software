import client from './api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const getComplaints = async () => {

  const clientId = await client.get('/api/clientId',
    {
      headers: {
        'x-access-token': await AsyncStorage.getItem('user_token')
      }
    }
  )

  console.log(clientId.data)

  const getComplaint = await client.get('/api/complaints',
    {
      headers: {
        'x-access-token': await AsyncStorage.getItem('user_token')
      },
      clientId: clientId.data,
    }
  )
  return getComplaint.data.complaints[0]
}

export { getComplaints }
