module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            ID:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            Firstname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Lastname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            SecureLevel: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            LevelKey: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: "0-0",
            },
        }
    );
    console.log(User === sequelize.models.User);
    return User;
}