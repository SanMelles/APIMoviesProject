module.exports = (sequelize, DataTypes) => {
    const GameComment = sequelize.define('GameComment', {
        GameCommentID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        GameID: {
            type: DataTypes.FOREIGNKEY,
            // autoIncrement: false,
            // primaryKey: false,
            references:{
                model: Game,
                key: "GameID"
            }
        },
        CommentId: {
            type: DataTypes.FOREIGNKEY,
            // autoIncrement: false,
            // primaryKey: false,
            references:{
                model: Comment,
                key: "CommentID"
            }
        },
    });
    Game.BelongsToMany(Comment, {through: GameComment})
    Comment.BelongsToMany(Game, {through: GameComment})
    Game.HasMany(GameComment)
    GameComment.BelongsTo(Game)
    Comment.HasMany(GameComment)
    GameComment.BelongsTo(Comment);

    console.log(GameComment === sequelize.models.GameComment);
    return GameComment;
}