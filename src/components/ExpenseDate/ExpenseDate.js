import './ExpenseDate.css';

const ExpenseDate=(props)=>{
    return (
        <>
        <div className='expense-date'> {props.date}</div>
        </>
    );
}

export {ExpenseDate};