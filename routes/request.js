/**
 * Created by pawan on 15/3/15.
 */
var url = require('url')
module.exports = function(req, res) {

    if(req.session.userId)
    {
        var urlParts = url.parse(req.url, true);
        var jid = urlParts.query.jid;
        res.render("request", {"session": req.session, "jid" : jid});
    }
    else
    {
        res.render("login", {"session": req.session});
    }
};