import Image from 'next/image'
import styles from './Navbar.module.css'
import { IoMenuOutline } from 'react-icons/io5'
import Cart from '@components/Cart'
import useDeviceWidth from '@hooks/useDevice'

const Navbar: React.FC = () => {
   const deviceWidth = useDeviceWidth()
   return (
      <nav className={styles.navbar}>
         <Image src={deviceWidth > 390 ? "/logo-full.svg" : "/logo-rounded.svg"} width={deviceWidth > 390 ? 300 : 90} height={90} alt="logo" />
         <Cart />
         <div className={styles.navbar__menuIcon}>
            <IoMenuOutline fontSize={24} color={'#fff'} />
         </div>
      </nav>
   )
}
export default Navbar
