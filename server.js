const express = require('express');
const app = express();
const port = 3000; //windows 5000 for mac users

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

//ROUTES
app.get('/',(req, res)=>{
    res.send(`<h1> Home Route </h1>`)
})

app.get('/awesome', (req, res)=>{
    res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
})

app.get('/howdy/:firstname', (req, res)=>{
    console.log(req.params);
    console.log(req.query)

    res.send(`hello ${req.query.title} ${req.params.firstname}. The year is ${req.query.year}`)
})

app.get('/hello/:firstname/:lastname', (req, res)=> {
    console.log(req.params)
    res.send(`hello ${req.params.firstname} ${req.params.lastname}`)
})


app.get('/:id', (req, res)=> {
    //res.send(plants[0])
    if(plants[req.params.id]){
        res.send(plants[req.params.id])
    } else {
        res.send(`cannot find anything at this index: ${req.params.id}`)
    }
});




app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});