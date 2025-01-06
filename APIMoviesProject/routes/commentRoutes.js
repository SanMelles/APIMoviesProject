const CommentsController = require('../controllers/CommentsController');

module.exports = (app) => {
    app.route("/comments")
        .get(CommentsController.getAll)
        .post(CommentsController.create)
    app.route("/comments/:GameID")
        .get(CommentsController.getById)
        .delete(CommentsController.deleteById)
}