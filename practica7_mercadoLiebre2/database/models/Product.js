module.exports = (sequelize, DataTypes) => {
    alias = "Product"
    cols = {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        createAt: {
            type: DataTypes.DATE
        },
        createAt: {
            type: DataTypes.DATE
        }
    };
    config = {
        tableName: "products",
        timeStamp: true
    };
    const Product = sequelize.define(alias, cols, config)

    return Product;
}