const { Router } = require('express');
const posts = require('../../models/posts');

const router = Router();

// 
router.get('/' , async(req,res) => {
    try {
        const posts = await posts.find();
        if (!posts) {
            throw new Error ('No posts here... ')
        }
        const sorted = posts.sort((a,b)=>{
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
        
    } catch (error) {
        res.status(500).json({message :error.message})
    }
})


// 

router.post('/' , async (req,res)=> {
    const posts = new posts(req.body);

    try {
        const posts = await newPosts.save()
        if(!posts) {
            throw new Error('Something went wrong saving new post')
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message :error.message})
    }
})

router.put('/:id' ,async (req,res) => {
    const {id } = req.params;
    try {
        const response = await posts.findByIdAndUpdate(id,req.params);
        if(!response) {
            throw new Error ('Something went wrong...')
        }
        const updated = {...response._doc , ...req.body}
        res.status(200).json(updated);
    } catch (error) {
         res.status(500).json({message :error.message})
    }
    

})

// 
router.delete('/:id' ,async (req,res) => {
    const {id } = req.params;
    try {
        const removed = await posts.findByIdAndDelete(id);
        if(!removed) {
            throw new Error ('Something went wrong...')
        }
        res.status(200).json(removed);
    } catch (error) {
         res.status(500).json({message :error.message})
    }
    

})

module.exports = router;