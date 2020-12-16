const orderService = require('../services/orderService');

exports.getOrderByIdUser = async (req, res) =>{
	const oderByIdUser = await orderService.getOrderByIdUser(req);
	return res.json(oderByIdUser);
}