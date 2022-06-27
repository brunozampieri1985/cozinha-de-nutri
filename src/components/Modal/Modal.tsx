import Button from '@components/Button'
import { useState } from 'react'
import styles from './Modal.module.css'

type ModalProps = {
   show: boolean
   type: 'success' | 'error' | 'warning' | 'info'
   message: string
}

const Modal: React.FC<ModalProps> = ({ show, type, message }) => {
   const [isOpen, setIsOpen] = useState<boolean>(false)

   return (
      <>
         {isOpen && (
            <div className={styles.modal}>
               <div className={styles[type]}>
                  <div className={styles.modalHeader}>
                     <Button onClick={() => setIsOpen(false)}>X</Button>
                  </div>
                  <div className={styles.modalBody}>{message}</div>
               </div>
            </div>
         )}
      </>
   )
}

export default Modal
