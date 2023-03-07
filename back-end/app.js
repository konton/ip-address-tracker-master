const express = require('express');
const ipFetch = require('./ipFetch');
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/getip', async (req, res) => {
    const address = req.body.address;
    const url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_4I8EuUR3buRJxvbw2lWD6jlkfikcm&ipAddress=" + address;
    const response = await ipFetch(url)
    const data = await response;
    res.send(data)
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});