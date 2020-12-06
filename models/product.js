const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize,DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
        this.belongsTo(models.Category,{ foreignKey: 'category_id'});
    }
  }
  Product.init(
    {
      product_id: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true
      },
      category_id: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
      },
      product_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      product_image: {
        type: Sequelize.DataTypes.STRING,
      },
      product_price: {
        type: Sequelize.DataTypes.DOUBLE,
        allowNull: false
      },
      product_description: {
        type: Sequelize.DataTypes.STRING,
      },
      quantityInStock: {
        type: Sequelize.DataTypes.BIGINT,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Product',
      freezeTableName: true
    },
  );
  return Product;
};
