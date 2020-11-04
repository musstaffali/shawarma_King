-- CREATE DATABASE shawarmas_db;
-- USE shawarmas_db;
DROP TABLE IF EXISTS shawarmas;
CREATE TABLE shawarmas(
    id INT NOT NULL AUTO_INCREMENT,
    shawarma_name VARCHAR(50) NOT NULL,
    ordered BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);