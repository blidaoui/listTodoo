const Pool = require("pg").Pool;


const pool= new Pool({
    user:"postgres",
    password:"blidaoui",
    host:"localhost",
    port:5432,
    database:"todoo"
});

module.exports=pool;