import styles from './Navbar.module.css'
import { useState } from 'react'
import { IoMenuOutline } from 'react-icons/io5'
import useDeviceWidth from '@hooks/useDevice'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar: React.FC = () => {
   const deviceWidth = useDeviceWidth()
   const [showMenu, setShowMenu] = useState(false)
   const router = useRouter()

   return (
      <nav className={styles.navbar}>
         <div className={styles.navbarContainer}>
            <div
               className={
                  deviceWidth > 768
                     ? styles.navbarLogoFull
                     : styles.navbarLogoSmall
               }></div>
            <div className={styles.navbar__menuIcon}>
               <IoMenuOutline
                  fontSize={24}
                  color={'var(--theme-700)'}
                  onClick={() => setShowMenu(!showMenu)}
               />
            </div>
         </div>
         {showMenu && (
            <div className={styles.navbar__menu}>
               <ul className={styles.navbar__menuList}>
                  <li className={styles.navbar__menuListItem} onClick={() => router.push('/')}>Home</li>
                  <li className={styles.navbar__menuListItem} onClick={() => router.push('/politica/entrega')}>                     
                        Entrega                    
                  </li>
                  <li className={styles.navbar__menuListItem} onClick={() => router.push('/politica/descontos')}>                    
                        Descontos                     
                  </li>
               </ul>
            </div>
         )}
      </nav>
   )
}
export default Navbar
