import React, { Fragment, useState  } from "react";

import store from "../store";
const EditTodo = ({task}) => {
  const [ tasks,setTasks] = useState();


  //edit task function

 /* const updateTodos = async (e) => {
    e.preventDefault();
    try {
      const body = { tasks };
      const updatetaskUrl = await fetch(`http://localhost:7000/api/v1/task/${task.id}`,{
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }) 
      window.location.href = "/todo";
    } catch (err) {
      console.log(err);
  };
}

  */
const updateTodos = async (e) => {
  e.preventDefault();
  try {
    const body = { tasks };
    const updatetaskUrl = await fetch(`http://localhost:7000/api/v1/task`)
    const taskData = updatetaskUrl.json()
    store.listTodos = taskData
    window.location.href = "/todo";
  } catch (err) {
    console.log(err);
};
}

  return (
    <Fragment>
    <button type="button" 
    className="btn "
     data-toggle="modal"
      data-target={`#id${task.id}`}>
    edit
    </button>


    <div className="modal"
     id={`id${task.id}`}
     onClick={() => setTasks(task.tasks)}>
    <div className="modal-dialog">
        <div className="modal-content">

        <div className="modal-header">
            <h4 className="modal-title">edit todo</h4>
            <button type="button" className="close"
             data-dismiss="modal"
             onClick={() => setTasks(task.tasks)}>
              &times;</button>
        </div>

        
        <div className="modal-body">
            <input type="text"
             className="form-control" value={tasks}
                      onChange={e => setTasks(e.target.value)}/>
        </div>

        
        <div className="modal-footer">
            <button type="button" 
            className="btn btn-warning" 
            data-dismiss="modal"
             onClick={e => updateTodos(e)}>
              edit</button>
            <button type="button"
             className="btn btn-danger"
              data-dismiss="modal"
              onChange={e => setTasks(e.target.value)}>Close</button>
        </div>

        </div>
    </div>
    </div>
    </Fragment>
  );
};

export default EditTodo;
