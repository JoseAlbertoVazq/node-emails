const cron = require('node-cron');
const express = require('express');
const nodeMailer = require('nodemailer');

app = express();
cron.schedule('* * * * *', function () {
    console.log('Running Cron Job');
    let transporter = nodeMailer.createTransport({
        host: 'your.smtp.host',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'youruser', 
            pass: 'yourpassword' 
        }
    });
    const mailOptions = {
        from: '“Homer J. Simpson” <homerjsimpson@springfield.com>', // sender address
        to: 'nedflanders@holygrial.com', // list of receivers
        subject: 'Stupid Flanders!!', // Subject line
        text: 'D\'oh!', // plain text body
        html: '<b>I\'m in Moe\'s</b>' // html body
    };
    transporter.sendMail(mailOptions, (err, info) => {
        console.log(info.messageId);
        if (err) {
            console.log(err);
        }
    });
});

app.listen(3000);