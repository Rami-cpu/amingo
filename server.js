const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const User = require('./models/User')
const db = "mongodb+srv://Rami:123@cluster0-h1xzp.mongodb.net/test?retryWrites=true&w=majority"

mongoose
    .connect(db, {})
    .then (()=> console.log("DB Connected"))
    .catch(err=> console.log(err)); 
    const app = express();
    app.use(bodyParser.urlencoded({extended: false}));
    


//User routes
const userRoutes = require('./routes/User');
app.use('/users', userRoutes);

const postRoutes = require('./routes/Post');
app.use('/posts', postRoutes);

 app.get( '/', (req, res) => res.json(
     {
         msg:'this is my message'
     }
 )); 
const port = 5000;
app.listen(port, () => console.log (`your application is running @ http://localhost:${port}`));
