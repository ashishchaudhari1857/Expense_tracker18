
const Conditional= (props)=>
{
    if(props.expenseItems.length===0){
        return <p>No data found</p>
    }
    else {
        return props.expenseItems;
    }

}
export { Conditional};