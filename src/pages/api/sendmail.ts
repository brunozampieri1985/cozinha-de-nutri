// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
   sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

   const msg = {
      to: 'cozinhadenutri13@gmail.com', // Change to your recipient
      from: 'brunozampieri1985@gmail.com', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
   }

   sgMail
      .send(msg)
      .then((response) => {
         res.status(response[0].statusCode).json({ message: 'Email sent!' })
      })
      .catch((error) => {
         res.status(403).json({ message: error.message })
      })   
}

export default handler
