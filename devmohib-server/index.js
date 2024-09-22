const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const nodemailer = require("nodemailer");
const port = process.env.PORT || 5000;

// MIDDLE-WAR
app.use(cors());
app.use(express.json());

// MAIL TO USER AND ADMIN ------------------------------------

const sendEmail = (name, email, message) => {
  // make a transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_PASS,
    },
  });

  // verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  // MAIL TO USER
  const mailOptionUser = {
    from: process.env.ADMIN_EMAIL,
    to: email,
    subject: "Thank you for contacting us",
    text: `Hello ${name} \n\nThank you for reaching out! We will get back to you soon.\n\nBest regards,\nMohibullah Mohim`,
  };

  // MAIL TO ADMIN
  const adminMailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: process.env.ADMIN_EMAIL, // Your email address
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // SEND EMAIL BY TRANSPORTER
  transporter.sendMail(mailOptionUser, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  transporter.sendMail(adminMailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

// CONTACT FORM SUBMISSION FROM FRONT END
app.post("/contact", async (req, res) => {
  const userData = req.body;
  console.log('userdata', userData)
  const name = userData?.name ;
  const email = userData?.email;
  const subject = userData?.message;

  // To user and admin email
  sendEmail(name,email, subject);
});

app.get("/", (req, res) => {
  res.send("My portFolio website server is ready !!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
