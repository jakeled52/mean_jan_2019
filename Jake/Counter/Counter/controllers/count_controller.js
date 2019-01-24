module.exports = {
	home_func: function(req, res){
		if(req.session.count)
			req.session.count++;
		else
			req.session.count = 1;
		res.render('index', {session: req.session});
	},
	add_func: function(req, res){
		req.session.count += 1;
		res.redirect('/');
	},
	reset_func: function(req, res){
		req.session.destroy();
		res.redirect('/');
	}

}