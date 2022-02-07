//installed express and cors using the following command: npm i express cors
//cors is a package that allows our client and server to communicate with each other without the need for advanced configuration

const express = require('express'); //imports express package into index.js
const cors = require('cors'); //imports cors package into index.js

const app = express(); //saves functionality of Express to this variable

app.use(cors());
app.use(express.json()); //sets up server to accept JSON object responses

app.get('/api/users', (req, res) => {

    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends); //
})

app.get('/weather/:temperature', (req, res) => {

    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);

    // const { temperature } = req.params;    //does the same as the two lines above but destructures the object
    // const phrase = `<h3>It was ${temperature} today</h3>`;
    // res.status(200).send(phrase);
})

app.listen(4000, () => console.log('Server running on port 4000'));