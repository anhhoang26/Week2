const { Model } = require('sequelize');
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productincart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{ foreignKey: 'user_id'});
      this.belongsTo(models.Product,{ foreignKey: 'product_id'});
    }
  }
  Productincart.init(
    {
      productincart_id :{
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      user_id : {
        type : DataTypes.BIGINT,
        allowNull: false,
      },
      product_id : {
        type : DataTypes.BIGINT,
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Productincart',
      freezeTableName: true
    },
  );
  return Productincart;
};