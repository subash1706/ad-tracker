const express = require('express');
const bodypraser = require('body-parser');
const app = express();
const port = 8000;
const setmail = require('./sending');
const cors =  require('cors');
const dbconnection  =  require("./database");
app.use(bodypraser.json());
app.use(express.static("public"));
app.use(
    cors({
        origin: "http://localhost:4200",
    })   
);

//--------------posting contact details---------------//

    app.post("/contactDetails",(request,response) => {
      let object = {
          fname:request.body.fname,
          contactnumber:request.body.contactnumber,
          email: request.body.email,
          message: request.body.message,
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

//--------------Adding  content data--------------------//

    app.post("/addContentData",(request,response) => {
      let object = {
        Topic: request.body.Topic,
        message: request.body.message,
        like:request.body.like,
        view:request.body.view,
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

//--------Getting Id for editing content------// 

      app.get("/editContent/:id",(request,response) => {
        dbconnection.edit(request.params.id,"ad-tracker").then(
            (res) => {
              response.send(res);
            }
          )
      });

//-------Getting content data---------//

      app.get("/getContent", (_request, response) => {
        let data={
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
      
//---------Getting Contact data----------//
      app.get("/getContact", (_request, response) => {
        let data={
          selector:{
            type:"Contactdata",
          },
        };
        dbconnection.get(data,"ad-tracker").then((res) => {
          if (res) {
            console.log("success")
            response.send(res);
            
          } else {
            console.log("failed")
          }
        });
      });

//------------Deleting content data--------//
      app.delete("/deleteContentTopicMessage/:id/:id1", (request, response) => {
        dbconnection.del_id(request.params.id, request.params.id1, "ad-tracker")
          .then((res) => {
            if (res) {
              response.send(res);
            } else {
              response.send("failed");
            }
          });
      });

//----------------Deleting Contact data-------------------//      

      app.delete("/deleteContact/:id/:id1", (request, response) => {
        dbconnection.del_id(request.params.id, request.params.id1, "ad-tracker")
          .then((res) => {
            if (res) {
              response.send(res);
            } else {
              response.send("error");
            }
          });
      });

//--------------Getting Login form data-----//

      app.get("/loginForm", (_request, _response) => {
        let data={
          selector:{
            type:"signupData",
          },
        };
        dbconnection.get(data,"ad-tracker").then((response) => {
          if (response) {
            console.log("process success")
            response.send(response);
            
          } else {
            console.log("process failed")
          }
        });
      });

    //-----------updating content data------------//

    app.put('/update_query', (request, response) => {
      let object = {
        Topic: request.body.Topic,
        message: request.body.message,
        like:request.body.like,
        view:request.body.view,
        _id:request.body._id,
        _rev:request.body._rev,
        type: 'addcontentdata'
      };  
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

//----------------------//
    
    app.listen(port, (err) => {
      if (err) {
        return console.log("something bad happened", err);
      }
    
      console.log(`server is listening on http://localhost:${port}`);
    });

//-------------sending Email to User------- //

    app.post('/email',(request)=>{
      setmail.getemail(request.body.email);
    })
//-----------sending Email to admin--------//

    app.post('/mail',(request) =>{
      setmail.getmail(request.body.Message);
    })
    



