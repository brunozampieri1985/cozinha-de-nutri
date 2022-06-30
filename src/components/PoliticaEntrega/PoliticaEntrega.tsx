import Button from '@components/Button'
import { useRouter } from 'next/router'
import styles from './PoliticaEntrega.module.css'

const PoliticaEntrega: React.FC = () => {
   const router = useRouter()

   return (
      <div className={styles.politicaEntrega}>
         <h1 className={styles.entregaTitle}>Política de Entregas</h1>
         <br />
         <hr />
         <br />
         <p className={styles.entregaText}>
            Visando sempre fornecer os produtos com a maior qualidade possível,
            não mantemos estoque, fazemos sob encomenda. Por esse motivo,
            solicitamos atenção conforme abaixo:
         </p>
         <br />
         <ul>
            <p className={styles.entregaText}>
               - Pedidos confirmados até às 13h00 de segunda-feira serão
               entregues na quarta-feira seguinte até as 18h00.
            </p>
            <p className={styles.entregaText}>
               - Pedidos confirmados até às 13h00 de quarta-feira serão
               entregues na sexta-feira seguinte até as 18h00.
            </p>
         </ul>
         <br />
         <br />
         <h5>Taxa de Entrega</h5>
         <br/>
         <p className={styles.entregaText}>
            Para pedidos de até 5 marmitas a taxa de frete é de: R$ 6,00. Para 6
            ou mais marmitas, o frete é GRÁTIS!
         </p>
         <br />
         <div className={styles.entregaActions}>
            <Button onClick={() => router.push('/')}>Voltar para Loja</Button>
         </div>
      </div>
   )
}

export default PoliticaEntrega
