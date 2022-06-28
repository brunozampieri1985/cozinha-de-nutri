import styles from './CartComponent.module.css'
import { useContext, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { AppContext } from '@contexts/AppStore'
import Button from '@components/Button'
import Divider from '@components/Divider'
import formatters from '@utils/formatters'

const CartComponent: React.FC = () => {
   const [showCart, setShowCart] = useState<boolean>(false)
   const {
      cart,
      getCartTotal,
      clearCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      discount,
   } = useContext(AppContext)

   return (
      <div className={styles.cart}>
         <div className={styles.cartBack}>
            <div className={styles.cartBackInfo}>
               <div
                  className={styles.cartIcon}
                  onClick={() => setShowCart(!showCart)}>
                  <FiShoppingCart fontSize={24} color={'var(--theme-700'} />
                  <div className={styles.cartInfo}>{cart.length}</div>
               </div>
               <div className={styles.cartInfoTotal}>
                  {formatters.currency(getCartTotal())}
               </div>
            </div>
            {showCart && (
               <div className={styles.cartBackActions}>
                  <Button>Finalizar</Button>
                  <Button>Limpar</Button>
               </div>
            )}
         </div>
         {showCart && (
            <div className={styles.cartWrapper}>
               <div className={styles.cartHeader}>
                  <FiShoppingCart fontSize={24} color={'var(--theme-700'} />
                  &nbsp;Carrinho
               </div>
               <div className={styles.cartBody}>
                  {cart.map((product, index) => (
                     <div className={styles.cartBodyItem} key={index}>
                        <div className={styles.cartBodyDescription}>
                           <div className={styles.cartBodyDescriptionTitle}>
                              {product.item.title}
                           </div>
                           <div className={styles.cartBodyQuantity}>
                              Quantidade: {product.quantity}
                           </div>
                        </div>
                        <div className={styles.cartBodyPrice}>
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
