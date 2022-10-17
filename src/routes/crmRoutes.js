const routes = (app) => {
    
  app.route('/')
    .get((req,res) =>{
        res.send(`Get method`)
    })

    .post((req,res) =>{
        res.send(`Post method`)
    })

    .put((req,res) =>{
        res.send(`put method`)
    })

    .delete((req,res) =>{
        res.send(`delete method`)
    })
}

module.exports = routes;