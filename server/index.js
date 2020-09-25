const express = require ("express");
const bodyParser = require ("body-parser");
const cors = require ("cors");

const app = express();

// middleWare

app.use(bodyParser.json());
app.use(cors());



const posts = require('./routes/api/posts');
app.use('/api/posts' , posts)


// initializing port for app

const port = process.env.PORT || 3300;

app.listen(port , ()=> {console.log(`server is listening on ${port}`);})