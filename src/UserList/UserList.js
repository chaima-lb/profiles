import axios from 'axios';
import React,{useEffect,useState} from 'react';
import SingleItem from '../SingleItem/SingleItem'; 
import './UserList.css'
const UserList=()=>{
    const fetchURL= 'https://jsonplaceholder.typicode.com/users';
    let [data, setData]= useState([])
useEffect(()=>{
    async function getDataFromAPI(){
        try{
            const Request = await axios (fetchURL);
            setData(Request.data)
        }catch (error){
            console.log(error)
        }
    }
    getDataFromAPI()
});
return(
    <div className='container'>
    <div className='containerTitle'>
        <h1 className='title'>All Users from data base</h1>
        </div>
        {data.map(el=><SingleItem el={el}/>)}
    </div>
)
}
export default UserList