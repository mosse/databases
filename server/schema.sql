CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  username VARCHAR(60),
  createdAt DATETIME,
  message VARCHAR(140),
  roomname VARCHAR(60)
);

CREATE TABLE users (
  username VARCHAR(60),
  avatarURL VARCHAR(200)
);

CREATE TABLE rooms (
  roomname VARCHAR(60),
  founder VARCHAR(60)
);

-- /* Create other tables and define schemas for them here! */




--   Execute this file from the command line by typing:
--  *    mysql -u root < server/schema.sql
--  *  to create the database and the tables.

