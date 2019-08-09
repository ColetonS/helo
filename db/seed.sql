CREATE TABLE users (
id SERIAL PRIMARY KEY, 
username VARCHAR,
password VARCHAR,
profile_pic TEXT
);

SELECT * FROM users;

CREATE TABLE posts (
id SERIAL PRIMARY KEY,
title VARCHAR,
img TEXT,
content TEXT,
author_id INTEGER REFERENCES users(id)
);

SELECT * FROM posts;

INSERT INTO users (username, password, profile_pic)
VALUES ('Bugs', 'carrot', 'https://vignette.wikia.nocookie.net/characters/images/1/15/Bugs.jpg/revision/latest?cb=20110224072532'),
       ('Taz', 'vortex', 'https://vignette.wikia.nocookie.net/villains/images/8/86/Tasmanian.png/revision/latest?cb=20190213224731');

INSERT INTO posts (title, img, content, author_id)
VALUES ('title1', 'img1', 'Lorem impsum muthurussia', '1'),
       ('title2', 'img2', 'I want to go home', '2');