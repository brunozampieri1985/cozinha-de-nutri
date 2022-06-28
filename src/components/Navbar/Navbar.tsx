import Image from 'next/image'
import styles from './Navbar.module.css'
import { IoMenuOutline } from 'react-icons/io5'
import Cart from '@components/Cart'
import useDeviceWidth from '@hooks/useDevice'
import CartComponent from '@components/CartComponent'

const Navbar: React.FC = () => {
   const deviceWidth = useDeviceWidth()
   return (
      <nav className={styles.navbar}>
         <div className={deviceWidth > 768 ? styles.navbarLogoFull : styles.navbarLogoSmall}>
           {/*  <Image
               src={'/logo-final.svg'}
               width={115}
               height={90}
               alt="logo"
               layout="fill"
            /> */}
         </div>
         
         <CartComponent />
         <div className={styles.navbar__menuIcon}>
            <IoMenuOutline fontSize={24} color={'#fff'} />
         </div>
      </nav>
   )
}
export default Navbar
