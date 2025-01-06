const {db} = require("../db");
const Utils = require("./utils");

exports.getAll = async (req,res) => {
    const allcomments = await db.comments.findAll();
    console.log(allcomments)
    res
    .send(allcomments
        .map((
            {CommentID, CommentText}) =>
            {return {CommentID, CommentText}}
        )
    )
}

exports.getById = async (req, res) => {
    const comment = await getComment(req, res);
    if (!comment) { return };
    return res.send(comment);
}

exports.create = async (req, res) => {
    if (!req.body.CommentText) {
        return res.status(400).send({error: "Comment text is required"});
    }
    if (!req.body.GameCommentID) {
        req.body.GameCommentID = 1
    }
    if (!req.body.UserID) {
        req.body.UserID = 1
    }
    let newComment = {
        CommentText: req.body.CommentText,
        GameID: req.body.GameID,
        UserID: req.body.UserID,
    }
    const createdComment = await db.comments.create(newComment);
    res/*.status(201)*/
        .location(`${Utils.getBaseUrl(req)}/games/${createdComment.CommentID}`)
        .sendStatus(201);
}

exports.deleteById = async (req, res) => {
    const comment = await getComment(req, res);
    if (!comment) { return };
    await comment.destroy();
    res.status(204).send({error: "No Content"});
}

const getComment = async (req, res) => {
    const idNumber = parseInt(req.params.CommentID);
    if (isNaN(idNumber)) {
        res.status(400).send({error: `Invalid comment ID ${req.params.CommentID}`});
        return null;
    }
    const comment = await db.comments.findByPk(idNumber);
    if (!comment) {
        res.status(404).send({error: `Comment with ID ${idNumber} not found`});
        return null;
    }
    return comment;
}