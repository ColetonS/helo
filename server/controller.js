module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;

    const user = await db.find_username([username]);
    if (user.length > 0) {
      return res.status(400).send({ message: "Email in use" });
    }
    const newUser = await db.insert_user_info({ username, password });
    req.session.user = newUser[0];
    res
      .status(200)
      .send({
        message: "Logged in",
        user: req.session.user,
        loggedIn: true
      })

      .catch(err => {
        res.status(500).send(`Error in register method: ${err}`);
      });
  },
  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    const user = await db.find_username([username]);
    if (user.length === 0) {
      return res.status(400).send({ message: "User not found" });
    }
    if (password === user[0].password) {
      req.session.user = user[0];
      return res.status(200).send({
        message: "Logged in",
        user: req.session.user,
        loggedIn: true
      });
    }
  },
  getPost: async (req, res) => {
    // console.log(req.query.search)
    // console.log(req.query.userposts)
    const db = req.app.get("db");
    const searchString = `%${req.query.search}%`
    const post = await db.find_post([searchString])
    if (req.query.userposts && searchString !== '') {
        const posts = post.filter(el => {
           return el.title
        }) 
        res.send(posts)
    } 
  },
  getPosts: (req, res) => {
    const db = req.app.get('db')
    db.get_all_posts().then( posts => {
        res.status(200).send(posts)
    })
  }
};
