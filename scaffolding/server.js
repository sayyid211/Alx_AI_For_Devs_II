const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); //allow the server to accept json data

let items = [];

/**
 * get items
 */
app.get('/items', (req, res) => {
    res.json(items);
});

/**
 * post items
 */
app.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});