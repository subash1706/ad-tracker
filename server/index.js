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
app.post("/post_query",() => {
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
    //--------------contact details---------------//
    app.post("/post-query",() => {
      console.log("Hi");
      console.log(request);
      var object = {
          name: request.body.name,
          contactnumber:request.body.contactnumber,
          email: request.body.email,
          Message: request.body.Message,
          type:'Contactdata'
      };
      dbconnection.insert(object).then(
          (res) => {
            console.log("Contact data posted");
            response.send(res);
          },
          (rej) => {
            console.log("Contact data cant posted");
            response.send(rej);
          }
        );
      })
    //--------------add content--------------------//
    app.post("/addcontentdata",(request,response) => {
      console.log("Hi");
      console.log(request);
      var object = {
        Topic: request.body.Topic,
        message: request.body.message,
        id: request.body.id,
        rev: request.body.rev,
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
      app.get("/editcontent/:id",(request,response) => {

        console.log(request.params.id);
        var object={
          selector:{
            id: request.params.id,
            type:"addcontentdata"
          }
          
        };
        dbconnection.edit(request.params.id,"ad-tracker").then(
            (res) => {
              response.send(res);
            }
          )
      });
      //------//
      app.get("/getcontent", (request, response) => {
        console.log(request);
        console.log("get called");
        var data={
          selector:{
            type:"addcontentdata",
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
      //------//
      app.get("/getbyId",(request) =>{
        console.log(request);
        var databyid={
          selector:{
            id:`${_id}`
          }
        }
      })

      app.delete("/deletecontenttopicmessage/:id/:id1", (request, response) => {
        dbconnection.del_id(request.params.id, request.params.id1, "ad-tracker")
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

    //----//

    app.put('/update_query', (request, response) => {
      console.log('hey');
      var object = {
        Topic: request.body.Topic,
        message: request.body.message,
        type: 'addcontentdata'
      };
      console.log(request.body.id);
      console.log(request.body.rev);
  
      dbconnection.updatedata(object, 'ad-tracker').then((res) => {
        if (res) {
          console.log('updated....');
          response.send(res);
        } else {
          console.log('can not updated....');
          response.send('error');
        }
      });
    }); 
    
    app.listen(port, (err) => {
      if (err) {
        return console.log("something bad happened", err);
      }
    
      console.log(`server is listening on http://localhost:${port}`);
    });



