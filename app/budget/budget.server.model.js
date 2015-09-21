var mongoose = require('mongoose');
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
	khrisCredit: {
		type: Number,
		default: 0
	},
	khrisExpenseTotal: {
		type: Number,
		default: 0
	},
	rasselSalary: {
		type: Number,
		default: 0
	},
	rasselCredit: {
		type: Number,
		default: 0
	},
	rasselExpenseTotal: {
		type: Number,
		default: 0
	},
	isFullyPaid: {
		type: Boolean,
		default: false
	},
	khrisAmountToGive: {
		type: Number,
		default: 0
	},
	rasselAmountToGive: {
		type: Number,
		default: 0
	},
	totalExpenses: {
		type: Number,
		default: 0
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
	return moment(this.dateRangeFrom).format('MM.DD.YYYY') + ' - ' + moment(this.dateRangeTo).format('MM.DD.YYYY'); 
});

BudgetSchema.virtual('khrisMoneyLeft')
.get(function(){	
	return this.khrisSalary + this.khrisCredit - this.khrisExpenseTotal 
});

BudgetSchema.virtual('rasselMoneyLeft')
.get(function(){	
	return this.rasselSalary + this.rasselCredit - this.rasselExpenseTotal  
});

BudgetSchema.set('toJSON', {
	getters: true, 
	virtuals: true
});

mongoose.model('budget', BudgetSchema);