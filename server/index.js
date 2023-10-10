const express = require ("express");
const app = express();
const cors = require("cors");
const pool = require("./db")
 // middleware
 app.use(cors())
 app.use(express.json());
// Routes//

//create a task

app.post("/task", async(req, res)=>{
    try{
     const { tasks }=req.body;
     const newTask=await pool.query(
        "INSERT INTO task (tasks) VALUES ($1) RETURNING * ",
     [tasks]
     );
     res.json(newTask.rows[0]);
    } catch (err){
        console.error(err.message)
    }
})
//get all task
app.get("/task", async(req,res)=>
{
    try{
    
        const allTasks=await pool.query(
           "SELECT * FROM task ",
        );
        res.json(allTasks.rows);
       } catch (err){
           console.error(err.message)
       }

})

//get a task

app.get("/task/:id", async(req,res)=>
{
    try{
       const {id}= req.params;
       const task = await pool.query("select * from task where id = $1",[id])
       res.json(task.rows[0])
    } catch (err){
           console.error(err.message)
       }

})

//update a task

app.put("/task/:id", async(req,res)=>
{
    try{
       const { id }= req.params;
       const { tasks }= req.body;
       const updateTask= await pool.query(
        "UPDATE task SET tasks = $1 WHERE id = $2",[ tasks , id])
       res.json("task was updated!")
    } catch (err){
           console.error(err.message)
       }

})

//delete a task

app.delete("/task/:id", async(req,res)=>
{
    try{
       const { id }= req.params;
      
       const deleteTask= await pool.query(
        "delete from task  WHERE id = $1",[ id])
       res.json("task was deleted!")
    } catch (err){
           console.error(err.message)
       }

})
////// table users


  
app.post("/users", async (req, res) => {
    try {
      const { name , lastname , user_name, user_pass } = req.body;
      const newUser = await pool.query(
        "INSERT INTO users (name, lastname, user_name ,user_pass ) VALUES ($1 ,$2 ,$3 ,$4) RETURNING *",
        [name ,lastname, user_name , user_pass ]
      );
  
      res.json(newUser.rows[5]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  ////////////

  

  //get all todos
  
  app.get("/users", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM users");
      res.json(allUser.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get a todo
  
  app.get("/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
        id
      ]);
  
      res.json(user.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //update a todo
  
  app.put("/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { user_name } = req.body;
      const updateUser = await pool.query(
        "UPDATE toodo SET user_name = $1 WHERE user_id = $2",
        [user_name, id]
      );
  
      res.json("user name was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //delete a todo
  
  app.delete("/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1", [
        id
      ]);
      res.json("user was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });
  /////////////////login
app.get("/login", async (req, res) => {
    try {
      const { email, password  } = req.query;
      

        const result = await pool.query(`SELECT * FROM  public.users where user_name='${email}' and user_pass='${password}'`);
        console.log(result.rows[0])
        if(result.rows.length> 0){
            res.status(200).json({error:false, message:'login with scusseful'});
        }
     
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error });
    }
  });
  //////////////



app.listen(7000, () => {
    console.log("server has started on port 7000 ");
});