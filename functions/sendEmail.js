import nodemailer from 'nodemailer';

export const handler = async (e, context) => {
  const { name, email, message } = JSON.parse(e.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: import.meta.env.EMAIL_USER,
      pass: import.meta.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: import.meta.env.EMAIL_USER,
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
