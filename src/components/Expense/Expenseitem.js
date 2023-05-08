import './Expenseitem.css';

const Expenseitem=(props)=>{
    return (
        <>
        <div className='expense-item'> {props.item}</div>
        </>
    );
}

export default Expenseitem;
