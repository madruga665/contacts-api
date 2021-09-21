DROP DATABASE IF EXISTS contacts_db;
CREATE DATABASE contacts_db;
USE contacts_db;

CREATE TABLE contacts ( 
contact_id int NOT NULL AUTO_INCREMENT,
first_name varchar(50) NOT NULL, 
last_name varchar(50) NOT NULL,
phone  char(50) NOT NULL,
PRIMARY KEY  (contact_id)  ) ENGINE=InnoDB;

INSERT INTO contacts VALUES (1,'Luciano', 'Amâncio dos Santos', '1333555986');
INSERT INTO contacts VALUES (2, 'Catherine', 'Janeway', '1333589635');
INSERT INTO contacts VALUES (3, 'Uhura', 'Xablau', '1133889966');