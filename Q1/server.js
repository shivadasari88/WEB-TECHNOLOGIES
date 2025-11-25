const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
 
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
 
let contacts = [];
 
app.use(express.static(path.join(__dirname, 'public')));
 
app.post('/register', (req, res) => {
    const { username, email, phone } = req.body;
 
    contacts.push({
        username,
        email,
        phone
    });
 
    res.send(`
        <h2>Contact Saved Successfully!</h2>
       
        <a href="/contacts">View All Contacts</a>
    `);

 
});
 
app.get('/contacts', (req, res) => {
    res.json(contacts);
});
 
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});