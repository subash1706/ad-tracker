const Cloudant = require("@cloudant/cloudant");
const url = "https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud ";
const username = "apikey-v2-2809fxu62dw0lybt6awh1vn0jxt1srfscx9z33bhudjy";
const password = "ff4e6d701676a004128c9bdb601b52d2";

 const cloudant = Cloudant ({ url: url, username:username, password: password});

let insert = function(paramsvalue1){
  return cloudant.use("ad-tracker").insert(paramsvalue1);
}
insert = function(paramsvalue){
  return cloudant.use("ad-tracker").insert(paramsvalue);
}
let get = function (data,dbname) {
  return cloudant.use(dbname).find(data);
};
 get = function (data,dbname) {
  return cloudant.use(dbname).find(data);
};
let edit = function (data,dbname) {
  return cloudant.use(dbname).get(data);
};

let del_id = function (id, id1, dbname) {
  return cloudant.use(dbname).destroy(id, id1);
};
let updatedata = function(data,dbname){
  return cloudant.use(dbname).insert(data);
}
module.exports = {insert, get, del_id,edit,updatedata };