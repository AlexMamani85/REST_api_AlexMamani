var express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./src/routes/crmRoutes')

// app.use(function(req,res,next){
//     console.log('Time', Date.now);
// })

app.get('/', function(req, res, next){
    console.log('Req Method', req.method)
    next();
}, function(req, res, next){
    console.log('Req Original Url', req.originalUrl)
    next();
}, function(req, res, next){
    res.send('Req was successfull')    
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)   
})