import '../styles/globals.css'
import '../../node_modules/react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import type { AppProps } from 'next/app'
import { AppProvider } from '@contexts/AppStore'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <AppProvider>
         <ToastContainer />
         <Component {...pageProps} />
      </AppProvider>
   )
}

export default MyApp
