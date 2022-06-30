import styles from './OrderConfirmation.module.css'
import { useContext, useState } from 'react'
import { AppContext, IBuyer, IOrderItem } from '@contexts/AppStore'
import Input from '@components/Input'
import formatters from '@utils/formatters'
import Button from '@components/Button'

const OrderConfirmation: React.FC = () => {
   const { order, deliveryRate, getCartTotal, getCartTotalWODiscount, discount, getTotalItems } = useContext(AppContext)   
   const [buyer, setBuyer] = useState<IBuyer>(order?.buyer ?? {} as IBuyer)
   const [name, setName] = useState(buyer.name ?? '')
   const [email, setEmail] = useState(buyer.email ?? '')
   const [phone, setPhone] = useState(buyer.phone ?? '')
   const [city, setCity] = useState(buyer.city ?? 'Peruíbe')
   const [items, setItems] = useState<IOrderItem[]>(order?.items ?? [])
   const [isBuyerDataSaved, setIsBuyerDataSaved] = useState(false)

   const totalFinal = getCartTotal()
   

   return (
      <div className={styles.order}>
         <h1 className={styles.orderTitle}>Pedido</h1>
         <hr />
         <h2 className={styles.orderSubtitle}>Dados do Cliente</h2>
         <div className={styles.orderInputs}>
            <Input
               placeholder="Nome Completo"
               onChange={(e) => setName(e.target.value)}
               value={name}
            />
            <br />
            <Input
               placeholder="Email"
               onChange={(e) => setEmail(e.target.value)}
               value={email}
            />
            <br />
            <div className={styles.orderInputsDivided}>
               <Input
                  placeholder="Telefone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
               />
               <br />
               <select
                  className={styles.orderSelectInput}
                  onChange={(e) => setCity(e.target.value)}>
                  <option value="Peruíbe">Peruíbe</option>
                  <option value="Itanhaém">Itanhaém</option>
               </select>
            </div>
            <br/>
            <Button variant='secondary'>Salvar Dados</Button>
         </div>
         <br />
         <hr />
         <h2 className={styles.orderSubtitle}>Itens Comprados</h2>
         <br />
         <div className={styles.orderSummaryHeader}>
            <span>Itens</span>
            <span>R$/UN</span>
            <span>R$ Total</span>
         </div>
         <ul className={styles.orderSummary}>
            {items.length > 0 &&
               items.map((item) => (
                  <li key={item.id} className={styles.orderItem}>
                     <h3>
                        {item.item.title} - {item.item.weight}
                        {item.item.measure}
                        <p>Quantidade: {item.quantity}</p>
                     </h3>
                     <span>
                        {item.item.promoPrice
                           ? formatters.currency(item.item.promoPrice)
                           : formatters.currency(item.item.price)}
                     </span>
                     <span>
                        {item.item.promoPrice
                           ? formatters.currency(
                                item.item.promoPrice * item.quantity
                             )
                           : formatters.currency(
                                item.item.price * item.quantity
                             )}
                     </span>
                  </li>
               ))}
         </ul>
         <div className={styles.orderValues}>
            <div>Total: {formatters.currency(getCartTotalWODiscount())}</div>
            <div>Desconto: {discount * 100}%</div>
            <div>Taxa de Entrega: {formatters.currency(deliveryRate(city))}</div>
            <div>Total a Pagar: {formatters.currency(getCartTotal() + deliveryRate(city))}</div>
            <div>Preço Médio: {formatters.currency((getCartTotal() + deliveryRate(city)) / getTotalItems())}</div>
         </div>
      </div>
   )
}
export default OrderConfirmation
