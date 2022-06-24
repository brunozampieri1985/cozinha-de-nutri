export interface ICardapio {
   category: string
   title: string
   isLowCarb: boolean
   weight: number
   measure: string
   price: number
   promoPrice: number | false
}

export interface IOrderItem {
   item: ICardapio
   quantity: number
   price: number
}

export interface IOrder {
   id: number | string
   items: IOrderItem[]
   total: number
   discount: number
   totalWithDiscount: number
}

export const Cardapio: ICardapio[] = [
   {
      category: 'Escondidinho',
      title: 'Escondidinho de mandioca com carne moída',
      isLowCarb: false,
      weight: 250,
      measure: 'g',
      price: 16.9,
      promoPrice: false,
   },
   {
      category: 'Escondidinho',
      title: 'Escondidinho de mandioca com carne moída',
      isLowCarb: false,
      weight: 400,
      measure: 'g',
      price: 18.9,
      promoPrice: false,
   },
   {
      category: 'Escondidinho',
      title: 'Escondidinho de mandioquinha com frango',
      isLowCarb: false,
      weight: 250,
      measure: 'g',
      price: 16.9,
      promoPrice: false,
   },
   {
      category: 'Escondidinho',
      title: 'Escondidinho de mandioquinha com frango',
      isLowCarb: false,
      weight: 400,
      measure: 'g',
      price: 18.9,
      promoPrice: false,
   },
   {
      category: 'Escondidinho',
      title: 'Escondidinho de batata doce com frango',
      isLowCarb: false,
      weight: 250,
      measure: 'g',
      price: 16.9,
      promoPrice: false,
   },
   {
      category: 'Escondidinho',
      title: 'Escondidinho de batata doce com frango',
      isLowCarb: false,
      weight: 400,
      measure: 'g',
      price: 18.9,
      promoPrice: false,
   },
   {
      category: 'Espaguete',
      title: 'Espaguete integral com almondegas ao sugo',
      isLowCarb: false,
      weight: 250,
      measure: 'g',
      price: 16.9,
      promoPrice: false,
   },
   {
      category: 'Espaguete',
      title: 'Espaguete integral com almondegas ao sugo',
      isLowCarb: false,
      weight: 400,
      measure: 'g',
      price: 18.9,
      promoPrice: false,
   },

   {
      category: 'Espaguete',
      title: 'Espaguete integral ao sugo com frango em cubos e brócolis',
      isLowCarb: false,
      weight: 250,
      measure: 'g',
      price: 16.9,
      promoPrice: false,
   },
   {
      category: 'Espaguete',
      title: 'Espaguete integral ao sugo com frango em cubos e brócolis',
      isLowCarb: false,
      weight: 400,
      measure: 'g',
      price: 18.9,
      promoPrice: false,
   },
   {
      category: 'Espaguete',
      title: 'Espaguete integral ao sugo com tilápia grelhada e brocolis',
      isLowCarb: false,
      weight: 250,
      measure: 'g',
      price: 19.9,
      promoPrice: false,
   },
   {
      category: 'Espaguete',
      title: 'Espaguete integral ao sugo com tilápia grelhada e brocolis',
      isLowCarb: false,
      weight: 400,
      measure: 'g',
      price: 22.9,
      promoPrice: false,
   },
   {
      category: 'Purê',
      title: 'Purê de batata, almôndegas ao sugo e mix de legumes',
      isLowCarb: false,
      weight: 250,
      measure: 'g',
      price: 16,
      promoPrice: false,
   },
   {
      category: 'Purê',
      title: 'Purê de batata, almôndegas ao sugo e mix de legumes',
      isLowCarb: false,
      weight: 400,
      measure: 'g',
      price: 18.9,
      promoPrice: false,
   },

   {
      category: 'Purê',
      title: 'Purê de batata com tilápia grelhada e mix de legumes',
      isLowCarb: false,
      weight: 250,
      measure: 'g',
      price: 19.9,
      promoPrice: false,
   },
   {
      category: 'Purê',
      title: 'Purê de batata com tilápia grelhada e mix de legumes',
      isLowCarb: false,
      weight: 400,
      measure: 'g',
      price: 22.9,
      promoPrice: false,
   },
   {
      category: 'Arroz e Feijão',
      title: 'Arroz, feijão, carne moída e mix de legumes',
      isLowCarb: false,
      weight: 250,
      measure: 'g',
      price: 16.9,
      promoPrice: false,
   },
   {
      category: 'Arroz e Feijão',
      title: 'Arroz, feijão, carne moída e mix de legumes',
      isLowCarb: false,
      weight: 400,
      measure: 'g',
      price: 18.9,
      promoPrice: false,
   },
   {
      category: 'Arroz e Feijão',
      title: 'Arroz, feijão, carne desfiada e mix de legumes',
      isLowCarb: false,
      weight: 250,
      measure: 'g',
      price: 16.9,
      promoPrice: false,
   },
   {
      category: 'Arroz e Feijão',
      title: 'Arroz, feijão, carne desfiada e mix de legumes',
      isLowCarb: false,
      weight: 400,
      measure: 'g',
      price: 18.9,
      promoPrice: false,
   },
   {
      category: 'Strogonoff',
      title: 'Arroz, strogonoff de carne e batata rustica assada',
      isLowCarb: false,
      weight: 250,
      measure: 'g',
      price: 16.9,
      promoPrice: false,
   },
   {
      category: 'Strogonoff',
      title: 'Arroz, strogonoff de carne e batata rustica assada',
      isLowCarb: false,
      weight: 400,
      measure: 'g',
      price: 18.9,
      promoPrice: false,
   },
   {
      category: 'Arroz e Feijão',
      title: 'Arroz, feijão, frango ao curry e mix de legumes',
      isLowCarb: false,
      weight: 250,
      measure: 'g',
      price: 16.9,
      promoPrice: false,
   },
   {
      category: 'Arroz e Feijão',
      title: 'Arroz, feijão, frango ao curry e mix de legumes',
      isLowCarb: false,
      weight: 400,
      measure: 'g',
      price: 18.9,
      promoPrice: false,
   },
   {
      category: 'Arroz e Feijão',
      title: 'Arroz, feijão, frango cremoso e mix de legumes',
      isLowCarb: false,
      weight: 250,
      measure: 'g',
      price: 16.9,
      promoPrice: false,
   },
   {
      category: 'Arroz e Feijão',
      title: 'Arroz, feijão, frango cremoso e mix de legumes',
      isLowCarb: false,
      weight: 400,
      measure: 'g',
      price: 18.9,
      promoPrice: false,
   },
   {
      category: 'Strogonoff',
      title: 'Arroz, strogonoff de frango e batata rustica assada',
      isLowCarb: false,
      weight: 250,
      measure: 'g',
      price: 16.9,
      promoPrice: false,
   },
   {
      category: 'Strogonoff',
      title: 'Arroz, strogonoff de frango e batata rustica assada',
      isLowCarb: false,
      weight: 400,
      measure: 'g',
      price: 18.9,
      promoPrice: false,
   },
   {
      category: 'Arroz com Brócolis',
      title: 'Arroz com brócolis, tilápia grelhada e mix de legumes',
      isLowCarb: false,
      weight: 250,
      measure: 'g',
      price: 19.9,
      promoPrice: false,
   },
   {
      category: 'Arroz com Brócolis',
      title: 'Arroz com brócolis, tilápia grelhada e mix de legumes',
      isLowCarb: false,
      weight: 400,
      measure: 'g',
      price: 22.9,
      promoPrice: false,
   },
   {
      category: 'Feijoada',
      title: 'Feijoada Light (arroz, feijão preto, couve refogada, bacon, linguiça defumada)',
      isLowCarb: false,
      weight: 250,
      measure: 'g',
      price: 16.9,
      promoPrice: false,
   },
   {
      category: 'Feijoada',
      title: 'Feijoada Light (arroz, feijão preto, couve refogada, bacon, linguiça defumada)',
      isLowCarb: false,
      weight: 400,
      measure: 'g',
      price: 18.9,
      promoPrice: false,
   },
   {
      category: 'Legumes',
      title: 'Mix de legumes com carne moída (low carb)',
      isLowCarb: true,
      weight: 250,
      measure: 'g',
      price: 16.9,
      promoPrice: false,
   },
   {
      category: 'Legumes',
      title: 'Mix de legumes com carne moída (low carb)',
      isLowCarb: true,
      weight: 400,
      measure: 'g',
      price: 18.9,
      promoPrice: false,
   },
   {
      category: 'Legumes',
      title: 'Mix de legumes com frango em cubos (low carb)',
      isLowCarb: true,
      weight: 250,
      measure: 'g',
      price: 16.9,
      promoPrice: false,
   },
   {
      category: 'Legumes',
      title: 'Mix de legumes com frango em cubos (low carb)',
      isLowCarb: true,
      weight: 400,
      measure: 'g',
      price: 18.9,
      promoPrice: false,
   },
   {
      category: 'Purê',
      title: 'Purê de abobora com tiras de frango e mix de legumes (low carb)',
      isLowCarb: true,
      weight: 250,
      measure: 'g',
      price: 16.9,
      promoPrice: false,
   },
   {
      category: 'Purê',
      title: 'Purê de abobora com tiras de frango e mix de legumes (low carb)',
      isLowCarb: true,
      weight: 400,
      measure: 'g',
      price: 18.9,
      promoPrice: false,
   },
   {
      category: 'Purê',
      title: 'Purê de abobora com tiras de frango e mix de legumes (low carb)',
      isLowCarb: true,
      weight: 250,
      measure: 'g',
      price: 16.9,
      promoPrice: false,
   },
   {
      category: 'Purê',
      title: 'Purê de abobora com tiras de frango e mix de legumes (low carb)',
      isLowCarb: true,
      weight: 400,
      measure: 'g',
      price: 18,
      promoPrice: false,
   },
   {
      category: 'Purê',
      title: 'Purê de cenoura e beterraba com tilápia grelhada (low carb)',
      isLowCarb: true,
      weight: 250,
      measure: 'g',
      price: 19.9,
      promoPrice: false,
   },
   {
      category: 'Purê',
      title: 'Purê de cenoura e beterraba com tilápia grelhada (low carb)',
      isLowCarb: true,
      weight: 400,
      measure: 'g',
      price: 22,
      promoPrice: false,
   },
   {
      category: 'Lasanha',
      title: 'Lasanha de berinjela à bolonhesa (low carb)',
      isLowCarb: true,
      weight: 250,
      measure: 'g',
      price: 16.9,
      promoPrice: false,
   },
   {
      category: 'Lasanha',
      title: 'Lasanha de berinjela à bolonhesa (low carb)',
      isLowCarb: true,
      weight: 400,
      measure: 'g',
      price: 18.9,
      promoPrice: false,
   },
]

