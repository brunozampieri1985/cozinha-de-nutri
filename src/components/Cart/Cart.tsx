import styles from './Cart.module.css'
import { useContext, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { AppContext } from '@contexts/AppStore'
import Button from '@components/Button'
import Divider from '@components/Divider'
import formatters from '@utils/formatters'

const Cart: React.FC = () => {
   const [showCart, setShowCart] = useState<boolean>(false)
   const { cart, getCartTotal, clearCart } = useContext(AppContext)
   return (
      <>
         <div
            className={styles.cartIcon}
            onClick={() => setShowCart(!showCart)}>
            <FiShoppingCart fontSize={24} color={'var(--theme-700'} />
            <div className={styles.cartInfo}>{cart.length}</div>
         </div>
         {showCart && (
            <div className={styles.cart}>
               <div className={styles.cartHeader}>
                  <span className={styles.cartHeaderText}>
                     <FiShoppingCart />
                     &nbsp;&nbsp;Carrinho
                  </span>
                  <Button onClick={() => setShowCart(false)}>X</Button>
               </div>
               <Divider color="#fff" />
               <div className={styles.cartBody}>
                  {cart.map((product, index) => (
                     <div className={styles.cartBodyItem} key={index}>
                        <div className={styles.cartBodyItemTitle}>
                           {product.item.title} - {product.item.weight}
                           {product.item.measure}
                        </div>
                        <div className={styles.cartBodyQuantityPrice}>
                           <span className={styles.cartBodyItemQuantity}>
                              Quantidade: {product.quantity}
                           </span>
                           <span className={styles.cartBodyItemPrice}>
                              {formatters.currency(product.price)}
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
               <Divider color={'#fff'} />
               <div className={styles.cartFooter}>
                  <div className={styles.cartFooterText}>
                     Total: {formatters.currency(getCartTotal())}
                  </div>
                  <div className={styles.cartFooterActions}>
                  <Button>Finalizar Pedido</Button>
                  <Button onClick={() => clearCart()}>Limpar Carrinho</Button>
                  </div>
               </div>
            </div>
         )}
      </>
   )
}
export default Cart
