import Button from '@components/Button'
import { useRouter } from 'next/router'
import styles from './PoliticaDescontos.module.css'

const PoliticaEntrega: React.FC = () => {
   const router = useRouter()

   return (
      <div className={styles.politicaDescontos}>
         <h1 className={styles.descontoTitle}>Política de Descontos</h1>
         <br />
         <hr />
         <br />
         <p className={styles.descontoText}>
            Veja abaixo nossa tabela de descontos. APROVEITE!
         </p>
         <p className={styles.descontoText}>
            Basta adicionar itens que o desconto é calculado automaticamente!
         </p>
         <br />
         <div className={styles.descontosWrapper}>
            <div className={styles.descontoItem}>
               <div className={styles.descontoItemTitle}>
                  Até&nbsp;<strong>5</strong>&nbsp;marmitas
               </div>
               <div className={styles.descontoItemValue}>0%</div>
            </div>

            <div className={styles.descontoItem}>
               <div className={styles.descontoItemTitle}>
                  De&nbsp;<strong>6</strong>&nbsp;até&nbsp;<strong>11</strong>
                  &nbsp;marmitas
               </div>
               <div className={styles.descontoItemValue}>5%</div>
            </div>
            <div className={styles.descontoItem}>
               <div className={styles.descontoItemTitle}>
                  De&nbsp;<strong>12</strong>&nbsp;até&nbsp;<strong>17</strong>
                  &nbsp;marmitas
               </div>
               <div className={styles.descontoItemValue}>10%</div>
            </div>
            <div className={styles.descontoItem}>
               <div className={styles.descontoItemTitle}>
                  De&nbsp;<strong>18</strong>&nbsp;até&nbsp;<strong>23</strong>
                  &nbsp;marmitas
               </div>
               <div className={styles.descontoItemValue}>15%</div>
            </div>
            <div className={styles.descontoItem}>
               <div className={styles.descontoItemTitle}>
                  Acima de&nbsp;<strong>24</strong>&nbsp;marmitas
               </div>
               <div className={styles.descontoItemValue}>20%</div>
            </div>
         </div>
         <div className={styles.descontoActions}>
            <Button onClick={() => router.push('/')}>Voltar para Loja</Button>
         </div>
      </div>
   )
}
export default PoliticaEntrega
