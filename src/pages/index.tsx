import type { NextPage } from 'next'
import ProductList from '@components/ProductList'
import PageLayout from '@components/PageLayout'
import CartComponent from '@components/CartComponent'

const Home: NextPage = () => {
   return (
      <PageLayout>
         <ProductList />
         <CartComponent />
      </PageLayout>
   )
}

export default Home
