import { useState } from "react";
import "./App.css";
import { User } from "./List_User/User";
import {Filteryear} from './components/FilterYear';
// import { Expenseform } from "./components/Expenseform_user/Expenseform";
import { Add_New } from "./components/CRUD/Add_New";
const App = () => {
  const [Users, setUsers] = useState([
    { 
      date: new Date(202, 12, 22), // use new Date() constructor instead of toLocaleDateString()
      amount: 150,
      purpose: "education",
    },
    { date: new Date(2002, 9, 13), purpose: "travel", amount: 200 },
    { date: new Date(2001, 7, 22), purpose: "food ", amount: 2121 },
    {
      date: new Date(2001, 5, 22),
      purpose: "skincare",
      amount: 1210,
    },
    { purpose: "health" },
    { date: new Date(2023, 1, 22), amount: 2121 },
    { date: new Date(), purpose: "room ", amount: 2121 },
    { date: new Date(2022, 0, 22), purpose: "nothing", amount: 650 }, // use Date() constructor with year, month, and day arguments
  ]);

  const removeHandler = (index) => {
    console.log(Users);
    const updatedUsers = [...Users]; // create a copy of the Users array
    updatedUsers.splice(index, 1); // remove the element at the specified index
    setUsers(updatedUsers); // update the state with the new array
    console.log(updatedUsers);
  };
 const [selected ,setselected]=useState("2001")
  //   const addExpenseHandler =(event)=>{
  //     event.preventDefault();
  //     const newExpense = {
  //       date: event.target.date.value,
  //       purpose: event.target.purpose.value,
  //       amount: event.target.price.value,
  //     };
  //     console.log("hey")
  //     console.log(newExpense)
  //     setUsers([...Users,newExpense ])
  //     event.target.reset();
  //  }
const setyear=(event)=>{
  setselected(event.target.value);
}

  
   const filterdata= Users.filter((data ,i) =>{
    if (data.date) {
      return (data.date.getFullYear().toString() === selected);
  }
   })
  //  if want all the data on screen then call Users.map instead of filterdata
   const expenseItems = filterdata.map((data, i) => {
    console.log(data.date)
    return <User info={data} remove={() => removeHandler(i)} key={i}></User>;
  });
  return (
    <>
      <Add_New Users={Users} setUsers={setUsers}></Add_New>
      <Filteryear setYear={setyear} ></Filteryear>
      {expenseItems}
      
      {/* <Expenseform add={addExpenseHandler}></Expenseform> */}
    </>
  );
};

export default App;
