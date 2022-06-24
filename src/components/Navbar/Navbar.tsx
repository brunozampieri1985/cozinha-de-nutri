import Image from 'next/image'
import styles from './Navbar.module.css'
import { IoMenuOutline } from 'react-icons/io5'

const Navbar: React.FC = (props) => (
   <nav className={styles.navbar}>
      <Image src="/logo-full.svg" width={280} height={70} alt="logo" />
      <div className={styles.navbar__menuIcon}>
         <IoMenuOutline fontSize={24} color={'#fff'} />
      </div>
   </nav>
)
export default Navbar
