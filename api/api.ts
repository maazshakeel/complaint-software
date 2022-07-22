// create client
interface IRegisterClient {
  firstName: string
  lastName: string
  cnic: string
  block: string
  homeNo: string
  verified: boolean
  email: string
  phoneNo: string
  password: string
}

const RegisterClient = async ({ firstName, lastName, cnic, email, block, homeNo, verified, password }: IRegisterClient) => {
  const result = await fetch('http://localhost:3000/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName,
      lastName,
      cnic,
      email,
      block,
      homeNo,
      verified,
      password
    })
  }).then((res) => res.json())


  if (result.status === 'success') {
    return true
  }
  return result
}

// login
export const getLogIn = async (email: string, password: string) => {
  const result = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
  const response = await result.json()
  if (response.status === 'ok') {
    return 'ok'
  }
  return false

}
// create complaints
// find complaints
// update complaints
