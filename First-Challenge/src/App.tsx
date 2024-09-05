import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';

interface Taskprops {
id:number;
title:string;
description:string;
completed:boolean;
}



const App:React.FC = ()=> {

  const [tasks,setTasks] = useState<Taskprops[]>([]);
  const [Filters,setFilters] = useState<string>("");


  const handleAddItem = (title:string,description:string) => {

  const newItem = {
    id: Date.now(),
    title,
    description,
    completed:false,

  }


   setTasks([...tasks,newItem])


  }


    const handleToggle = (id:number) => {
    
        setTasks(tasks.map(task => 
          task.id === id ? {...task, completed:!task.completed}:task
        ))
    }

   const filterDelete = (id:number) =>{
    setTasks(tasks.filter(task => 
      task.id !== id
    ));
   }


      const FilterData = tasks.filter(task => {
    if (Filters === "All") return true;
    if (Filters === "Complete") return task.completed;
    if (Filters === "Incomplete") return !task.completed;
    return true;
  });



  return (
    <>
     <h1>Todo List</h1>
     <TodoForm onAdd={handleAddItem}/>
     <TodoFilter filter={Filters} setFilter={setFilters}/>
     <div>

     {FilterData.map(task=>(
       <TodoItem key={task.id} task={task} onDelete={filterDelete} onToggle={handleToggle}/>
     )
     
     
     )}

     </div>
    </>
  )
}

export default App




