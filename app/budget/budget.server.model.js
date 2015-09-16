var mongoose = require('mongoose');
var crypto = require('crypto');

var Schema = mongoose.Schema;

var BudgetSchema = new Schema({
	dateRangeFrom: {
		type: Date,
		default: Date.now
	},
	dateRangeTo: {
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

BudgetSchema.virtual('dateRange')
.get(function(){
	return this.dateRangeFrom.toString() + ' - ' + this.dateRangeTo.toString(); 
});

BudgetSchema.set('toJSON', {getters: true, virtuals: true})

mongoose.model('budget', BudgetSchema);