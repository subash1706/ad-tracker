const nodemail = require('nodemailer');
var sender = nodemail.createTransport({
    service:'gmail',
    auth:{
        user:'adtracker6@gmail.com',
        pass:'ad-tracker1706'
    }
})
module.exports.getemail=function(params)
{
var composemail = {
    from:'adtracker6@gmail.com',
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
var composemail = {
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