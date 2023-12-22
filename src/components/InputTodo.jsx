import React, { Fragment,useState } from "react";


const InputTodo = () => {
  const [tasks, setTasks] = useState(""); 
 
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body ={tasks};
      const posttaskUrl = await fetch(`http://localhost:7000/task`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }) 
        
      window.location ="/todo";
    } catch (err) {
      console.error(err.message);
    }
  };



  return (
    <Fragment>
      <h1 className="text-center mt-5" > Todo List</h1>
      <form className="d-flex  mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={tasks}
          onChange={e => setTasks(e.target.value)}
        />
        <button className="btn"  >Add</button>
       

            
      </form>
     
      
    </Fragment>
  );
}; 

export default InputTodo;