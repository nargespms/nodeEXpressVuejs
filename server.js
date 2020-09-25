const express = require ("express");
const bodyParser = require ("body-parser");
const cors = require ("cors");
const mongoose = require ("mongoose");
const morgan = require ("morgan");
const posts = require('./routes/api/posts')
const {PORT , mongoUri} = require ('./config')

const app = express();

// middleWare
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));

mongoose
    .connect(mongoUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.get('/' , (req,res) => {
    res.send('hello beautifull!')
})
app.get('/api' , (req,res) => {
    res.send('here is api route')
})
app.get('/api/posts' , (req,res) => {
    res.send('postsssssss')
})
console.log(posts);
app.get('/api/posts' , posts);

app.listen(PORT , ()=> {console.log(`server is listening on ${PORT}`);})