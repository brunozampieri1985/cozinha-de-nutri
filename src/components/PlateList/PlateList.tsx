import styles from './PlateList.module.css'
import {
   Cardapio,
   getCardapioByType,
   getLowCarbOptions,
} from '../../services/cardapio'
import formatters from '../../utils/formatters'
import { Button, Card, Grid, Link, Text } from '@nextui-org/react'

const PlateList: React.FC = () => {
   return (
      <Grid.Container gap={3}>
         {Cardapio.map((item, index) => (
            <Grid xs={3} key={index}>
            <Card css={{ p: '$6', mw: '400px' }}>
               <Card.Header>
                  <Text h6 css={{ lineHeight: '$xs' }}>
                     {item.title}
                  </Text>
               </Card.Header>
               <Card.Body css={{ py: '$2', display: 'flex' }}>
                  <Text span>250g: {formatters.currency(item.price.g250)}
                  &nbsp;&bull;&nbsp;
                  400g: {formatters.currency(item.price.g400)}
                  </Text>
               </Card.Body>
               <Card.Footer>
                  <Button shadow color={'warning'} auto >ADD +</Button>
                  <Button shadow color={'default'} auto css={{ml: 4}}>Saiba mais</Button>
               </Card.Footer>
            </Card>
            </Grid>
         ))}
      </Grid.Container>
   )
}
export default PlateList

/* {Cardapio.map((item, index) => (
    <div key={index} className={styles.PlateList}>
        <h4>{item.title}</h4>
        <span>250g: {formatters.currency(item.price.g250)}</span>
        &nbsp;&bull;&nbsp;
        <span>400g: {formatters.currency(item.price.g400)}</span>
        <p>{item.isLowCarb ? 'LowCarb' : ''}</p>
    </div>
))} */
