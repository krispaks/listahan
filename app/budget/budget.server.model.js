var mongoose = require('mongoose');
var crypto = require('crypto');

var Schema = mongoose.Schema;

var BudgetSchema = new Schema({
	dateFrom: {
		type: Date,
		default: Date.now
	},
	dateTo: {
		type: Date,
		default: Date.now
	},
	khrisSalary: {
		type: Number,
		default: 0	
	},
	rasselSalary: {
		type: Number,
		default: 0
	},
	isFullyPaid: {
		type: Boolean,
		default: false
	},
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