import React, { useState } from 'react'

interface TodoFormProps {
  onAdd:(title:string,description:string)=>void
}


  const TodoForm:React.FC<TodoFormProps> = ({onAdd}) => {
  
    const [title,setTitle] = useState(""); 
    const [description,setDescription] = useState("");
  
    const handleForm = (e:React.FormEvent)=> {
     e.preventDefault()

     if(title && description){
      onAdd(title,description);
      setDescription("");
      setTitle("");

     }
    };


  return (
    <form onSubmit={handleForm}>

    <input type="text" value={title} onChange= {(e) => setTitle(e.target.value)}/>
    <textarea placeholder="Description" value={description} onChange={(e)=> setDescription(e.target.value)}/>
    <button type='submit'>Submit</button> 
    </form>
  )
}

export default TodoForm

