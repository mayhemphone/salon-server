let mongoose = require('mongoose')

let consultationSchema = new mongoose.Schema({
	stylist:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Stylist'
	},
	client:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Client'
	},
	currentHair: [{
		type: String,
		required:true
	}],
	dreamHair: [{
		type: String,
		required: true,
	}],
	clientComment: {
		type: String,
		required: true,
	},
	stylistComment: {
		type: String,
		required: false,
	},
	approved: {
		type: Boolean,
		required: false,
	},
	products: [{
		type: String,
		required: false,
	}],
	apptLength: {
		type: Number,
		required: false,
	},
	estimate: {
		type: Number,
		required: false,
	},
	scheduled: {
		type: Boolean,
		required: false
	}

});

module.exports = mongoose.model('Consultation', consultationSchema)