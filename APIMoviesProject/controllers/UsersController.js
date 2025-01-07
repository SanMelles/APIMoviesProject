const {db} = require("../db");
const Utils = require("./utils");
exports.getAll = async (req, res) => {
    const users = await db.users.findAll();
    console.log(users)
    res
    .status(200)
    .send(users.map(({ID, Username}) => {return {ID, Username}}))
}
exports.getById = async (req, res) => {
    const user = await getUser(req, res);
    if (!user) { return };
    return res.send(user);
}
exports.create = async (req, res) => {
    if (!req.body.Username ||
        !req.body.Firstname||
        !req.body.Lastname||
        !req.body.Email||
        !req.body.SecureLevel||
        !req.body.LevelKey) 
    {
        return res.status(400).send({error: "One or multiple parameters are missing"});
    }
    let newUser =
    {
        UserName: req.body.Username,
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Email: req.body.Email,
        SecureLevel: req.body.SecureLevel,
        LevelKey: req.body.LevelKey,
    }
    const createdUser = await db.users.create(newUser);
    res.status(201)
    .location(`${Utils.getBaseURL(req)}/users/${createdUser.ID}`)
    .send(createdUser.ID);
}
exports.editById = async (req, res) => {
    const user = await getUser(req, res);
    if (!user) { return };
    if (!req.body.Username ||
        !req.body.Firstname||
        !req.body.Lastname||
        !req.body.Email||
        !req.body.SecureLevel||
        !req.body.LevelKey) 
    {
        return res.status(400).send({error: "One or multiple parameters are missing"});
    }
    user.UserName = req.body.Username
    user.Firstname = req.body.Firstname
    user.Lastname = req.body.Lastname
    user.Email = req.body.Email
    user.SecureLevel = req.body.SecureLevel
    user.LevelKey = req.body.LevelKey
    await user.save();
    res.status(201)
        .location(`${getBaseURL(req)}/users/${user.ID}`)
        .send(user);
}
exports.deleteById = async (req,res) => {
    const user = await getUser(req, res);
    if (!user) { return };
    await user.destroy();
    res.status(204).send({error: "No Content"});
}