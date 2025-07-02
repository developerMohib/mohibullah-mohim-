import nodemailer from 'nodemailer';
type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_PASS,
    },
  });
};

export const sendContactEmails = async ({
  name,
  email,
  message,
}: ContactMessage): Promise<void> => {
  const transporter = createTransporter();

  try {
    // verify transporter configuration
    await transporter.verify();
    console.log('Server is ready to take our messages');

    // prepare mail options
    const userMailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: 'Thank you for contacting us',
      text: `Hello ${name},

Thank you for reaching out! We will get back to you soon.

Best regards,
Mohibullah Mohim`,
    };

    const adminMailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}
Email: ${email}
Message: ${message}`,
    };

    // send emails

    //  transporter.sendMail(userMailOptions, (error, info) => {
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log("Email sent: " + info.response);
    //     }
    //   });
    //   transporter.sendMail(adminMailOptions, (error, info) => {
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log("Email sent: " + info.response);
    //     }
    //   });

    await transporter.sendMail(userMailOptions);
    console.log(`Confirmation email sent to user: ${email}`);

    await transporter.sendMail(adminMailOptions);
    console.log(`Notification email sent to admin: ${process.env.ADMIN_EMAIL}`);
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
};
