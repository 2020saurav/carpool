/**
 * Created by pawan on 12/3/15.
 */
module.exports = function(req, res) {
    res.render("journey", {"session": req.session});
};