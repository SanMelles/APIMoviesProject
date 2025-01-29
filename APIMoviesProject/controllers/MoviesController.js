const {db} = require("../db");
const Utils = require("./utils");

exports.getAll = async (req, res) => { 
    const movies = await db.movies.findAll();
    console.log(movies)
    res
    .send(movies
        .map(({MovieID, MovieName}) => {return {MovieID, MovieName}})
    )
}

exports.getById = async (req, res) => {
    const movie = await getMovie(req, res);
    if (!movie) { return};
    return res.send(movie);
    }

exports.create = async (req, res) => {
    if (!req.body.MovieName || 
        !req.body.ReleaseYear ||
        !req.body.Genre || 
        !req.body.DurationHours ||
        !req.body.DurationMinutes) 
    {   return res.status(400).send({error: "One or multiple parameters are missing"});    }

    let newMovie = {        
        MovieName: req.body.MovieName,
        ReleaseYear: req.body.ReleaseYear,
        Genre: req.body.Genre,
        DurationHours: req.body.DurationHours,
        DurationMinutes: req.body.DurationMinutes
    }
    const createdMovie = await db.movies.create(newMovie);
    res.status(201)
        .location(`${Utils.getBaseURL(req)}/games/${createdMovie.MovieID}`)
        .send(createdMovie.MovieID);
}

exports.editById = async (req,res) => {
    const movie = await getMovie(req, res);
    if (!movie) { return };
    if (!req.body.MovieName || 
        !req.body.ReleaseYear ||
        !req.body.Genre || 
        !req.body.DurationHours ||
        !req.body.DurationMinutes
        ) 
    {   return res.status(400).send({error: "One or multiple parameters are missing"});    }
    movie.MovieName = req.body.MovieName
    movie.ReleaseYear = req.body.ReleaseYear
    movie.Genre = req.body.Genre
    movie.DurationHours = req.body.DurationHours
    movie.DurationMinutes = req.body.DurationMinutes
    await movie.save();
    return res.status(201)
        .location(`${Utils.getBaseURL(req)}/movies/${movies.MovieID}`)
        .send(movie);
}

exports.deleteById = async (req, res) => {
    const movie = await getMovie(req,res);
    if (!movie) { return };
    await movie.destroy();
    res.status(204).send({error: "No Content"});
    
}

const getMovie = async (req, res) => {
    const idNumber = parseInt(req.params.MovieID);
    if (isNaN(idNumber)) {
        res.status(400).send({error: `Invalid movie ID ${req.params.MovieID}`});
        return null;
    }
    const movie = await db.movie.findByPk(idNumber);
    if (!movie) {
        res.status(404).send({error: "Movie not found"});
        return null;
    }
    return movie;
}