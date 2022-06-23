import Image from 'next/image'
import styles from './Navbar.module.css'


const Navbar: React.FC = (props) => (
   <nav className={styles.navbar}>
      <Image src="/logo-rounded.jpg" width={90} height={90} alt="logo" />
   </nav>
)
export default Navbar
