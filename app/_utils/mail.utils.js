import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.NODE_ENV !== 'development', // true
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    },
});

function SendEmailDto(sender, recipients, subject, massage) {
    this.sender = sender;
    this.recipients = recipients;
    this.subject = subject;
    this.massage = massage;
}

const sendEmail = async function (dto) {
    const { sender, recipients, subject, massage } = dto;

    return await transport.sendMail({
        from: sender,
        to: recipients,
        html: massage,
        subject: subject,
        text: massage
    });
}
