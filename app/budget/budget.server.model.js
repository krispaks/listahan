var mongoose = require('mongoose');
var crypto = require('crypto');
var moment = require('moment');

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
	//return moment(this.dateRangeFrom.toString(), 'MM-DD-YYYY') + ' - ' + moment(this.dateRangeTo.toString(), 'MM-DD-YYYY');
	return moment(this.dateRangeFrom).format('MM.DD.YYYY') + ' - ' + moment(this.dateRangeTo).format('MM.DD.YYYY'); 
});

BudgetSchema.set('toJSON', {
	getters: true, 
	virtuals: true
});

mongoose.model('budget', BudgetSchema);