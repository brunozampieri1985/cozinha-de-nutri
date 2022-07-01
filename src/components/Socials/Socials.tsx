import styles from './Socials.module.css'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

const Socials: React.FC = () => {

   return (
      <div className={styles.socials}>
         <div className={styles.whatsapp}>
            <Link href="https://wa.me/5513991632069" passHref target={'_blank'}>
               <FaWhatsapp />
            </Link>
         </div>
         <div className={styles.instagram}>
            <Link href="https://www.instagram.com/cozinha.denutri/">
               <FaInstagram />
            </Link>
         </div>
      </div>
   )
}

export default Socials
