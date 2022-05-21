const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const cors = require('cors');
const setmail = require('./sending');


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(
  cors({
    origin:'http://localhost:4200'
  })
)

app.get('/', function (request, response) {
  response.json({"name":"subash"});
 });

 app.post('/email',(request,response,next)=>{
  console.log('mmm');
 
  var object ={
    fname:request.body.fname,
    lname:request.body.lname,
    email:request.body.email,
    contact_number:request.body.contact_number,
  }
  setmail.getemail(request.body.email);
  console.log(object);
})
 app.listen(port, (err) => {
  if (err) {
   return console.log('something bad happened', err);
  }
 
  console.log(`server is listening on http://localhost:${port}`);
 });