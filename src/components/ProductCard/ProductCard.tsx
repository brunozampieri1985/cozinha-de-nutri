import styles from './ProductCard.module.css'
import { addToCart, ICardapio } from '@services/cardapio'
import formatters from '@utils/formatters'
import Button from '@components/Button'
import { BsCartPlusFill } from 'react-icons/bs'

type ProductCardProps = {
   product: ICardapio
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
   <div className={styles.productCard}>
      <div className={styles.productCard__image}>Imagem</div>
      <div className={styles.productCard__info}>
         <div className={styles.productCard__bages}>
            {product.isLowCarb ? (
               <div className={styles.productCard__bage}>Low Carb</div>
            ) : null}
            {typeof product.promoPrice === 'number' ? (
               <div className={styles.productCard__bage}>Promoção</div>
            ) : null}
         </div>
         <div className={styles.productCard__title}>
            {product.title} - {product.weight}
            {product.measure}
         </div>
         <div>
            {typeof product.promoPrice === 'number' ? (
               <>
                  <span className={styles.productCard__price}>De: </span>
                  <span className={styles.productCard__promoPrice}>
                     {formatters.currency(product.price)}
                  </span>{' '}
                  <span className={styles.productCard__price}>- Por: {formatters.currency(product.promoPrice)}</span>
               </>
            ) : (
               <span className={styles.productCard__price}>{formatters.currency(product.price)}</span>
            )}
         </div>
         <div className={styles.productCard__actions}>
            <Button>
               <BsCartPlusFill fontSize={18} />
               &nbsp; Adicionar
            </Button>
         </div>
      </div>
   </div>
)

export default ProductCard
