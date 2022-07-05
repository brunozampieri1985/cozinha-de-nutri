import '../styles/globals.css'
import '../../node_modules/react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import type { AppProps } from 'next/app'
import { AppProvider } from '@contexts/AppStore'
import { Router } from 'next/router'
import { useState } from 'react'
import Loading from '@components/Loading'

function MyApp({ Component, pageProps }: AppProps) {

   const [isLoading, setIsLoading] = useState<boolean>(false)

   Router.events.on('beforeHistoryChange', () => {
      setIsLoading(true)
   })

   Router.events.on('routeChangeStart', () => {
     setIsLoading(true)
   })
 
   Router.events.on('routeChangeComplete', () => {
     setIsLoading(false)
   })

   return (
      <AppProvider>
         <ToastContainer />
         {isLoading ? <Loading/> : <Component {...pageProps} />}
      </AppProvider>
   )
}

export default MyApp
