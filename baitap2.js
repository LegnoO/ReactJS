const axios = require('axios').default

let url = ('https://62405d822aeb48a9af733b3e.mockapi.io/users')

// Get
async function getAll(){
  const result = await axios.get('')
  console.log(result.data)
}

// Create
async function createUser(){
  const data = {
  'name': 'Ngô Minh Khôi',
  'avatar': ''
 }
 const result = await axios.post(url,data)
 console.log(data)
}

// Get
async function getDetail(){
  const result = await axios.get(''+id)
  console.log(result.data)
}

// Delete
async function getDetail(){
  const result = await axios.delete(''+id)
  console.log(result.data)
}
