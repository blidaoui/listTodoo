/*import { useState } from "react";
import { proxy, subscribe } from "valtio";

const store = proxy({
  listTodos: [],

  getListTodos: async function () {
    try {
      const gettaskUrl = await fetch("http://localhost:7000/task");
      const taskData = await gettaskUrl.json();
      store.listTodos = taskData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },

  postListTodos: async function () {
    try {
      const posttaskUrl = await fetch(`http://localhost:7000/task`)
      const taskData = await posttaskUrl.json();

      store.listTodos = taskData;
    } catch (error) {
      console.error("Error posting data:", error);
    }
  },

  deleteListTodos: async function (id) {
    try {
      const deletetaskUrl = await fetch(`http://localhost:7000/task/${id}`, {
        method: "DELETE", 
      });
      const taskData = await deletetaskUrl.json();
      store.listTodos = taskData;
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  },

  updateListTodos: async function (tasks) {
    try {
      const updatetaskUrl = await fetch(`http://localhost:7000/task`, {
        method: "PUT", 
        
        body: JSON.stringify({ tasks }),
      });
      const taskData = await updatetaskUrl.json();
      store.listTodos = taskData;
    } catch (error) {
      console.error("Error updating data:", error);
    }
  },
});

store.getListTodos();
store.postListTodos();
store.deleteListTodos();
store.updateListTodos();

export default store;*/





import { useState } from "react";
import { proxy, subscribe } from "valtio";

 const  store =proxy({
    
    listTodos :[],
     getListTodos: async function(){
        const gettaskUrl = await fetch(`http://localhost:7000/api/v1/task`)
        const taskData = gettaskUrl.json()
        store.listTodos = taskData
    },
    postListTodos: async function(){
        const posttaskUrl = await fetch(`http://localhost:7000/api/v1/task`)
        const taskData = posttaskUrl.json()
        store.listTodos = taskData
    },
    deleteListTodos: async function(id){
        const deletetaskUrl = await fetch(`http://localhost:7000/api/v1/task?id=${id}`)
        const taskData = deletetaskUrl.json()
        store.listTodos = taskData
    },
    updateListTodos: async function(){
        const updatetaskUrl = await fetch(`http://localhost:7000/api/v1/task`)
        const taskData = updatetaskUrl.json()
        store.listTodos = taskData
    },

   

})
store.getListTodos()
store.postListTodos()
store.deleteListTodos()
store.updateListTodos()

export default store;