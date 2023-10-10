import React, { Fragment } from "react";


//components

import InputTodo from "./InputTodo";
import ListTodos from "./ListTodos";


function todos() {
  return (
    <Fragment>
      <div className="todoform">
        <InputTodo />
        <ListTodos />
      
      </div>
    </Fragment>
  );
}

export default todos;