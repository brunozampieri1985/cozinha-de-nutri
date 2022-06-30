// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IOrder } from '@contexts/AppStore'
import sgMail from '@sendgrid/mail'
import formatters from '@utils/formatters'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
   const { orderToSubmit } = req.body

   const { buyer, items, total } = orderToSubmit as IOrder

   let html = `<h1>Pedido de ${buyer?.name as string}</h1><br/><hr/><br/>`
   html += `<h3>Telefone: ${buyer?.phone}`
   html += `<h3>Email: ${buyer?.email}`
   html += `<h3>Endereço: ${buyer?.address}`
   html += `<h3>Cidade: ${buyer?.city}`
   html += `<br/><hr/><br/>`
   items.map((item) => {
      html += `<p><strong>${item.item.title} - ${item.item.weight}${item.item.measure}</strong></p>
      <p>Quantidade: <strong>${item.quantity}</strong></p> 
      <p>R$/UN: <string>${formatters.currency(item.price)}</p></strong>
      <hr/>
      <br/>`
   })

   html += ``
   html += `<p>Total: ${formatters.currency(total)}</p>`
   

   sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

   const msg = {
      to: 'cozinhadenutri13@gmail.com', // Change to your recipient
      from: 'cozinhadenutri@hotmail.com', // Change to your verified sender
      subject: `Pedido de ${buyer?.name as string}`,
      html,
   }

   sgMail
      .send(msg)
      .then((response) => {
         res.status(response[0].statusCode).json({ message: 'Email sent!' })
      })
      .catch((error) => {
         res.status(error.statusCode).json({ message: error.message })
      })
}

export default handler
