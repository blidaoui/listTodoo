import React, { Fragment } from "react";


//components

import InputTodo from "./InputTodo";
import ListTodos from "./ListTodos";


function todo() {
  return (
    <Fragment>
      <div className="todoform">
        <InputTodo />
        <ListTodos />
      
      </div>
    </Fragment>
  );
}

export default todo;