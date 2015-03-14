/**
 * Created by pawan on 12/3/15.
 */
module.exports = function(req, res) {
    if(req.session.userId)
    {
        res.render("journey", {"session": req.session});
    }
    else
    {
        res.render("login", {"session": req.session});
    }
};