const express = require('express')
const app = express();

const PORT = process.env.PORT || 5001;
const path = require('path');
const router = express.Router();

app.use(express.static('views'));
app.use('/', router)

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/about.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/home.html'));
});

app.listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`);
});
