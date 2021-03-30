
const express = require('express')
const app = express()
 
const port =process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World akjakjssadj')
})
 
app.listen(port, ()=>{
 console.log(`server corriendo en el puerto: ${port}`);
});
