const express = require('express');

const app = express();
const PORT = 1222;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let data = ['Jack']

// Type -1 website
app.get('/', (req,res) => {
    console.log("Hey World!",req.method)
    console.log(req.params)
    
})

app.get('/dashboard',(req,res)=>{
    res.send("hi")
})

// Type -2 API endpoint
app.get('/api/data',(req,res)=>{
    console.log("Hey World!",req.method)
    res.send(data)
});

app.post('/api/data',(req,res)=>{
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
});
app.listen(PORT , () => console.log(`Server is running on ${PORT}`));