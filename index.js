var express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res) =>{
    res.send(`Node and Express server is running on port: ${PORT}`)
});

app.post('/', (req,res) =>{
    res.send(`Post method`)
});

app.put('/', (req,res) =>{
    res.send(`put method`)
});

app.delete('/', (req,res) =>{
    res.send(`delete method`)
});



app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)   
})