var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xyz@abc.com',
    pass: '12345'
  }
});

var mailOptions = {
  from: 'xyz@abc.com',
  to: 'abc@yahoo.in',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

// WIP, SMTP server needed
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});