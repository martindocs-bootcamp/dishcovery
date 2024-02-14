import nodemailer from 'nodemailer';

export const handler = async (e, context) => {
  const { name, email, message } = JSON.parse(e.body);

  const transporter = nodemailer.createTransport({
    service: 'smtp.office365.com',
    port: 587,
    secure: false,
    // service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
      // user: import.meta.env.EMAIL_USER,
      // pass: import.meta.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'martin.tatarski@outlook.com',
    // to: import.meta.env.EMAIL_USER,
    subject: 'New Email',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully'}),
    };
  } catch (error) {
    console.error('Error sending email:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
};
