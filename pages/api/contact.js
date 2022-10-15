require('dotenv').config()

const PASSWORD = process.env.password

export default function (req, res) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'innocentmasuki.me@gmail.com',
          pass: PASSWORD,
        },
        secure: true,
      })

       const mailData = {
        from: 'innocentmasuki.me@gmail.com',
        to: 'innocentmasuki99@gmail.com',
        subject: `Message From ${req.body.full_name}`,
        text: "Budget: " +req.body.budget + " | For project: " + req.body.project+ " | Sent from: " + req.body.email+ " | With phone: " + req.body.phone,
        html: `
        <div>
            <h1>Name: ${req.body.full_name}</h1>
            <ul>
                <li><b>Phone: ${req.body.phone}</b></li>
                <li><b>Budget: ${req.body.budget}</b></li>
                <li><b>Project: ${req.body.project}</b></li>
                <li><b>Email: ${req.body.email}</b></li>

            </ul>
        </div>
       `
      }
      transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })

      res.status(200)
  }
