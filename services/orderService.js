const db = require('../models/index');
const { Order } = require('../models/index');
const { Orderdetail} = require('../models/index');

exports.getOrderByIdUser = async function(req) {
	try {
		const orderByIdUser = await db.sequelize.query(`SELECT status, user_id,
	(SELECT SUM(priceEach * quantity) FROM orderdetail WHERE o.orderNumber = orderdetails.orderNumber) AS 'total' 
		FROM order o 
			WHERE user_id = ?`{
			type: db.sequelize.QueryTypes.SELECT
		});
	}
	catch(err){
		console.log(err);
		return null;
	}
}