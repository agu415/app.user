const user = (router) => {
    router.post ('/login',(req, res) => {
        res.send({ success: true });
    })
};


module.exports = user;
