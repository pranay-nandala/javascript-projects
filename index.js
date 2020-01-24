const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ytlist = require('youtube-playlist');
 
const url = 'https://www.youtube.com/watch?v=dqTTojTija8&list=PLtY1iLdia2RxqiGgxKfWIfrh1ck_YxH0A';
 

const app = express();

app.use(express.static(path.join(__dirname, "dist")));// Set static path
app.use(bodyParser.json());

app.use('/api/ytlist', async function (req,res) {
    var list = await ytlist(url, ['id','name']);
    res.json(list.data.playlist);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server started on port ${port}`));