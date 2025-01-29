const MoviesController = require('../controllers/MoviesController');
module.exports = (app) => {
    app.route("/movies")
        .get(MoviesController.getAll)
        .post(MoviesController.create)
    app.route("/movies/:id")
        .get(MoviesController.getById)
        .put(MoviesController.editById)
        .delete(MoviesController.deleteById)
}