require('dotenv').config()
console.log("===========>",process.env.gmail_from)

const PASSWORD = process.env.password
const GMAIL = process.env.gmail
const GMAIL_FROM = process.env.gmail_from

export default function (req, res) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: GMAIL_FROM,
          pass: PASSWORD,
        },
        secure: true,
      })

       const mailData = {
        from: GMAIL_FROM,
        to: GMAIL,
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
