const shopService = require('../services/shopService.js')

exports.addShop = async(req, res) => {
	const newShop = await shopService.addShop(req);
	return res.json(newShop);
}