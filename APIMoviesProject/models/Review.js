module.exports = (sequelize, DataTypes) => {
    const MovieReview = sequelize.define('MovieReview', {
        MovieReviewID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        MovieID: {
            type: DataTypes.FOREIGNKEY,
            // autoIncrement: false,
            // primaryKey: false,
            references:{
                model: Game,
                key: "MovieID"
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
    Movie.BelongsToMany(Comment, {through: GameComment})
    Comment.BelongsToMany(Game, {through: GameComment})
    Game.HasMany(GameComment)
    GameComment.BelongsTo(Game)
    Comment.HasMany(GameComment)
    GameComment.BelongsTo(Comment);

    console.log(GameComment === sequelize.models.GameComment);
    return GameComment;
}