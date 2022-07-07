import styles from './OrderConfirmation.module.css'
import { useContext, useState } from 'react'
import { AppContext, IBuyer, IOrder, IOrderItem } from '@contexts/AppStore'
import Input from '@components/Input'
import formatters from '@utils/formatters'
import Button from '@components/Button'
import { toast } from 'react-toastify'
import { Router, useRouter } from 'next/router'

const OrderConfirmation: React.FC = () => {
   const {
      order,
      deliveryRate,
      getCartTotal,
      getCartTotalWODiscount,
      discount,
      getTotalItems,
      saveBuyer,
      clearAll
   } = useContext(AppContext)
   const [buyer, setBuyer] = useState<IBuyer>(order?.buyer ?? ({} as IBuyer))
   const [name, setName] = useState(buyer.name ?? '')
   const [email, setEmail] = useState(buyer.email ?? '')
   const [phone, setPhone] = useState(buyer.phone ?? '')
   const [address, setAddress] = useState(buyer.address ?? '')
   const [city, setCity] = useState(buyer.city ?? 'Peruíbe')
   const [items, setItems] = useState<IOrderItem[]>(order?.items ?? [])
   const [errors, setErrors] = useState<string[]>([])
   const [isBuyerDataSaved, setIsBuyerDataSaved] = useState(false)

   const router = useRouter()

   const validation = {
      name: () => name.length > 0,
      email: () => {
         const emailRegex =
         /^[a-z0-9.]+@[a-z0-9-._]+\.[a-z]+\.([a-z]+)?$/i
         return emailRegex.test(email)
      },
      phone: () => phone.length > 9,
      address: () => address.length > 5,
   }

   
   const handleSaveBuyer = () => {
      setErrors([])
      setIsBuyerDataSaved(false)
      //validate name
      if (!validation.name()) {
         setErrors([...errors, 'É necessário preencher seu nome'])
         setIsBuyerDataSaved(false)
         return
      }
      //validate email
      if (!validation.email()) {
         setErrors([...errors, 'É necessário preencher um e-mail válido'])
         setIsBuyerDataSaved(false)
         return
      }
      //validate phone
      if (!validation.phone()) {
         setErrors([...errors, 'É necessário preencher seu telefone'])
         setIsBuyerDataSaved(false)
         return
      }
      //validate address
      if (!validation.address()) {
         setErrors([...errors, 'É necessário preencher seu endereço'])
         setIsBuyerDataSaved(false)
         return
      }
      //save buyer and update order
      setErrors([])
      saveBuyer({
         name,
         email,
         phone,
         address,
         city,
      })
      setIsBuyerDataSaved(true)
      toast('Dados do comprador salvos com sucesso!', {
         position: 'top-right',
         autoClose: 3000,
         type: 'success',
      })
   }

   const handleSubmitOrder = async () => {
      setErrors([])
      setIsBuyerDataSaved(false)
      //validate name
      if (!validation.name()) {
         setErrors([...errors, 'É necessário preencher seu nome'])
         setIsBuyerDataSaved(false)
         return
      }
      //validate email
      if (!validation.email()) {
         setErrors([...errors, 'É necessário preencher um e-mail válido'])
         setIsBuyerDataSaved(false)
         return
      }
      //validate phone
      if (!validation.phone()) {
         setErrors([...errors, 'É necessário preencher seu telefone'])
         setIsBuyerDataSaved(false)
         return
      }
      //validate address
      if (!validation.address()) {
         setErrors([...errors, 'É necessário preencher seu endereço'])
         setIsBuyerDataSaved(false)
         return
      }
      if (buyer && order) {
         const orderToSubmit: IOrder = {
            ...order,
            total: getCartTotal() + deliveryRate(city),
            
         }
         const response = await fetch('/api/sendmail', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({orderToSubmit})
         })         
         if (response.status === 202) {
            toast('Pedido realizado com sucesso! Aguarde nosso contato em até 24 horas!', {
               type: 'success',
            })
            clearAll()
            router.push('/')
         } else {
            const result = await response.json()
            toast(`Erro ao enviar pedido! ${result.message}` , {
               type: 'error',
            })
         }
      }
   }

   return (
      <div className={styles.order}>
         <div className={styles.orderWarn}>
            AVISO! Neste momento somente estamos entregando em Peruíbe-SP
         </div>
         {errors.length > 0 && (
            <div className={styles.orderErrors}>
               {errors.map((error, index) => (
                  <div key={index}>{error}</div>
               ))}
            </div>
         )}
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
            <Input
               placeholder="Endereço"
               onChange={(e) => setAddress(e.target.value)}
               value={address}
            />
            <br />
            <div className={styles.orderInputsDivided}>
               <Input
                  placeholder="Telefone c/ DDD"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
               />
               <br />
               <select
                  className={styles.orderSelectInput}
                  onChange={(e) => setCity(e.target.value)}>
                  <option value="Peruíbe">Peruíbe</option>
                  <option value="Itanhaém" disabled>
                     Itanhaém
                  </option>
               </select>
            </div>
            <br />
            
            <Button variant="secondary" onClick={() => handleSaveBuyer()}>
               Salvar Dados
            </Button>
         </div>
         <br />
         <hr />
         <h2 className={styles.orderSubtitle}>Informações de Entrega</h2>
         <p className={styles.orderDeliveryInfo}>
            Visando sempre fornecer os produtos com a maior qualidade possível,
            não mantemos estoque, fazemos sob encomenda. Por esse motivo,
            solicitamos atenção conforme abaixo:
         </p>
         <ul>
            <p className={styles.orderDeliveryInfo}>
               - Pedidos confirmados até às 13h00 de segunda-feira serão
               entregues na quarta-feira seguinte até as 18h00.
            </p>
            <p className={styles.orderDeliveryInfo}>
               - Pedidos confirmados até às 13h00 de quarta-feira serão
               entregues na sexta-feira seguinte até as 18h00.
            </p>
         </ul>
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
            {discount > 0 && <div>Desconto: {discount * 100}%</div>}
            <div>
               Taxa de Entrega: {formatters.currency(deliveryRate(city))}
            </div>
            <div>
               Total a Pagar:{' '}
               <span className={styles.orderValue}>
                  {formatters.currency(getCartTotal() + deliveryRate(city))}
               </span>
            </div>
            {getTotalItems() > 5 && (
               <div>
                  Preço Médio:{' '}
                  {formatters.currency(
                     (getCartTotal() + deliveryRate(city)) / getTotalItems()
                  )}
               </div>
            )}
         </div>
         <div className={styles.orderActions}>
            <Button variant='secondary' onClick={() => router.push('/')}>Voltar</Button>
            <Button onClick={handleSubmitOrder}>CONFIMAR PEDIDO</Button>
         </div>
      </div>
   )
}
export default OrderConfirmation
