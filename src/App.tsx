
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';

let student:string ='Jhony';
 let age:number= 55;
 let isSmart:boolean = true;
 let team:string[] = ['karm','rahim','jalal'];
 let fees:number[] = [23,4,57,89,0];

 interface Person {
   name:string,
   age:number,
   job:string,
   post?:string | boolean,
   location?: any,

 }
 let person:Person={
   name: "karim",
   age: 98,
   job:'developer',
   post:false,
   location: {lat:0,lon:9}
 };

 const handleClick =(name:string,age:number,):void =>{
   console.log(name,age);
   
 }
 const handleUserclick =(name:string,age:number,):string=>{
   console.log(name,age);
   return name

 }

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
      
    </div>
  );
}

export default App;
