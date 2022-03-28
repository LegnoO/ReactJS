// Import Axios
const axios = require('axios').default 
let id = 91
// Get

async function GetAllUser(){
  const result = await axios.get('https://624061412aeb48a9af735b00.mockapi.io/users')
  console.log(result.data)
}
async function GetIDUser(){
  const result = await axios.get('https://624061412aeb48a9af735b00.mockapi.io/users/'+id)
  console.log(result.data)
}

async function CreateUser(){
  const data = {
    'name': 'Ngô Minh Khôi',
    'avatar': 'https://cdn.faker.cloud/avatars/test.jpg'
  }
  const result = await axios.post("https://624061412aeb48a9af735b00.mockapi.io/users",data)
  console.log(result.data)
}

async function UpdateUser(){
  const data = {
    'name': 'Ngô Minh Khôi',
    'avatar': null
  }
  const result = await axios.put('https://624061412aeb48a9af735b00.mockapi.io/users/'+id,data)
  console.log(result.data)
}

async function DeleteUser(){
  const result = await axios.delete('https://624061412aeb48a9af735b00.mockapi.io/users/'+id)
  console.log(result.data)
}
//GetAllUser()
//CreateUser()
//UpdateUser()
//DeleteUser()
GetIDUser()
