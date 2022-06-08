const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const cors = require('cors');
const setmail = require('./sending');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(
  cors({
    origin:'http://localhost:4200'
  })
)

app.get('/', function (response) {
  response.json({"name":"subash"});
 });

 app.post('/email',(request)=>{
 
  let object ={
    fname:request.body.fname,
    email:request.body.email,
    contact_number:request.body.contact_number,
    Message:request.body.Message
  }
  setmail.getemail(request.body.email);
  console.log(object);
})
app.post('/mail',(request) =>{
  let object ={
    fname:request.body.fname,
    email:request.body.email,
    contact_number:request.body.contact_number,
    Message:request.body.Message
  }
  setmail.getmail(request.body.Message);
  console.log(object);
})

 app.listen(port, (err) => {
  if (err) {
   return console.log('something bad happened', err);
  }
 
  console.log(`server is listening on http://localhost:${port}`);
 });