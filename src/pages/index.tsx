import type { NextPage } from 'next'
import Head from 'next/head'
import ProductList from '@components/ProductList'
import PageLayout from '@components/PageLayout'

const Home: NextPage = () => {
   return (
      <PageLayout>
         <ProductList />
      </PageLayout>
   )
}

export default Home
