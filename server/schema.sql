CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  roomname VARCHAR(60) NOT NULL,
  message VARCHAR(200) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username VARCHAR(40) NOT NULL,
  avatarURL VARCHAR(200),
  PRIMARY KEY (ID)
);

CREATE TABLE rooms (
  roomname VARCHAR(60),
  founder VARCHAR(60)
);

-- /* Create other tables and define schemas for them here! */




--   Execute this file from the command line by typing:
--  *    mysql -u root < server/schema.sql
--  *  to create the database and the tables.

