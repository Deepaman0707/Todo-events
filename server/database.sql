CREATE DATABASE todo;

CREATE TABLE users (
    Name SERIAL PRIMARY KEY,
    Email VARCHAR(50) NOT NULL,
    Password VARCHAR(50) NOT NULL,
    Date DATE DEFAULT CURRENT_DATE
);