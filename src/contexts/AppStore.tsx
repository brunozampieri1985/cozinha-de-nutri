import { createContext, useState, useEffect } from 'react'

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
   id: number
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

export const Categories = Cardapio.reduce((acc, curr) => {
   if (!acc.includes(curr.category)) {
      acc.push(curr.category)
   }
   return acc
}, [] as string[])

type AppStoreType = {
   Cardapio: ICardapio[]
   Categories: string[]
   addToCart: (item: ICardapio) => void
   handleFilters: (by: string, value: string) => void
   cart: IOrderItem[]
   cardapio: ICardapio[]
   filterByText: string
   getCartTotal: () => number
   clearCart: () => void
}

export const AppContext = createContext<AppStoreType>({} as AppStoreType)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [cart, setCart] = useState<IOrderItem[]>([])
   const [cardapio, setCardapio] = useState<ICardapio[]>(Cardapio)
   const [filterByText, setFilterByText] = useState<string>('')
   const [filterByCategory, setFilterByCategory] = useState<string>('')

   const addToCart = (item: ICardapio) => {
      let currentStorage = localStorage.getItem('cart')
      if (!currentStorage) {
         let newOrderItem: IOrderItem = {
            id: 1,
            item: item,
            quantity: 1,
            price:
               typeof item.promoPrice === 'number'
                  ? (item.promoPrice as number)
                  : item.price,
         }
         localStorage.setItem('cart', JSON.stringify([newOrderItem]))
         return
      }
      let currentCart = JSON.parse(currentStorage)
      let newOrderItem: IOrderItem = {
         id: currentCart.length + 1,
         item: item,
         quantity: 1,
         price:
            typeof item.promoPrice === 'number'
               ? (item.promoPrice as number)
               : item.price,
      }
      currentCart.push(newOrderItem)
      setCart(currentCart)
      localStorage.setItem('cart', JSON.stringify(currentCart))
   }

   const handleFilters = (by: string, value: string) => {
      let result: ICardapio[] = []

      if (by === 'text') {
         setFilterByText(value)
         if (filterByCategory !== '') {
            Cardapio.filter((item) => {
               if (
                  item.category === filterByCategory &&
                  item.title.includes(value)
               ) {
                  result.push(item)
               }
            })
         } else {
            if (value === '') {
               result = Cardapio
            } else {
               Cardapio.filter((item) => {
                  if (item.title.includes(value)) {
                     result.push(item)
                  }
               })
            }
         }
      }
      if (by === 'category') {
         setFilterByCategory(value)
         if (value === 'Todas') {
            if (filterByText !== '') {
               Cardapio.filter((item) => {
                  if (item.title.includes(filterByText)) {
                     result.push(item)
                  }
               })
            } else {
               result = Cardapio
            }
         } else if (value === 'Low Carb') {
            if (filterByText !== '') {
               Cardapio.filter((item) => {
                  if (item.isLowCarb && item.title.includes(filterByText)) {
                     result.push(item)
                  }
               })
            } else {
               Cardapio.filter((item) => {
                  if (item.isLowCarb) {
                     result.push(item)
                  }
               })
            }
         } else {
            if (filterByText !== '') {
               Cardapio.filter((item) => {
                  if (
                     item.category === value &&
                     item.title.includes(filterByText)
                  ) {
                     result.push(item)
                  }
               })
            } else {
               Cardapio.filter((item) => {
                  if (item.category === value) {
                     result.push(item)
                  }
               })
            }
         }
      }
      setCardapio(result)
   }

   const clearCart = () => {
        setCart([])
        localStorage.removeItem('cart')
    }

   const getCartTotal = () => {
      let total = 0
      cart.forEach((item) => {
         total += item.price * item.quantity
      })
      return total
   }

   useEffect(() => {
      const getLocalCart = () => {
         const localCart = localStorage.getItem('cart')
         if (localCart) {
            setCart(JSON.parse(localCart))
         }
      }
      if (window !== undefined) {
         getLocalCart()
      }
   }, [])

   return (
      <AppContext.Provider
         value={{
            Cardapio,
            Categories,
            addToCart,
            cart,
            handleFilters,
            cardapio,
            filterByText,
            getCartTotal,
            clearCart
         }}>
         {children}
      </AppContext.Provider>
   )
}
