const db = require('../models/index');
const { Order } = require('../models/index');
const { Orderdetail} = require('../models/index');

exports.getOrderByIdUser = async function(req) {
	try {
		const orderByIdUser = await db.sequelize.query(`SELECT status, user_id, orderDate, requiredDate, shippedDate,order_id,(SELECT SUM(priceEach * quantity) FROM orderdetail WHERE o.order_id = orderdetail.order_id) AS 'total' FROM shopshop.order o 
			WHERE user_id = ${req.params.user_id}`,{
			type: db.sequelize.QueryTypes.SELECT
		});
		return orderByIdUser;
		
	}
	catch(err){
		console.log(err);
		return null;
	}
}

exports.getRecentOrderByShopId = async function (req){
	try{
		const listOrder = await Order.findAll({
			where :{
				shop_id : req.params.shop_id
			},
			order :[["orderDate","DESC"]],
			limit : 8
		});
		const orders = [];
		for(order of listOrder)
			orders.push(order.dataValues);
		return orders;
	}
	catch(err){
		console.log(err);
		return null;
	}
}

exports.getOrderByShopId = async function(req){
	try{
		const orderByShopId = await db.sequelize.query(`SELECT status, orderDate, requiredDate, shippedDate,order_id,(SELECT SUM(priceEach * quantity) FROM orderdetail WHERE o.order_id = orderdetail.order_id) AS 'total' FROM shopshop.order o 
			WHERE shop_id = ${req.params.shop_id}`,{
			type: db.sequelize.QueryTypes.SELECT
		});
		return orderByShopId;
	}
	catch(err){
		console.log(err);
		return null;
	}
}
exports.changeStatusOrder = async function(req){
	try{
		const orderByShopId = await Order.findOne({where :{
			order_id : req.params.order_id,
			shop_id : req.params.shop_id
		}});
		if (orderByShopId) {
			orderByShopId.status = req.body.status;
			const orders = await orderByShopId.save();
			return orders.dataValues;
		}
	}
	catch(err){
		console.log(err);
		return null;
	}
}