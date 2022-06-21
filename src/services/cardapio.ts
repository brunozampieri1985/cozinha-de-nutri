interface ICardapio {
   type: string
   title: string
   isLowCarb: boolean
   price: {
      g250: number
      g400: number
   }
}

export const Cardapio: ICardapio[] = [
   {
      type: 'Pratos Quentes',
      title: 'Escondidinho de mandioca com carne moída',
      isLowCarb: false,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Escondidinho de mandioquinha com frango',
      isLowCarb: false,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Escondidinho de batata doce com frango',
      isLowCarb: false,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Espaguete integral com almondegas ao sugo',
      isLowCarb: false,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Espaguete integral ao sugo com frango em cubos e brócolis',
      isLowCarb: false,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Espaguete integral ao sugo com tilápia grelhada e brocolis',
      isLowCarb: false,
      price: {
         g250: 19.9,
         g400: 22.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Purê de batata, almôndegas ao sugo e mix de legumes',
      isLowCarb: false,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Purê de batata com tilápia grelhada e mix de legumes',
      isLowCarb: false,
      price: {
         g250: 19.9,
         g400: 22.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Arroz, feijão, carne moída e mix de legumes',
      isLowCarb: false,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Arroz, feijão, carne desfiada e mix de legumes',
      isLowCarb: false,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Arroz, strogonoff de carne e batata rustica assada',
      isLowCarb: false,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Arroz, feijão, frango ao curry e mix de legumes',
      isLowCarb: false,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Arroz, feijão, frango cremoso e mix de legumes',
      isLowCarb: false,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Arroz, strogonoff de frango e batata rustica assada',
      isLowCarb: false,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Arroz com brócolis, tilápia grelhada e mix de legumes',
      isLowCarb: false,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Feijoada Light (arroz, feijão preto, couve refogada, bacon, linguiça defumada)',
      isLowCarb: false,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Mix de legumes com carne moída (low carb)',
      isLowCarb: true,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Mix de legumes com frango em cubos (low carb)',
      isLowCarb: true,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Purê de abobora com tiras de frango e mix de legumes (low carb)',
      isLowCarb: true,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Purê de abobora com tiras de frango e mix de legumes (low carb)',
      isLowCarb: true,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Purê de cenoura e beterraba com tilápia grelhada (low carb)',
      isLowCarb: true,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
   {
      type: 'Pratos Quentes',
      title: 'Lasanha de berinjela à bolonhesa (low carb)',
      isLowCarb: true,
      price: {
         g250: 16.9,
         g400: 18.9,
      },
   },
]

export const getCardapioByType = (type: string) => Cardapio.filter(item => item.type === type)


export const getLowCarbOptions = () => Cardapio.filter(item => item.isLowCarb === true)


export const AddToCart = (item: ICardapio) => {
   
}