## MVP
- Users can add bird pictures to database
- users can create an account
- users can log in to website
- users can view bird pictures from our database
- users can edit their own posts
- users can delete their own posts

## Icebox
- users can comment on other users' posts
- users can upvote or like posts
- users can view locations of bird sightings using google maps API
- can create friends list

## Database

- Schemas:
users
```SQL
CREATE TABLE bird_users (
    user_id SERIAL PRIMARY KEY, 
    email VARCHAR(60) NOT NULL,
    username VARCHAR(20) NOT NULL, 
    password TEXT NOT NULL
);
```

posts
```SQL
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY, 
    img TEXT NOT NULL,
    species_name VARCHAR(32) NOT NULL, 
    location TEXT NOT NULL,
    user_id INT REFERENCES bird_users(user_id)
);
```

comments
```SQL
CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY, 
    body TEXT NOT NULL,
    user_id INT REFERENCES bird_users(user_id),
    post_id INT REFERENCES posts(post_id)
);
```
SELECT * FROM posts
JOIN comments
ON posts.post_id = comments.post_id

## Server
- Dependencies:
    - express
    - massive
    - dotenv
    - express-session
    - bcrypt

- File Structure: 
    - server/
        - index.js
        - controllers
            - authcontroller.js
            - postcontroller.js

- Endpoints:
    - auth endpoints:
        - register => '/auth/register'
        - login => '/auth/login'
        - logout => '/auth/logout'
        - getUserSession => '/api/get_user'
    - post endpoints: 
        - read posts => '/api/posts'
        - delete => '/api/post/:id'
        - edit => '/api/post/:id'
        - create => '/api/post'


## Frontend

- Dependencies:
    - axios
    - react-router-dom
    - redux
    - react-redux
    - redux-promise-middleware

- File Structure:
    - src/
        - App.js
        - App.css
        - reset.css
        - routes.js
            - '/' => Auth.js
            - '/createpost' => Form.js
            - '/feed' => Feed.js
        - redux/
            - store.js
            - reducer.js
        - components/
            - Header.js
            - Auth.js
            - Form.js
            - Feed.js
            - Post.js

<a href="https://www.figma.com/file/aDLlahYZlVXd8ug0Dxe4Zn/WR6-Fullstack-Review?node-id=0%3A1"> My Figma Wireframe </a>