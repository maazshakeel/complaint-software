import client from './api'

const getComplaints = async () => {
  const getComplaint = await client.get('/api/complaints', { clientId: "5b5ea998-dc33-4571-8984-1b4215b9f79f" })
  return getComplaint.data.complaints[0]
}

export { getComplaints }
