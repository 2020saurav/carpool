module.exports = function(req, res) {
    res.render("register", {"session": req.session});
};
