const express = require ("express");
const bodyParser = require ("body-parser");
const cors = require ("cors");
const mongoose = require ("mongoose");
const morgan = require ("morgan");
const postsRoutes = require('./routes/api/posts')
const {PORT , mongoUri} = require ('./config')

const app = express();

// middleWare
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));
app.use('/api/posts', postsRoutes);

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

console.log('ghable post');
console.log(postsRoutes);
console.log('bade post');

app.listen(PORT , ()=> {console.log(`server is listening on ${PORT}`);})