import { useState } from "react";
import { User } from "./List_User/User";
import { Filteryear } from "./components/FilterYear";
import { Add_New } from "./components/CRUD/Add_New";
import {Conditional} from './components/CRUD/Conditional';


const Expensense=(props)=>{
    const [selected, setselected] = useState("2001");
    const setyear = (event) => {
        setselected(event.target.value);
      };
      const filterdata = props.Users.filter((data, i) => {
        if (data.date) {
          return data.date.getFullYear().toString() === selected;
        }
      });

       //  if want all the data on screen then call Users.map instead of filterdata
  const expenseItems = filterdata.map((data, i) => {
    console.log(data.date);
    return <User info={data} remove={() => {props.removeHandler(i)}} key={i}></User>;
  });
  return (
    <>
      <Add_New Users={props.Users} setUsers={props.setUsers}></Add_New>
           <Filteryear setYear={setyear}></Filteryear>
{/* 
      {expenseItems.length === 1 && <p>Only one data found Add More</p>}   // this can be but if you have hadle multiple case the it is good choice to make seperate components
       
      {expenseItems.length === 0 ? <p>No data found</p> : expenseItems} */}
<Conditional  expenseItems={expenseItems}></Conditional>
  
    </>);
}
 export default Expensense;