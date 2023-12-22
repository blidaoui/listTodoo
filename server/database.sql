create database todoo;
use todoo;
create table task(
    id serial primary key,
    tasks varchar(255)
    /**user_id INT REFERENCES users(id)**/
);
CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(255),
  name VARCHAR(255),
  lastname VARCHAR(255),
  mail VARCHAR(255),
  user_pass VARCHAR(255)
);

