require('dotenv').config();

const port = process.env.PORT || 3001;
const host = 'localhost';
const express = require('express');
const cors = require('cors');
const app = express();

const swaggerUI = require('swagger-ui-express');
const yamljs = require('yamljs');
const swaggerDoc = yamljs.load('./docs/swagger.yaml');

const {sync} = require('./db');

app.use(cors());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use(express.json());


app.get('/movies', (req, res) => {
    res.send([movies]);
});

app.post('/movies', (req, res) => {
    movies.push(req.body.name);
    res.send([movies]);
});

app.get('/movies/:id', (req, res) => {
    res.send(movies[req.params.id]);
});

app.put('/movies/:id', (req, res) => {
    movies[req.params.id] = req.body.name;
    res.send(movies[req.params.id]);
});


require("./routes/movieRoutes")(app);
require("./routes/userRoutes")(app);
require("./routes/commentRoutes")(app);

app.listen(port, async() => {
    if (process.env.SYNC === 'true') {
        await sync();
    }
    console.log(`Api on saadaval aadressil: http://${host}:${port}`);
});


