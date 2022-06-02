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
        contact_number: request.body.contact_number,
        type:'signupData'
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
    })
    //--------------add content--------------------//
    app.post("/addcontentdata",(request,response,next) => {
      console.log("Hi");
      console.log(request);
      var object = {
        Topic: request.body.Topic,
        message: request.body.message,
        type:'addcontentdata'
      };
      dbconnection.insert(object).then(
          (req) => {
            console.log("content added ");
            response.send(req);

          },
          (res) => {
            console.log("content cannot be added");
            response.send(res);
          }
        )
      })
      //------//
      app.get("/getcontent", (request, response) => {
        console.log(request);
        console.log("get called");
        var data={
          selector:{
            type:"addcontentdata",
          },
        };
        // console.log("Fetching Begins");
        dbconnection.get(data,"ad-tracker").then((res) => {
          if (res) {
            console.log("process success")
            response.send(res);
            
          } else {
            console.log("process failed")
          }
        });
      });

      app.delete("/deletecontenttopicmessage/:id/:id1", (request, response) => {
        dbconnection
          .del_id(request.params.id, request.params.id1, "ad-tracker")
          .then((res) => {
            if (res) {
              response.send(res);
            } else {
              response.send("error");
            }
          });
      });

      app.get("/loginForm", (request, response) => {
        console.log(request);
        console.log("get called");
        var data={
          selector:{
            type:"signupData",
          },
        };
        dbconnection.get(data,"ad-tracker").then((res) => {
          if (res) {
            console.log("process success")
            response.send(res);
            
          } else {
            console.log("process failed")
          }
        });
      });
    
    app.listen(port, (err) => {
      if (err) {
        return console.log("something bad happened", err);
      }
    
      console.log(`server is listening on http://localhost:${port}`);
    });



