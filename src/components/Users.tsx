import React, { useEffect, useState } from 'react';
import UserModel from './types/models';
import User from './User';

const Users = () => {
    const [users,setUsers] = useState<UserModel[]>([])
    const [team,setTeam] = useState<UserModel[]>([])
    const handleAddUser =(user:UserModel):void=>{
        const newTeam =[...team,user]
        setTeam(newTeam);

    }
    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => setUsers(data));

    },[])
    return (
        <div>
            <h2>My Users</h2>
            <h4>Team Size:{team.length}</h4>
           {
               users.map(user => <User user ={user} addUser={handleAddUser} ></User>)
           } 
        </div>
    );
};

export default Users;