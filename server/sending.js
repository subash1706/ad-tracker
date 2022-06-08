const nodemail = require('nodemailer');
let sender = nodemail.createTransport({
    service:'gmail',
    auth:{
        user:'trackspot@outlook.com',
        pass:'track@1706'
    }
})
module.exports.getemail=function(params)
{
let composemail = {
    from:'trackspot@outlook.com',
    to:params,
    subject:`Message`,
    text:'Thank you for contacting us!'
    
}
sender.sendMail(composemail,function(err,res){
    if(err)
    {
        console.log("Mail not sent",err);
    }
    else{
        console.log("Mail  sent",res);
    }
})
}
module.exports.getmail=function(params1)
{
let composemail = {
    from:'trackspot@outlook.com',
    to:'trackspot@outlook.com',
    subject:'Got an message from user',
    text:params1
    
}
sender.sendMail(composemail,function(err,res){
    if(err)
    {
        console.log("Mail not sent",err);
    }
    else{
        console.log("Mail-sent",res);
    }
})
}