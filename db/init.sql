CREATE TABLE bird_users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(60) NOT NULL,
    username VARCHAR(20) NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO bird_users (email, username, password)
VALUES ('roadrunner@az.gov', 'rocky', 'run');

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    img TEXT,
    species_name VARCHAR(32),
    location TEXT,
    user_id INT REFERENCES bird_users(user_id)
);

INSERT INTO posts (img, species_name, location, user_id)
VALUES 
('https://www.allaboutbirds.org/guide/assets/photo/60388671-480px.jpg',
'road runner', 'Sonoran Desert', 1),
('https://www.allaboutbirds.org/guide/assets/photo/68034441-480px.jpg', 'Cactus Wren', 'Sonoran Desert', 1);


CREATE TABLE comments(
    comment_id SERIAL PRIMARY KEY,
    body TEXT,
    user_id INT REFERENCES bird_users(user_id),
    post_id INT REFERENCES posts(post_id)
);