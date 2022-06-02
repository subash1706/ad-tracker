const Cloudant = require("@cloudant/cloudant");
var url = "https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud";
var username = "apikey-v2-2809fxu62dw0lybt6awh1vn0jxt1srfscx9z33bhudjy";
var password = "ff4e6d701676a004128c9bdb601b52d2";

 var cloudant = Cloudant ({ url: url, username:username, password: password});

insert = function(paramsvalue){
    console.log(paramsvalue);
    return cloudant.use("ad-tracker").insert(paramsvalue);
}
insert = function(paramsvalue1){
  console.log(paramsvalue1);
  return cloudant.use("ad-tracker").insert(paramsvalue1);
}
get = function (data,dbname) {
  return cloudant.use(dbname).find(data);
};

del_id = function (id, id1, dbname) {
  return cloudant.use(dbname).destroy(id, id1);
};

  module.exports = {insert, get, del_id };