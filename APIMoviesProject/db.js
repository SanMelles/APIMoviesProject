const { Sequelize, DataTypes} = require("sequelize");
const Movie = require('./models/Movie');

const sequelize = new Sequelize(
    process.env.DB_DATANAME, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOSTNAME,
        dialect: "mariadb",
        logging: console.log,
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");        
    } catch (error) {
        console.error("Connection failed: " + error)
    }
})();

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.movies = require("./models/Movie")(sequelize, DataTypes);
db.users = require("./models/User")(sequelize, DataTypes);
db.comments = require("./models/Comment")(sequelize, DataTypes, db.movies);


db.movies.hasMany(db.comments)
db.comments.belongsTo(db.movies);

const sync = (async () => {
    await sequelize.sync({ alter: true});
    console.log("models have been synchronised successfully")
});

module.exports = {db, sync};