const express = require('express');
const bodypraser = require('body-parser');
const app = express();
app.use(express.static("public"));
const port = 8080;
const cors =  require('cors');
const dbconnection  =  require("./database");
const { request, response } = require('express');
app.use(bodypraser.json());
app.use(express.static("public"));
app.use(
    cors({
        origin: "http://localhost:4200",
    })   
);
app.post("/post_query",(request,response,next) => {
    console.log("Hi");
    console.log(request);
    var object = {
        fname: request.body.fname,
        lname: request.body.lname,
        email: request.body.email,
        password: request.body.password,
        confirm_password: request.body.confirm_password,
        contact_number: request.body.contact_number
    };
    dbconnection.insert(object).then(
        (res) => {
          console.log("data posted");
          response.send(res);
        },
        (rej) => {
          console.log("data cant posted");
          response.send(rej);
        }
      );
      //   response.redirect("..");
      console.log("Data added");
    });
    
    app.listen(port, (err) => {
      if (err) {
        return console.log("something bad happened", err);
      }
    
      console.log(`server is listening on http://localhost:${port}`);
    });  

