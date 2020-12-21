const express = require('express');

const authController = require('../controllers/authController');
const authValidator = require('../validator/auth');
const productController = require('../controllers/productController');
const userController =  require('../controllers/userController');
const orderController = require('../controllers/orderController.js');
const shopController = require('../controllers/shopController.js');

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
//Lay cac order cua user
router.get('/user/:user_id/purchase', orderController.getOrderByIdUser);
//Lay thong tin Shop tu product ID
router.get('/product/:product_id', productController.getInfoShopByProductId);

//Tao shop moi
router.post('/register/shop', shopController.addShop);
//Top Sale theo tung shop demo
router.get('/shop/:shop_id/topsales', productController.getTopSaleByShopId);

//Top 10 order gan nhat thep tung shop
router.get('/shop/:shop_id/recentorder', orderController.getRecentOrderByShopId);

// Update status order
router.put('/shop/:shop_id/order/:order_id', orderController.changeStatusOrder);
//Lay toan bo order cua shop
router.get('/shop/:shop_id/order', orderController.getOrderByShopId);
//Lay total order shop
router.get('/shop/:shop_id/totalorder', orderController.getTotalOrderByShopId);
//Lay total money 
router.get('/shop/:shop_id/totalMoney', orderController.getTotalMoney);
//Tao order moi
router.post('/user/:user_id/checkout', orderController.addOrder);
module.exports = router;
