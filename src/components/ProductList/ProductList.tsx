import styles from './ProductList.module.css'
import { AppContext } from '@contexts/AppStore'
import { useContext, useState } from 'react'
import ProductCard from '@components/ProductCard'
import Button from '@components/Button'
import { RiFilterFill, RiFilterOffFill } from 'react-icons/ri'

const ProductList: React.FC = () => {
   const [showFilters, setShowFilters] = useState<boolean>(false)
   const [filterByText, setFilterByText] = useState<string>('')
   const [filterByCategory, setFilterByCategory] = useState<string>('Todas')
   const { handleFiltersV2, cardapio, Categories } = useContext(AppContext)

   const handleFilterByText = (text: string) => {
      setFilterByText(text)
      handleFiltersV2(text, filterByCategory)
   }

   const handleFilterByCategory = (category: string) => {
      setFilterByCategory(category)
      handleFiltersV2(filterByText, category)
   }

   return (
      <div>
         <div className={styles.productList__filters}>
            <Button
               variant="secondary"
               onClick={() => setShowFilters(!showFilters)}>
               {!showFilters ? <RiFilterFill /> : <RiFilterOffFill />} Filtros
            </Button>
            {showFilters && (
               <>
                  <input
                     type="text"
                     placeholder="Digite o nome do prato..."
                     value={filterByText}
                     onChange={(e) => handleFilterByText(e.target.value)}
                     className={styles.productList__filterInput}
                  />
                  <select
                     className={styles.productList__filterInput}
                     onChange={(e) => handleFilterByCategory(e.target.value)}>
                     <option value="Todas">Todas</option>
                     <option value="Low Carb">Low Carb</option>
                     {Categories.map((category, index) => (
                        <option value={category} key={index}>
                           {category}
                        </option>
                     ))}
                  </select>
                  <span className={styles.filterFeedback}>
                     ({cardapio.length})
                  </span>
               </>
            )}
         </div>
         <div className={styles.productList}>
            {cardapio
               .sort((a, b) => a.title.localeCompare(b.title))
               .map((item, index) => (
                  <ProductCard key={index} product={item} />
               ))}
         </div>
      </div>
   )
}
export default ProductList
