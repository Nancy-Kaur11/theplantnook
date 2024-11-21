const nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});


const sendEmail = (recipientEmail, postalCode) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipientEmail, 
    subject: 'USDA Growing Zone Verification',
    text: `Dear Customer,\n\nYour shipping postal code is ${postalCode}. Please ensure this matches the USDA growing zone for your plants.\n\nThank you!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });
};

// Example usage
const customerEmail = 'customer@example.com'; // Replace with the customer's email
const customerPostalCode = '12345'; // Replace with the postal code from the order
sendEmail(customerEmail, customerPostalCode);
