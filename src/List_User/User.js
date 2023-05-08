import React from "react";
import Expenseitem from "../components/Expense/Expenseitem.js";
import { ExpenseAmount } from "../components/ExpenseAmt/ExpenseAmount.js";
import { ExpenseDate } from "../components/ExpenseDate/ExpenseDate.js";

const User = (props) => {
  return (
      <div className="main_container">
        <div className="expense_item_container">
        {/* <ExpenseDate date={props.info.date.toLocaleDateString()} /> */}
          <ExpenseDate date={props.info.date?.toLocaleDateString()}></ExpenseDate>
          <Expenseitem item={props.info.purpose} />
          <ExpenseAmount amount= {props.info.amount}></ExpenseAmount>
          <button onClick={props.remove}>click</button>
        </div>
      </div>
  
  );
}

export {User};