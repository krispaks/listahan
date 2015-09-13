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
	.exec(function(err, budget){
		if(err){
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		}
		else{
			res.json(budget);
		}
	});
}

exports.create = function(req, res)
{
	var budget = new Budget(req.body);
	budget.creator = req.user;
	
	budget.save(function(err){
		if(err){
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		}
		else{
			res.json(budget);
		}
	});
}

exports.getById = function(req, res){
	res.json(req.budget);
};

exports.budgetById = function(req, res, next, id){
	Budget.findById(id)
	.populate('creator', 'firstName lastName fullName')
	.exec(function(err, data){
		if(err) return next(err)
		
		if(!data) return next(new Error('sailed to load ' + id));
		
		req.budget = data;
		next();
	});
};

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