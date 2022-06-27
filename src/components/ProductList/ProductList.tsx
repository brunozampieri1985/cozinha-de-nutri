import styles from './ProductList.module.css'
import { AppContext } from '@contexts/AppStore'
import { useContext } from 'react'
import ProductCard from '@components/ProductCard'

const ProductList: React.FC = (props) => {
   const {
      handleFilters,
      cardapio,
      Categories,
      filterByText,
   } = useContext(AppContext)

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
               <option value="Low Carb">Low Carb</option>
               {Categories.map((category, index) => (
                  <option value={category} key={index}>
                     {category}
                  </option>
               ))}
            </select>
            <span className={styles.filterFeedback}>({cardapio.length})</span>
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
