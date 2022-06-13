const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.disable("x-powered-by");
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
  setmail.getemail(request.body.email);
})
app.post('/mail',(request) =>{
  setmail.getmail(request.body.message);
})

 app.listen(port, (err) => {
  if (err) {
   return console.log('something bad happened', err);
  } 
  console.log(`server is listening on http://localhost:${port}`);
 });