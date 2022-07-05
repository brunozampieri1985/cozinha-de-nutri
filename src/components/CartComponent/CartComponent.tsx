import styles from './CartComponent.module.css'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { AppContext, IOrder } from '@contexts/AppStore'
import Button from '@components/Button'
import formatters from '@utils/formatters'
import { toast } from 'react-toastify'

const CartComponent: React.FC = () => {
   const [showCart, setShowCart] = useState<boolean>(false)
   const router = useRouter()
   const {
      cart,
      getCartTotal,
      clearCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      getTotalItems,
      saveOrder,
      buyer
   } = useContext(AppContext)

   const handleClearCart = () => {
      clearCart(true)
      setShowCart(false)
   }
   const handleSubmit = async () => {
      if (cart.length > 0) {
         const order: IOrder = {
            id: 1,
            items: cart,
            total: getCartTotal(),
            buyer
         }
         
         saveOrder(order)
         router.push('/confirmacao')
      }
   }

   const handleShowCart = () => {
      if (cart.length === 0) {
         toast('Seu carrinho está vazio...', {
            type: 'warning',
            position: 'top-right',
            autoClose: 1000,
         })
         return
      }
      setShowCart(true)
   }

   return (
      <div className={styles.cart}>
         <div className={styles.cartBack}>
            <div className={styles.cartBackInfo}>
               <div
                  className={styles.cartIcon}
                  onClick={() => handleShowCart()}>
                  <FiShoppingCart fontSize={24} color={'#000'} />
                  <div className={styles.cartInfo}>{getTotalItems()}</div>
               </div>
               <div className={styles.cartInfoTotal}>
                  {formatters.currency(getCartTotal())}
               </div>
            </div>
            {showCart && (
               <div className={styles.cartBackActions}>
                  <Button variant="secondary" onClick={() => handleSubmit()}>
                     Finalizar Pedido
                  </Button>
                  <Button variant="secondary" onClick={() => handleClearCart()}>
                     Limpar
                  </Button>
               </div>
            )}
         </div>
         {showCart && (
            <div className={styles.cartWrapper}>
               <div className={styles.cartHeader}>
                  <div className={styles.cartHeaderTitle}>
                     <FiShoppingCart fontSize={24} />
                     &nbsp;Carrinho
                  </div>
                  <Button
                     variant="secondary"
                     onClick={() => setShowCart(false)}>
                     X
                  </Button>
               </div>
               <div className={styles.cartBody}>
                  {cart.length === 0 && <div>Seu carrinho está vazio...</div>}
                  {cart.map((product, index) => (
                     <div className={styles.cartBodyItem} key={index}>
                        <div className={styles.cartBodyDescription}>
                           <div className={styles.cartBodyDescriptionTitle}>
                              {product.item.title} - {product.item.weight}
                              {product.item.measure}
                           </div>
                           <div className={styles.cartBodyQuantity}>
                              Quantidade:{' '}
                              <span className={styles.cartBodyQuantityColor}>
                                 {product.quantity}
                              </span>
                              <span className={styles.cartBodyQuantityActions}>
                                 <span
                                    className={styles.cartBodyQuantityButton}
                                    onClick={() =>
                                       increaseQuantity(product, 1)
                                    }>
                                    +
                                 </span>
                                 <span
                                    className={styles.cartBodyQuantityButton}
                                    onClick={() =>
                                       decreaseQuantity(product, 1)
                                    }>
                                    -
                                 </span>
                              </span>
                           </div>
                        </div>
                        <div className={styles.cartBodyPrice}>
                           <div
                              className={styles.cartBodyRemoveButton}
                              onClick={() => removeFromCart(product)}>
                              x
                           </div>
                           {formatters.currency(product.price)}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         )}
      </div>
   )
}
export default CartComponent
