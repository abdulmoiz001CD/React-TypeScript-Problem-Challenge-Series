import React from 'react'

interface TodoFilterProps{
  filter:string;
  setFilter:(filter:string)=>void
}

const TodoFilter:React.FC<TodoFilterProps> = ({filter,setFilter})=> {
  return (
    <div>
      <button onClick={()=>setFilter("All")} className={filter === "All" ? "active" :""}>All</button>
      <button onClick={()=>setFilter("Completed")} className={ filter === "Completed" ? "active" :""}>Completed</button>
      <button onClick={()=>setFilter("Incomplete")} className={ filter === "Incomplete" ? "active" :""}>inCompleted</button>
    </div>
  )
}

export default TodoFilter

