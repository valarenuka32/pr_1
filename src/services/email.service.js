const nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'valarenuka32@gmail.com',
        pass: 'mpck zmnv nfgc mrms'
    },
});

// send mail
const send_mail = async (to, data, subject) => {
    try {
        return transport.sendMail({
            from: 'valarenunka32@gmail.com',
            to,
            subject:'you are node.js developer',
            html: data
        })
    } catch (error) {
        return false;
    }
};

module.exports = { send_mail }