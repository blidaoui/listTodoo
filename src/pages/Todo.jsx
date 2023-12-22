import React, { Fragment } from "react";


//components

import InputTodo from "../components/InputTodo";
import ListTodos from "../components/ListTodos";


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