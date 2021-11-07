const nodemailer = require('nodemailer');


const sendEmail = (to, url, text) => {
  const smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODE_MAILER_USER,
      pass: process.env.NODE_MAILER_PASSWORD,
    },
  })

  const mailOptions = {
      from: process.env.NODE_MAILER_USER,
      to: to,
      subject: "English Website",
      html: `
          <div style="max-width: 700px; margin: auto; border: 10px solid #999; padding: 20px; font-size: 110%; text-align: center">
          <img style="display: block; width: 200px; height: 200px; margin: 0 auto;" src="https://res.cloudinary.com/phongvn2611/image/upload/v1634203744/avatar/website-logo_g4uyky.png" />
          <h2 style="text-transform: uppercase; color: #68c2e8;">Welcome to the English Website</h2>
          <p>Congratulations! You're almost set to start using English Website.
              Just click the button below to validate your email address.
          </p>
          
          <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${text}</a>
      
          <p>If the button doesn't work for any reason, you can also click on the link below:</p>
      
          <div>${url}</div>
          </div>
      `
  }

  smtpTransport.sendMail(mailOptions, (err, info) => {
      if(err) return err;
      return info
  })
}

module.exports = sendEmail
