module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body

        const user = await db.find_username(username)
        if (user.length > 0) {
            return res.status(400).send({message: 'Email in use'})
        }
        const newUser = await db.insert_user_info({username, password})
            req.session.user = newUser[0]
            res
                .status(200)
                .send({
                    message: 'Logged in',
                    user: req.session.user,
                    loggedIn: true
                })
        
        .catch(err => {
            res.status(500).send({message: 'Failed to register'})
        })
    }
}