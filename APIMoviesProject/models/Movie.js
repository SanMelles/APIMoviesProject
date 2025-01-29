const { toDefaultValue } = require("sequelize/lib/utils");

module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define(
        'Movie',
        {
            MovieID:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            MovieName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Genre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            ReleaseYear: {
                type: DataTypes.DATEONLY
            },
            DurationHours: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                allowNull: false,
            },
            DurationMinutes: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                allowNull: false,
            }
        }
    );
    
/*     Game.associate = (models) => {
        Game.hasMany(models.Comment, {
            foreignKey: 'GameID',
            as: 'comments',
            onDelete: 'CASCADE',
            unique: false,
        })
    }
 */

    console.log(Movie === sequelize.models.Movie);
    return Movie;
}