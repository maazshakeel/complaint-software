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

const RegisterClient = ({ firstName, lastName, cnic, email, block, homeNo, verified, password }: IRegisterClient) => {
  const result = fetch('http://localhost:3000/api/register', {
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

  const result = null 
  
  if (result.status === 'success') {
    return true
  }
  return result
}

// validate user 
// login
// create complaints
// find complaints
// update complaints
