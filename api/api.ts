// create client
const createClient = ({ firstName, lastName, cnic, email, block, homeNo, verfied, password }) => {
  const result = fetch('http://localhost:3000', {
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
      verfied,
      password
    })
  }).then((res) => res.json())

  if (result.status === 'ok') {
    return 'createdUser'
  }
}

// validate user 
// login
// create complaints
// find complaints
// update complaints
