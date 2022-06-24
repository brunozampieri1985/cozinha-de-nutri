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
   const categories = Cardapio.reduce((acc, curr) => {
      if (!acc.includes(curr.category)) {
         acc.push(curr.category)
      }
      return acc
   }, [] as string[])

   const [cardapio, setCardapio] = useState<ICardapio[]>(Cardapio)
   const [filterByText, setFilterByText] = useState<string>('')
   const [filterByCategory, setFilterByCategory] = useState<string>('')

   const handleFilters = (by: string, value: string) => {
      let result: ICardapio[] = []

      if (by === 'text') {
         setFilterByText(value)
         if (filterByCategory !== '') {
            Cardapio.filter((item) => {
               if (
                  item.category === filterByCategory &&
                  item.title.includes(value)
               ) {
                  result.push(item)
               }
            })
         } else {
            if (value === '') {
               result = Cardapio
            } else {
               Cardapio.filter((item) => {
                  if (item.title.includes(value)) {
                     result.push(item)
                  }
               })
            }
         }
      }
      if (by === 'category') {
         setFilterByCategory(value)
         if (value === 'Todas') {
            if (filterByText !== '') {
               Cardapio.filter((item) => {
                  if (item.title.includes(filterByText)) {
                     result.push(item)
                  }
               })
            } else {
               result = Cardapio
            }
         } else {
            if (filterByText !== '') {
               Cardapio.filter((item) => {
                  if (
                     item.category === value &&
                     item.title.includes(filterByText)
                  ) {
                     result.push(item)
                  }
               })
            } else {
               Cardapio.filter((item) => {
                  if (item.category === value) {
                     result.push(item)
                  }
               })
            }
         }
      }
      setCardapio(result)
   }

   return (
      <div>
         <div className={styles.productList__filters}>
            <input
               type="text"
               placeholder="Digite o nome do prato..."
               value={filterByText}
               onChange={(e) => handleFilters('text', e.target.value)}
               className={styles.productList__filterInput}
            />
            <select
               className={styles.productList__filterInput}
               onChange={(e) => handleFilters('category', e.target.value)}>
               <option value="Todas">Todas</option>
               {categories.map((category, index) => (
                  <option value={category} key={index}>
                     {category}
                  </option>
               ))}
            </select>
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
