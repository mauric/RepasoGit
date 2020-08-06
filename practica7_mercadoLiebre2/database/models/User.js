module.exports = (sequelize, DataTypes) => {
    alias = "User"
    cols = {
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true
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
        tableName: "users",
        timeStamp: true
    };
    const Product = sequelize.define(alias, cols, config)

    return Product;
}