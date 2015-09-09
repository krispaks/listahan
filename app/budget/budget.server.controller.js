var mongoose = require('mongoose');
var Budget = mongoose.model('budget');

exports.render = function(req, res)
{
	res.render('budget', {
		user: JSON.stringify(req.user)
	})
}

exports.list = function(req, res)
{
	Budget.find()
	.sort('-created')
	.populate('creator', 'firstName lastName fullName')
	.exec(function(err, articles){
		if(err){
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		}
		else{
			res.json(articles);
		}
	});
}

//private functions
var getErrorMessage = function(err){
	if(err.errors){
		for(var errName in err.errors){
			if(err.errors[errName].message) return err.errors[errName].message;
		}
	}
	else{
		return 'Unknown server error';
	}
};