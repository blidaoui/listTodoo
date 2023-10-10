import React, { Fragment, useEffect, useState } from "react";
import { useSnapshot } from 'valtio';
import EditTodo from "./EditTodo";
import store from "../store";
const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function

 /* const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`http://localhost:7000/api/v1/task/${id}`,{
         method: "DELETE" });

         setTodos(todos.filter(task => task.id !== id));
          } catch (err) {
      console.error(err.message);
    }
  };*/

  const deleteTodo = async id => {
    try {
  const deletetaskUrl = await fetch(`http://localhost:7000/api/v1/task?id=${id}`)
  const taskData = deletetaskUrl.json()
  store.listTodos = taskData
  setTodos(todos.filter(task => task.id !== id));
} catch (err) {
console.error(err.message);
}
};

  const getTodos = async () => {
    try {
      const gettaskUrl = await fetch("http://localhost:7000/api/v1/task");
      const taskData = await gettaskUrl.json();
      
      setTodos(taskData);
    } catch (err) {
      console.error(err.message);
    }
  };
  



  useEffect(() => {
    getTodos();
  }, []);


  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        
          {todos.map(task => (
            <tr key={task.id}>
              <td>{task.tasks}</td>
              <td>
                <EditTodo task={task} />
              </td>
              <td>
                <button
                  className="btn "
                  onClick={() => deleteTodo(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;