export const getCardapioByCategory = (category: string) =>
   Cardapio.filter((item) => item.category === category)

export const getLowCarbOptions = () =>
   Cardapio.filter((item) => item.isLowCarb === true)

export const isLowCarb = (item: ICardapio) => item.isLowCarb

export const isPromo = (item: ICardapio) =>
   typeof item.promoPrice === 'number' ? true : false

export const getPromoItens = () =>
   Cardapio.filter((item) =>
      typeof item.promoPrice === 'number' ? item : null
   )

export const addToCart = (item: ICardapio) => {
   let currentStorage = localStorage.getItem('cart')
   if (!currentStorage) {
      let newOrderItem: IOrderItem = {
         item: item,
         quantity: 1,
         price: isPromo(item) ? (item.promoPrice as number) : item.price,
      }
      localStorage.setItem('cart', JSON.stringify([newOrderItem]))
      return
   }
   let currentOrder = JSON.parse(currentStorage)
   let newOrderItem: IOrderItem = {
      item: item,
      quantity: 1,
      price: isPromo(item) ? (item.promoPrice as number) : item.price,
   }
   currentOrder.push(newOrderItem)
   localStorage.setItem('cart', JSON.stringify(currentOrder))

   console.log(getCart(), getCartTotal())
}

export const getCart = () => {
   let currentStorage = localStorage.getItem('cart')
   if (!currentStorage) {
      return [] as IOrderItem[]
   }

   let currentOrder = JSON.parse(currentStorage) as IOrderItem[]
   let cart: IOrderItem[] = []
   currentOrder.forEach((item) => {
      if (cart.length === 0) {
         cart.push(item)
         return
      } else {
         let found = false
         cart.forEach((cartItem) => {
            if (
               cartItem.item.title === item.item.title &&
               cartItem.item.weight === item.item.weight
            ) {
               cartItem.quantity += item.quantity
               found = true
            }
         })
         if (!found) {
            cart.push(item)
         }
      }
   })
   return cart
}

export const getCartTotal = () => {
   let currentStorage = localStorage.getItem('cart')
   if (!currentStorage) {
      return 0
   }
   let currentOrder = JSON.parse(currentStorage) as IOrderItem[]
   let total = 0
   currentOrder.forEach((item) => {
      total += item.price * item.quantity
   })
   return total
}
