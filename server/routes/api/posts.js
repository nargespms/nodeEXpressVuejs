const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();


// Get Posts
router.get('/' , async(req,res) => {
    const posts = await loadPostsCollections();
    res.send(await posts.find({}).toArray())
    
});


// Add Posts



// Delete Posts





async function loadPostsCollections () {
    // const client = await mongodb.MongoClient.connect
    // ("mongodb+srv://admin:3802025@cluster0.gshcv.mongodb.net/vueApp?retryWrites=true&w=majority" , {
    //     useUnifiedTopology : true
    // });
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://admin:3802025@cluster0.gshcv.mongodb.net/vueApp?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("vueApp").collection("posts");
        // perform actions on the collection object
        client.close();
    });

    // return client.db('vueApp').collection('posts')
}


module.exports = router;


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admin:<password>@cluster0.gshcv.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
