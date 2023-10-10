create database todoo;

create table todo(
    id serial primary key,
    tasks varchar(255)
);
CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(255),
  lastname VARCHAR(255),
  mail VARCHAR(255),
  user_pass VARCHAR(255)
);

CREATE TABLE auth(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  lastname VARCHAR(255),
  mail VARCHAR(255),
  pass VARCHAR(255)
);
