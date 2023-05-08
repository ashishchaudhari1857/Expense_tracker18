    import React from "react";
    import './Expenseform.css';
    const Expenseform=(props)=>{
        const DateHandler=(event)=>{
        console.log(event.target.value);
    }
    return(
        
        <div>
            <form className="my-form" onSubmit={props.add}>
                <label htmlFor="date" >Date</label>
                <input type="date" name="date" onChange={DateHandler}></input>
                <label htmlFor="purpose" >purpose</label>
                <input type="text" name="purpose" ></input>
                <label htmlFor="price">price</label>
                <input type="number" name="price"></input>
                <button type="submit">Add Expenses</button>
                
            </form>
        </div>

    );

    }
    export {Expenseform};