import React from 'react'

interface TodoItemProps {
  task:{
    id:number;
    title:string;
    description:string;
    completed:boolean;
  };
  onToggle:(id:number)=>void;
  onDelete:(id:number)=>void;

}

const TodoItem:React.FC<TodoItemProps> = ({task,onDelete,onToggle }) => {
  return (
    <div>
      <input type="checkbox" checked ={task.completed} onChange={() => onToggle(task.id)}/>
      <h2>{task.title}</h2>
      <button onClick={()=> onDelete(task.id)}>Delete</button>
      <h4>{task.description}</h4>
    </div>
  )
}

export default TodoItem
