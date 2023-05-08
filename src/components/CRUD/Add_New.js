import { useState } from "react";
import { Expenseform } from "../Expenseform_user/Expenseform";
const Add_New = (props) => {
  // const[prevUsers ,setUsers]=useState(props.Users)
  const {setUsers} =props;
   
  const addExpenseHandler = (event) => {

    event.preventDefault();
    const newExpense = {
      
      date: event.target.date.value ? new Date(event.target.date.value) : null,
      purpose: event.target.purpose.value,
      amount: event.target.price.value,
    };
    console.log("hey");
    console.log(newExpense);
    setUsers((prevUsers) => [...prevUsers, newExpense]);
    console.log(props.Users);
    event.target.reset();
    console.log(props.Users);
  };
  return (
    <>
      <Expenseform add={addExpenseHandler}></Expenseform>
    </>
  );
}
export {Add_New};
