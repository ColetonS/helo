SELECT * FROM users
JOIN posts ON posts.author_id = users.id
WHERE users.id = $1;