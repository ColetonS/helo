SELECT * FROM posts
JOIN users ON posts.author_id = users.id
WHERE posts.title = 'title1';