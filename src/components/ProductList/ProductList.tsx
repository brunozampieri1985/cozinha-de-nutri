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
   const [filterByText, setFilterByText] = useState<string>('')

   const categories = Cardapio.reduce((acc, curr) => {
      if (!acc.includes(curr.category)) {
         acc.push(curr.category)
      }
      return acc
   }, [] as string[])

   const subcategories = Cardapio.reduce((acc, curr) => {
      if (!acc.includes(curr.subcategory)) {
         acc.push(curr.subcategory)
      }
      return acc
   }, [] as string[])

   const filters = {
      byCategory: (category: string) => {
         setCardapio(cardapio.filter((item) => item.category === category))
      },
      byText: (text: string) => {
         setFilterByText(text.toLowerCase())
         let filtered = cardapio.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
         )
         if (text === '') {
            setCardapio(Cardapio)
         } else {
            setCardapio(filtered)
         }
      },
   }

   return (
      <div>
         <div className={styles.productList__filters}>
            <input
               type="text"
               placeholder="Digite o nome do prato..."
               value={filterByText}
               onChange={(e) => filters.byText(e.target.value)}
               className={styles.productList__filterInput}
            />
            {/* <select className={styles.productList__filterInput}>
               <option value="Todas">Todas</option>
               {categories.map((category, index) => (
                  <option value={category} key={index}>
                     {category}
                  </option>
               ))}
            </select>
            <select className={styles.productList__filterInput}>
               <option value="Todas">Todas</option>
               {subcategories.map((subcategory, index) => (
                  <option value={subcategory} key={index}>
                     {subcategory}
                  </option>
               ))}
            </select> */}
         </div>
         <div className={styles.productList}>
            {cardapio.map((item, index) => (
               <ProductCard key={index} product={item} />
            ))}
         </div>
      </div>
   )
}
export default ProductList
