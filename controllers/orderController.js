const orderService = require('../services/orderService');

exports.getOrderByIdUser = async (req, res) =>{
	const oderByIdUser = await orderService.getOrderByIdUser(req);
	return res.json(oderByIdUser);
}
exports.getRecentOrderByShopId = async(req, res) =>{
	const recentOrder = await orderService.getRecentOrderByShopId(req);
	return res.json(recentOrder);
}
exports.getOrderByShopId = async(req, res) =>{
	const orderByShopId = await orderService.getOrderByShopId(req);
	return res.json(orderByShopId);
}
exports.changeStatusOrder = async(req, res) =>{
	const newOrder = await orderService.changeStatusOrder(req);
	return res.json(newOrder);
}