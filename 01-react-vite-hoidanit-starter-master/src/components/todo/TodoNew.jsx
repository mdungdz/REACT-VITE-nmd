import { useState } from "react";

const TodoNew=(props)=>{

  //useState hook (getter/setter)
  //const valueInput="eric";
  const [valueInput, setValueInput]=useState("eric")

  const {addNewTodo}=props;
  
  //addNewTodo("eric")
  const handleClick=()=>{
    console.log(">>> check valueInput: ",valueInput);
  }

  const handleOnchange=(name)=>{
    
    setValueInput(name)
  }
  
  return(
      <div className='todo-new'>
        <input type="text" 
          onChange={(event)=>handleOnchange(event.target.value)}
        />
        <button 
          style={{cursor: "pointer"}}
          onClick={handleClick}
        >Add</button>
        <div>
          My text input ={valueInput}
        </div>
      </div>
  )
}
export default TodoNew;