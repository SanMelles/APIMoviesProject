module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define(
        'Game',
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
            GameID: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Games',
                    key: 'GameID'
                }
            }
        }
    );

    console.log(Comment === sequelize.models.Comment);
    return Comment;
}