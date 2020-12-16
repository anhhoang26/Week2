const db = require('../models/index');
const moment = require('moment');
const { Product } = require('../models/index');
const { Shop } = require('../models/index');


exports.addShop = async function (req) {
	try{
		const newShop = await Shop.create({
			...req.body,
			updatedAt : moment(),
			createdAt : moment()
		});
		return newShop.dataValues;
	}
	catch(err){
		console.log(err);
		return null;
	}
}