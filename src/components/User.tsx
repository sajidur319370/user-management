import React, { FC } from 'react';
import UserModel from './types/models';
// interface Props{
//     name?:string,
//     age?:number,
//     addUser:() => void
// }

interface Props {
    user: UserModel,
    addUser:(user:UserModel) => void
}
const User:FC<Props> = ({user,addUser}) => {
    return (
        <div>
            <h3>Name:{user.name}</h3>
            <h3>email:{user.email}</h3>
            <button onClick={()=>addUser(user)}>Add me</button>
            
        </div>
    );
};

export default User;