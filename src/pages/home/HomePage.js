// import Button from './../../components/commons/Button'
// import Input from './../../components/commons/Input'
// import Text from './../../components/commons/Text'
import './../../assets/css/style.css'
import React ,{useState, useffect} from 'react'

const HomePage = () => {
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const removeData = () => {
    setName('')
    setAge('')
  }
  return (
    <div className="App warp">
      <label>React</label>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
      <input type='text' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Name'/>
      <br />
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={() => removeData()}>Clear Data</button>
    </div>
  );
}

export default HomePage;