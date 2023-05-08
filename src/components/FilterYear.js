const Filteryear=(props)=>{
    return(
<>
<select  onChange={props.setYear}>
    <option value="2001">2001</option>
    <option value="2002">2002</option>
    <option value="2003">2003</option>
    <option value="2023">2023</option>
  </select>;
</>
    );
}
export {Filteryear};