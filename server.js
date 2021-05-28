
const express = require('express')
const app = express()

const router = express.Router; 

const indexRoutes = require('./routes/index');

var mongoose = require('mongoose');


const port =process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended:false}));

app.set('views',__dirname + '/views');
app.set('views engine','ejs');


app.use('/', indexRoutes);

app.use('/', function (req, res){ 
  res.send('hola, mi nuevo server XD')
});


 mongoose.Promise = global.Promise;

 mongoose.connect("mongodb+srv://admin:123456MA@cluster0.awktm.mongodb.net/test",
 {
   useNewUrlParser: true, useUnifiedTopology: true
 }).then((()=> {
   console.log('se conecto correntamente con mongoose db');

   app.listen(port, ()=>{
    console.log(`server corriendo en el puerto: ${port}`);
   });
 })
 );

