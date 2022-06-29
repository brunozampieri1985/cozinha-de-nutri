import type { NextPage } from 'next'
import { AppContext } from '@contexts/AppStore'
import PageLayout from '@components/PageLayout'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import OrderConfirmation from '@components/OrderConfirmation'

const Confirmation: NextPage = () => {
   const { order } = useContext(AppContext)
   const router = useRouter()

   useEffect(() => {
      if (!order) {
         router.push('/')
         return
      }
   }, [order, router])

   return (
      <PageLayout>
         <OrderConfirmation />
      </PageLayout>
   )
}

export default Confirmation
