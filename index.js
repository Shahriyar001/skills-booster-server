const express = require('express')
const app = express();
const port = process.env.PORT || 5000;


const categories = require('./data/categorys.json');

app.get('/', (req, res) => {
    res.send('APi running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log('corses running on port', port);
})