import styles from './ProductCard.module.css'
import { ICardapio, AppContext } from '@contexts/AppStore'
import formatters from '@utils/formatters'
import Button from '@components/Button'
import { BsCartPlusFill } from 'react-icons/bs'
import { useContext } from 'react'

type ProductCardProps = {
   product: ICardapio
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
   const { addToCart } = useContext(AppContext)

   let showImage = false

   return (
      <div className={styles.productCard}>
         {showImage && <div className={styles.productCard__image}>Imagem</div>}
         <div className={styles.productCard__info}>
            <div className={styles.productCard__badges}>
               <div className={styles.productCard__badge}>
                  {product.category}
               </div>               
               {product.isLowCarb ? (
                  <div className={styles.productCard__badge}>Low Carb</div>
               ) : null}
               {typeof product.promoPrice === 'number' ? (
                  <div className={styles.productCard__badge}>Promoção</div>
               ) : null}
            </div>
            <div className={styles.productCard__title}>
               {product.title} - {product.weight}
               {product.measure}
            </div>
            <div className={styles.productCard__priceWrapper}>
               {typeof product.promoPrice === 'number' ? (
                  <>
                     <span className={styles.productCard__price}>De: </span>
                     <span className={styles.productCard__promoPrice}>
                        {formatters.currency(product.price)}
                     </span>{' '}
                     <span className={styles.productCard__price}>
                        - Por: {formatters.currency(product.promoPrice)}
                     </span>
                  </>
               ) : (
                  <span className={styles.productCard__price}>
                     {formatters.currency(product.price)}
                  </span>
               )}
            </div>
            <div className={styles.productCard__actions}>
               <Button onClick={() => addToCart(product)}>
                  <BsCartPlusFill fontSize={16} />
                  &nbsp; Adicionar
               </Button>
            </div>
         </div>
      </div>
   )
}
export default ProductCard
