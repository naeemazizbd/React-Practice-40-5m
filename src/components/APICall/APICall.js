import React, { useEffect, useState } from 'react';

const APICall = () => {
    const [users,setUsers]=useState([])// for array call 
    const [singleUser,setSingleUser]=useState({})//for object call 
    const [randomUser, setRandomUser]=useState({})// object to array data 
    useEffect(()=>{
        //for array data load 
        const url='https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then (res=>res.json())
        .then(data=>setUsers(data))

        //for single object data load 
        fetch ('https://jsonplaceholder.typicode.com/users/1')
        .then(res=>res.json())
        .then (data=>setSingleUser(data))

        //for object to array data load 
        fetch('https://randomuser.me/api/')
        .then(res=>res.json())
        .then(data=>setRandomUser(data .results[0])) 

    },[])
    return (
        <div>
            {/* random data object to array */}
            <h2>{randomUser.gender}</h2>
            {/* for object to array to object call  */}
            <h3>name: {randomUser.name && randomUser.name.first}</h3>
            <h3>name new: {randomUser.name?.first}</h3>

            {/* for single data call object data */}
                <p>{singleUser.name}</p> 
                {/* for a array data call multiple data  */}
            
             {
                 users.map(user=><li>{user.name}</li> )
             }
        </div>
    );
};

export default APICall;