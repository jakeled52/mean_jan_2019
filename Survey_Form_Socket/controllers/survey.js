module.exports = {
    index_func: function(req, res){
        res.render('index', {session: req.session});
    },
    submit_func: function(req, res){
        req.session.name = req.body.name;
        req.session.location = req.body.location;
        req.session.favLang = req.body.favLang;
        req.session.comment = req.body.comment;
        res.redirect('/results');
    },
    data_func: function(req, res){
        res.render('Data_Page', req.session);
    },
    back_func: function(req, res){
        req.session.destroy();
        res.redirect('/');
    }
}