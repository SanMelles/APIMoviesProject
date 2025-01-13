module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define(
        'Comment',
        {
            CommentID:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            CommentText: {
                type: DataTypes.TEXT('tiny'),
                allowNull: false,
            },
            UpvoteCount: {
                type: DataTypes.INTEGER,
                default: 0,
            },
            DownvoteCount: {
                type: DataTypes.INTEGER,
                default: 0,
            },
            GameCommentID:{
                type: DataTypes.INTEGER,
            },
            UserID:{
                type: DataTypes.INTEGER,
            },
/*             GameID: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Games',
                    key: 'GameID',
                    unique: false
                }
            } */
        }
    );

/*     Comment.associate = (models) => {
        Comment.belongsTo(models.Game, { foreignKey: 'GameID', as: "game"});
    }
 */
    console.log(Comment === sequelize.models.Comment);
    return Comment;
}