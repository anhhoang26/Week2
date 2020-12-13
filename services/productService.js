const bcrypt = require('bcrypt');
const moment = require('moment');
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/constant');

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

exports.getProductByShopId = async function(req){
	try {
		const productByShopId = await Product.findAll({
			where :{
				shop_id : req.params.shop_id
			}
		});
		let products = [];
		for (product of productByShopId){
			products.push(product.dataValues);
		}
		return products;
	}
	catch(err){
		console.log(err);
		return null;
	}
}

exports.changeInfoProduct = async function(req) {
	try {
		const product = await Product.findByPk(req.params.product_id);
		if (product){
			product.product_name = req.body.product_name;
			product.product_price = req.body.product_price;
			product.product_description = req.body.product_description;
			product.quantityInStock = req.body.product;
			const updateProduct = await product.save();
			return updateProduct.dataValues;
		}
	}
	catch(err){
		console.log(err);
		return null;
	}
}

exports.addProduct = async function(req) {
	try {
		const newproduct = await Product.create({
			...req.body,
			shop_id : req.params.shop_id,
			createdAt : moment(),
			updatedAt : moment()
		});
		return newproduct.dataValues;
	}
	catch(err) {
		console.log(err);
		return null;
	}
}

exports.deleteProduct = async function(req) {
	try {
		const product = await Product.findByPk(req.params.product_id);
		const deleproduct = await product.destroy();
		return deleproduct.dataValues;
	}
	catch(err) {
		console.log(err);
		return null;
	}
}