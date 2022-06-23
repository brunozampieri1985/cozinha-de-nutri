import styles from './ProductList.module.css'
import {
   getCardapioByCategory,
   getLowCarbOptions,
   getPromoItens,
   Cardapio,
   ICardapio,
} from '@services/cardapio'
import ProductCard from '@components/ProductCard'
import { useEffect, useState } from 'react'

const ProductList: React.FC = (props) => {
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

   const [cardapio, setCardapio] = useState<ICardapio[]>(Cardapio)
   const [filterByText, setFilterByText] = useState<string>('')
   const [filterByCategory, setFilterByCategory] = useState<string>('')
   const [filterBySubcategory, setFilterBySubcategory] = useState<string>('')

   useEffect(() => {
      const handleFilters = () => {
         if (filterByText !== '') {
            setCardapio(
               cardapio.filter((item) =>
                  item.title.toLowerCase().includes(filterByText.toLowerCase())
               )
            )
         }
         if (filterByCategory !== '') {
            if (filterByCategory === 'Todas') setFilterByCategory('')
            setCardapio(
               cardapio.filter((item) => item.category === filterByCategory)
            )
         }
         if (filterBySubcategory !== '') {
            if (filterBySubcategory === 'Todas') setFilterBySubcategory('')
            else {
               setCardapio(
                  cardapio.filter(
                     (item) => item.subcategory === filterBySubcategory
                  )
               )
            }
         }
         if (
            filterByText === '' &&
            filterByCategory === '' &&
            filterBySubcategory === ''
         ) {
            setCardapio(Cardapio)
         }
      }
      handleFilters()
   }, [filterByText, filterByCategory, filterBySubcategory]) // eslint-disable-line

   return (
      <div>
         <div className={styles.productList__filters}>
            <input
               type="text"
               placeholder="Digite o nome do prato..."
               value={filterByText}
               onChange={(e) => setFilterByText(e.target.value)}
               className={styles.productList__filterInput}
            />
            <select
               className={styles.productList__filterInput}
               onChange={(e) => setFilterBySubcategory(e.target.value)}>
               <option value="Todas">Todas</option>
               {subcategories.map((subcategory, index) => (
                  <option value={subcategory} key={index}>
                     {subcategory}
                  </option>
               ))}
            </select>
            {/*  <select className={styles.productList__filterInput}>
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
