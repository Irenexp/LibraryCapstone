CREATE TABLE IF NOT EXISTS USER_T
(
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(1000),
    email VARCHAR(1000),
    address_id BIGINT
);

CREATE TABLE IF NOT EXISTS MOVIE (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    lead_actors VARCHAR(100),
    director VARCHAR(50),
    screen_writer VARCHAR(50),
    release_date VARCHAR(100),
    isAvailable BOOLEAN,
    quantity INT,
    genre ENUM('FICTION', 'ROMANCE', 'ACTION', 'SCIENTIFIC', 'THRILLER'),
    rating DOUBLE
);

CREATE TABLE IF NOT EXISTS PERIODICAL (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(50),
    publication_date DATE,
    periodical_name VARCHAR(100),
    img_url VARCHAR(250)
);

CREATE TABLE IF NOT EXISTS BOOK
(
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    author_id BIGINT NOT NULL,
    genre ENUM('FICTION', 'ROMANCE', 'ACTION', 'SCIENTIFIC', 'THRILLER'),
    quantity INT NOT NULL,
    is_available BOOLEAN,
    img_url VARCHAR(255)

);

CREATE TABLE IF NOT EXISTS AUTHOR
(
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    book_id BIGINT

);

CREATE TABLE IF NOT EXISTS ADDRESS_T
(
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    line_one VARCHAR(255),
    city VARCHAR(1000),
    post_code VARCHAR(1000),
    country VARCHAR(1000)
    );

CREATE TABLE IF NOT EXISTS Random
(
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    line VARCHAR(255)
);

