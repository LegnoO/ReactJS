import React, { useEffect ,useState } from 'react';
import { Table } from 'react-bootstrap'
import axios from 'axios'


const ListPage = () => {

    const [data,setData] = useState([]);

    useEffect(() => { 

        const callAPI = async () => {
            try{
                const result = await axios.get('https://624061412aeb48a9af735b00.mockapi.io/users');
                setData(result.data)
            } catch (e){
                console.log(e);
            }
        
        };

    callAPI()
    },[]);
    const deleteItem = (index) =>{
        const newData = [...data];
        newData.splice(index,1)
        setData(newData)
    }

    const deleteAll = () =>{
        const newData = [...data];
        newData.length = 0;
        setData(newData)
    }
/*  */
    const renderItem = () => {
        const res = data.map((value,index) => {
            return (
            <tr key={index}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td><img src='{value.avatar}'/></td>
                <td>{value.createdAt}</td>
                <td><button className='btn btn-danger' onClick={() => deleteItem(index)}>Delete</button></td>
            </tr>
            );
        })
        return res;
     }

    return ( 
    <div>
        <button className='btn btn-danger' onClick={() => deleteAll()}>Delete All</button>
        <Table>
        <thead>
            <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Avatar</th>
            <th>CreateAt</th>
            </tr>
        </thead>
        <tbody>{renderItem()}</tbody>
        </Table>
    </div>

    )
};
export default ListPage;
















    
