import { useState } from "react";
import Expensense from "./Expensense" ;
import './App.css'
const App = () => {
  const [Users, setUsers] = useState([
    {
      date: new Date(2002, 12, 22), // use new Date() constructor instead of toLocaleDateString()
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
  
  return (
    <>
    <Expensense Users={Users} setUsers={setUsers}  removeHandler={removeHandler}></Expensense>
    </>
  );
};

export default App;
