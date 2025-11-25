const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
    const { firstString, secondString, thirdString } = req.body;

    res.send(`
        <h2>Received Data:</h2>
        <ul>
            <li>${firstString}</li>
            <li>${secondString}</li>
            <li>${thirdString}</li>
        </ul>
    `);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});