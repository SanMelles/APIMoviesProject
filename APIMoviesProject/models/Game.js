module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define(
        'Game',
        {
            GameID:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primarykey: true,
            },
            GameName: {
                type: DataTypes.STRING,
                allownull: false,
            },
            ReleaseDateEU: {
                type: DataTypes.DATEONLY
            },
            ReviewScore: {
                type: DataTypes.DECIMAL
            },
            Comment: {
                
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

    console.log(Game === sequelize.models.Game);
    return Game;
}