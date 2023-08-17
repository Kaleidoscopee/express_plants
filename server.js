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

// app.get('/tip/:total/:tipPercentage', (req, res)=> {
//     const tipAmount = req.params.total * req.params.tipPercentage / 100;
//     res.send(`Tip is $${tipAmount}.`);
// })

magic8BallResponse = [
    "It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely",
    "You may rely on it", 
    "As I see it yes", 
    "Most likely", 
    "Outlook good",
    "Yes", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later",
    "Better not tell you now", 
    "Cannot predict now", 
    "Concentrate and ask again",
    "Don't count on it", 
    "My reply is no", 
    "My sources say no",
    "Outlook not so good", 
    "Very doubtful"
];


app.get('/magic/:question', (req, res)=> {
    const question = req.params.question;
    const response = magic8BallResponse[Math.floor(Math.random() * magic8BallResponse.length)];

    res.send(`
        <h1>Your Question: ${question}</h1>
        <h1>Magic 8 Ball Response: ${response}</h1>
    `)
});


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