var express = require('express');
var bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./src/routes/crmRoutes');
const mongoose = require('mongoose');

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


let updateBlog = (req, res) =>{
    blogModel.findOneAndUpdate({_id: req.params.blogId}, req.body, {new: true}, (err, updatedBlog)=>{
        if(err){
            res.send(err);
        }
        res.json(updatedBlog);
    })
}

app.put('/blog/:blogId', updateBlog);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)   
})