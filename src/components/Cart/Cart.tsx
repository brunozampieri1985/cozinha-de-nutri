import styles from './Cart.module.css'
import { useContext, useEffect, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { AppContext } from '@contexts/AppStore'
import Button from '@components/Button'
import Divider from '@components/Divider'
import formatters from '@utils/formatters'

const Cart: React.FC = () => {
   const [showCart, setShowCart] = useState<boolean>(false)
   const {
      cart,
      getCartTotal,
      clearCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      discount,
      getTotalItems
   } = useContext(AppContext)

   const totalItems = getTotalItems()

   return (
      <>
         <div
            className={styles.cartIcon}
            onClick={() => setShowCart(!showCart)}>
            <FiShoppingCart fontSize={24} color={'var(--theme-700'} />
            <div className={styles.cartInfo}>{totalItems}</div>
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
                              <div className="">
                                 <Button
                                    size="small"
                                    variant="outline"
                                    onClick={() =>
                                       increaseQuantity(product, 1)
                                    }>
                                    +
                                 </Button>
                                 <Button
                                    size="small"
                                    variant="outline"
                                    onClick={() =>
                                       decreaseQuantity(product, 1)
                                    }>
                                    -
                                 </Button>
                              </div>
                           </span>
                           <span className={styles.cartBodyItemPrice}>                              
                              {formatters.currency(
                                 product.price * product.quantity
                              )}
                              <Button
                                 size="small"
                                 variant="secondary"
                                 onClick={() => removeFromCart(product)}>
                                 X
                              </Button>
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
               <Divider color={'#fff'} />
               <div className={styles.cartFooter}>
                  <div className={styles.cartFooterText}>
                     Total de Marmitas: {totalItems} |  Total: {formatters.currency(getCartTotal())}{discount > 0 && (
                        <div className="">&nbsp;| &nbsp;Desconto: {discount * 100}%</div>
                     )}
                  </div>
                  <div className={styles.cartFooterActions}>
                     <Button>Finalizar Pedido</Button>
                     <Button onClick={() => clearCart()}>
                        Limpar Carrinho
                     </Button>
                  </div>
               </div>
            </div>
         )}
      </>
   )
}
export default Cart
