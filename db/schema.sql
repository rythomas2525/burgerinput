### Schema
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	burger_name VARCHAR (30) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);



SELECT * FROM burgers


UPDATE burgers SET devoured = true WHERE id 1;