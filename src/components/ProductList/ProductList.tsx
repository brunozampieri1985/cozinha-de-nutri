import styles from './ProductList.module.css'
import {
   getCardapioByCategory,
   getLowCarbOptions,
   getPromoItens,
   Cardapio,
   ICardapio,
} from '@services/cardapio'
import ProductCard from '@components/ProductCard'
import { useState } from 'react'

const ProductList: React.FC = (props) => {
    const [cardapio, setCardapio] = useState<ICardapio[]>(Cardapio)

    const filters = {
        byCategory: (category: string) => {
            setCardapio(cardapio.filter(item => item.category === category))
        }
    }

   return (
      <div className={styles.productList}>
         {cardapio.map((item, index) => (
            <ProductCard key={index} product={item} />
         ))}
      </div>
   )
}
export default ProductList
