const nodemail = require('nodemailer');
let sender = nodemail.createTransport({
    service:'gmail',
    auth:{
        user:'adtracker6@gmail.com',
        pass:'bambjygebpcuytti'
    }
})
module.exports.getemail=function(params)
{
let composemail = {
    from:'adtracker6@gmail.com',
    to:params,
    subject:'Welcome to Track Spot',
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
    from:'adtracker6@gmail.com',
    to:'adtracker6@gmail.com',
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