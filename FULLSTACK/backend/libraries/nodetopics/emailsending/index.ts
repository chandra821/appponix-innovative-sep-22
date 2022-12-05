var nodemailer=require('nodemailer')
var transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'chandrabhushan2541@gmail.com',
        pass:'rnxkehkyxxxqpxdz'
    }
})
var maildata={
    from:'chandrabhushan2541@gmail.com',
    to:'bosschandu97029@gmail.com',
    subject:'testing u r awake',
text:'hi can u dance'
}
transport.sendMail(maildata,(err:any,res:any)=>{
    if(err){
        console.log(err)
    }else{
        console.log('mail send')
    }
})