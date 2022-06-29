import styles from './OrderConfirmation.module.css'
import { useContext, useState } from 'react'
import { AppContext, IOrderItem } from '@contexts/AppStore'
import Input from '@components/Input'

const OrderConfirmation: React.FC = () => {
   const { order } = useContext(AppContext)
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
   const [items, setItems] = useState<IOrderItem[]>(order?.items ?? [])
   const [city, setCity] = useState('')

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
                  <option value="Peruíbe-SP">Peruíbe-SP</option>
                  <option value="Itanhaém-SP">Itanhaém-SP</option>
               </select>
            </div>
         </div>
         <br />
         <hr />
         <h2 className={styles.orderSubtitle}>Itens Comprados</h2>
         <br />
         <ul>
            {items.length > 0 &&
               items.map((item) => (
                  <li key={item.id}>
                     <h3>
                        {item.item.title} - {item.item.weight}
                        {item.item.measure}
                     </h3>
                     <p>
                        {item.item.promoPrice
                           ? item.item.promoPrice
                           : item.item.price}
                     </p>
                  </li>
               ))}
         </ul>
      </div>
   )
}
export default OrderConfirmation
