var mongoose = require('mongoose');
var crypto = require('crypto');

var Schema = mongoose.Schema;

var BudgetSchema = new Schema({
	expense: String,
	amount: Number,
	created: {
		type: Date,
		default: Date.now
	},
	createdBy: {
		type: Schema.ObjectId,
		ref: 'user'
	}
});

mongoose.model('budget', BudgetSchema);