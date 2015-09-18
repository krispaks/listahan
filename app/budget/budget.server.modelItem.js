var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var BudgetItemSchema = new Schema({
	name: {
		type: String
	},
	amount: {
		type: Number,
		default: 0
	},
	note: {
		type: String
	},
	isShared: {
		type: Boolean,
		default: false
	},
	isCharged: {
		type: Boolean,
		default: false
	},
	datePaid: {
		type: Date,
		default: Date.now
	},
	rasselAmount: {
		type: Number,
		default: 0
	},
	khrisAmount: {
		type: Number,
		default: 0	
	},
	payer: {
		type: Schema.ObjectId,
		ref: 'user'
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

BudgetItemSchema.set('toJSON', {
	getters: true, 
	virtuals: true
});

mongoose.model('budgetItem', BudgetItemSchema);