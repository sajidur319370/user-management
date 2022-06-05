import React, { ChangeEvent, FormEvent, useState } from 'react';
interface User {
    name?:string,
    job?:string,
}

const Counter = () => {
    const [count,setCount] = useState<number>(0);
    const [user,setUser] = useState<User>({});
    const handleIncrease =():void =>{
        setCount(count+1)
    }
  
    const handleDecrease =():void =>{
        setCount(count-1)
    }

    const handleSubmit= (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const userData ={
            name:'Sakif',
            job: "developer"
        }
        setUser(userData)

    }
    const handleNameChanged =(e:ChangeEvent<HTMLInputElement>)=>{

    }
    return (
        <div>
            <h2>Counter:{count+1}</h2>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            
        </div>
    );
};

export default Counter;