import Image from 'next/image'
import styles from './Navbar.module.css'
import { IoMenuOutline } from 'react-icons/io5'
import Cart from '@components/Cart'

const Navbar: React.FC = () => (
   <nav className={styles.navbar}>
      <Image src="/logo-full.svg" width={422} height={80} alt="logo" />
      <Cart />
      <div className={styles.navbar__menuIcon}>
         <IoMenuOutline fontSize={24} color={'#fff'} />
      </div>
   </nav>
)
export default Navbar
