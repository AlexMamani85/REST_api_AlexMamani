var express = require('express');

var bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

// To pass CORS policy
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
    res.append('Access-Control-Allow-Headers', 'Content-Type, authorization');
    next();
});

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser:true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const BlogSchema = require('./src/models/crmModel');
const blogModel = mongoose.model('blog', BlogSchema);

app.post('/newBlog', (req, res) =>{
    let blog = new blogModel(req.body);
    blog.save((err, blogModel)=>{
        if(err) {
            res.send(err);
        }
        res.json(blog);
    })
})


let getAllBlogs = (req, res) =>{
    blogModel.find({},(err,blogs)=>{
        if(err){
            res.send(err);
        } else{
            res.json(blogs);
        } 
    })
}

app.get('/blogs', getAllBlogs)

let getBlogByID = (req, res) =>{

    blogModel.findById((req.params.blogID), (err, blog)=>{
        if(err){
            console.log("error")
            res.send(err);
        }
        console.log(blog)
        res.json(blog);
    })
}

app.get('/blog/:blogID', getBlogByID);


let getBlogByTitle = (req, res) =>{
    words=req.params.words;
    blogModel.find({title: { $regex: words }},(err,blogs)=>{
        if(err){
            res.send(err);
        } else{
            res.json(blogs);
        } 
    })
}

app.get('/busqueda/:words', getBlogByTitle);

let updateBlog = (req, res) =>{
    blogModel.findOneAndUpdate({_id: req.params.blogId}, req.body, {new: true}, (err, updatedBlog)=>{
        if(err){
            res.send(err);
        }
        res.json(updatedBlog);
    })
}

app.put('/blog/:blogId', updateBlog);


let deleteBlog = (req, res) => {
    blogModel.remove({_id: req.params.blogId}, (err, blog) =>{
        if(err){
            res.send(err);
        }
        res.json({message: 'Blog Deleted Successfully'})
    })
}

app.delete('/blog/:blogId', deleteBlog);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)   
})