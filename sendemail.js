var nodemailer = require("nodemailer");

var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'',
        pass:''
    }
});

var mailOptions={
    from:'',
    to:'mailid1,mailid2...',
    subject:'Sending mail using Node js',
    text:'message',
    html:'<h1>Welcome</h1><p>That was easy</p>'
};

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log("Email sent: "+info.response);
    }
});