"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactEmails = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const createTransporter = () => {
    return nodemailer_1.default.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.ADMIN_EMAIL,
            pass: process.env.ADMIN_PASS,
        },
    });
};
const sendContactEmails = (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, email, message, }) {
    const transporter = createTransporter();
    try {
        // verify transporter configuration
        yield transporter.verify();
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
        yield transporter.sendMail(userMailOptions);
        console.log(`Confirmation email sent to user: ${email}`);
        yield transporter.sendMail(adminMailOptions);
        console.log(`Notification email sent to admin: ${process.env.ADMIN_EMAIL}`);
    }
    catch (error) {
        console.error('Error sending emails:', error);
        throw error;
    }
});
exports.sendContactEmails = sendContactEmails;
