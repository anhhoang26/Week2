const db = require('../models/index');
const { Product } = require('../models/index');

exports.getProducts = async function (req) {
	if (JSON.stringify(req.params) === '{}')
	{
		try{
			const productsData = await Product.findAll({
			});
			let products = [];
			for(productData of productsData)
			{
				products.push(productData.dataValues);
			}
			return products;
		} catch(err){
			console.log(err);
			return null;
		}
	}

	return null;	
};

exports.getFirstListProduct = async function (req) {
	try{
		const firstListProduct = await db.sequelize.query(`Select* from product`,{
			type: db.sequelize.QueryTypes.SELECT
		});
		return firstListProduct;
	} catch (err){
		console.log(err);
		return err;
	}
	return null;
}

exports.getProductById = async function(req) {
	try{
		const productById = await Product.findOne({
			where : {
				product_id : req.params.productId
			}
		});
		return productById.dataValues;
	}catch (err){
		console.log(err);
		return null;
	}
}
exports.getProductByCategoryId = async function(req){
	try {
		const productByCategorId = await Product.findAll({
			where : {
				category_id : req.params.categoryId
			}
		});
		let products = [];
		for (product of productByCategorId){
			products.push(product.dataValues);
		}
		return products;
	}catch(err){
		console.log(err);
		return null;
	}
}