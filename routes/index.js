const express = require('express');

const authController = require('../controllers/authController');
const authValidator = require('../validator/auth');
const productController = require('../controllers/productController');
const userController =  require('../controllers/userController');

const router = express.Router();

/* GET home page. */
router.get('/products', productController.getProducts);

// router.get('/login', (req, res, next) => {
//   res.render('auth/login', { title: 'Login page' });
// });

router.get('/login', authController.login);

router.get('/dashboard', (req, res, next) => {
  res.render('dashboard', { title: 'Admin dashboard' });
});

router.get('/',productController.getFirstListProduct);
router.get('/profile/:userId',userController.getUserById);
//Lay san pham theo ID
router.get('/products/:productId', productController.getProductById);
//Lay toan bo san pham theo category
router.get('/category/:categoryId', productController.getProductByCategoryId);
router.post('/products', productController.postProduct);
router.post('/register', authController.register);
//Lay toan bo san pham cua shop
router.get('/shop/:shop_id/product', productController.getProductByShopId);
//Thay doi thong tin san pham
router.put('/shop/:shop_id/product/change/:product_id', productController.changeInfoProduct);
//Them moi product
router.post('/shop/:shop_id/product/add', productController.addProduct);
//Xoa san pham
router.post('/shop/:shop_id/product/delete/:product_id', productController.deleteProduct);

module.exports = router;
