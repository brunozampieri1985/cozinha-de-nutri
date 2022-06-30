import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

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

export function OrderItem(
   id: number,
   item: ICardapio,
   quantity: number
): IOrderItem {
   return {
      id,
      item,
      quantity,
      price: item.promoPrice ? item.promoPrice : item.price,
   }
}

export interface IBuyer {
   name: string
   email: string
   phone: string
   address: string
   city: string
}

export interface IOrder {
   id: number | string
   buyer: IBuyer | null
   items: IOrderItem[]
   total: number
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
   getCartTotalWODiscount: () => number
   clearCart: (showToast: boolean) => void
   removeFromCart: (item: IOrderItem) => void
   increaseQuantity: (item: IOrderItem, value: number) => IOrderItem[]
   decreaseQuantity: (item: IOrderItem, value: number) => IOrderItem[]
   getTotalItems: () => number
   discount: number
   saveOrder: (order: IOrder) => void
   order: IOrder | null
   buyer: IBuyer | null
   saveBuyer: (buyer: IBuyer) => void
   deliveryRate: (city: string) => number
   clearAll: () => void
}

export const AppContext = createContext<AppStoreType>({} as AppStoreType)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [cart, setCart] = useState<IOrderItem[]>([])
   const [cardapio, setCardapio] = useState<ICardapio[]>(Cardapio)
   const [filterByText, setFilterByText] = useState<string>('')
   const [filterByCategory, setFilterByCategory] = useState<string>('')
   const [discount, setDiscount] = useState(0)
   const [order, setOrder] = useState<IOrder|null>(null)
   const [buyer, setBuyer] = useState<IBuyer|null>(null)

   const saveBuyer = (buyer: IBuyer) => {
      setBuyer(buyer)
      if (order) {
         setOrder({
            ...order,
            buyer
         })
      }
      localStorage.setItem('buyer', JSON.stringify(buyer))
   }
   
   const saveOrder = (order: IOrder) => { 
      setOrder(order)
   }

   const deliveryRate = (city: string) => {
      if (city === 'Peruíbe') {
         if (getCartTotal() > 89) {
            return 0
         } else {
            return 6
         }
      }
      return 30
   }

   const clearAll = () => {
      setCart([])
      setOrder(null)
      setDiscount(0)
      localStorage.removeItem('cart')
      localStorage.removeItem('buyer')
   }
   
   const isOnCart = (item: ICardapio) => {
      let itemOnCart = cart.filter((citem) => {
         if (
            item.title === citem.item.title &&
            item.weight === citem.item.weight
         ) {
            return citem
         }
      })
      return itemOnCart[0]
   }

   const increaseQuantity = (item: IOrderItem, value: number) => {
      let newCart = cart.map((citem) => {
         if (citem.id === item.id) {
            return {
               ...citem,
               quantity: citem.quantity + value,
            }
         }
         return citem
      })
      localStorage.setItem('cart', JSON.stringify(newCart))
      setCart(newCart)
      return newCart
   }

   const decreaseQuantity = (item: IOrderItem, value: number) => {
      let newCart = cart.map((citem) => {
         if (citem.id === item.id) {
            return {
               ...citem,
               quantity:
                  citem.quantity - value < 1 ? 1 : citem.quantity - value,
            }
         }
         return citem
      })
      localStorage.setItem('cart', JSON.stringify(newCart))
      setCart(newCart)
      return newCart
   }

   const removeFromCart = (item: IOrderItem) => {
      let newCart = cart.filter((citem) => {
         if (item.id !== citem.id) {
            return citem
         }
      })
      localStorage.setItem('cart', JSON.stringify(newCart))
      setCart(newCart)
      toast('Item removido do carrinho', {
         type: 'success',
         position: 'top-right',
         autoClose: 1000,
      })
   }

   const addToCart = (item: ICardapio) => {
      if (cart.length === 0) {
         let newItem: IOrderItem = OrderItem(1, item, 1)
         let newCart = [...cart, newItem]
         localStorage.setItem('cart', JSON.stringify(newCart))
         setCart(newCart)
         toast(`${item.title} adicionado ao carrinho!`, {
            type: 'success',
            autoClose: 1000,
            position: 'top-right',
         })
         return
      } else {
         let itemOnCart = isOnCart(item)
         if (itemOnCart) {
            let newCart = increaseQuantity(itemOnCart, 1)
            localStorage.setItem('cart', JSON.stringify(newCart))
            setCart(newCart)
            toast(`${item.title} adicionado ao carrinho!`, {
               type: 'success',
               autoClose: 1000,
               position: 'top-right',
            })
            return
         } else {
            let newItem = OrderItem(cart.length + 1, item, 1)
            let newCart = [...cart, newItem]
            localStorage.setItem('cart', JSON.stringify(newCart))
            setCart(newCart)
            toast(`${item.title} adicionado ao carrinho!`, {
               type: 'success',
               autoClose: 1000,
               position: 'top-right',
            })
            return
         }
      }
   }

   const getDiscount = () => {
      let percentage = 0
      let totalQuantity = 0
      cart.map((item) => {
         totalQuantity += item.quantity
      })
      if (totalQuantity > 5) percentage = 0.05
      if (totalQuantity > 11) percentage = 0.1
      if (totalQuantity > 17) percentage = 0.15
      if (totalQuantity > 23) percentage = 0.2
      return percentage
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

   const clearCart = (showToast?: boolean) => {
      setCart([])
      localStorage.removeItem('cart')
      if (showToast) {
         toast(`Carrinho limpo!`, {
            type: 'info',
            autoClose: 3000,
            position: 'top-right',
         })
      }
   }

   const getTotalItems = () => {
      let totalQuantity = 0
      cart.map((item) => {
         totalQuantity += item.quantity
      })
      return totalQuantity
   }

   const getCartTotal = () => {
      let total = 0
      cart.forEach((item) => {
         total += item.price * item.quantity
      })
      if (getDiscount() > 0) setDiscount(getDiscount)
      else setDiscount(0)
      return total - getDiscount() * total
   }

   const getCartTotalWODiscount = () => {
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
      const getBuyerData = () => {
         const buyerData = localStorage.getItem('buyer')
         if (buyerData) {
            setBuyer(JSON.parse(buyerData))
         }
      }
      if (window !== undefined) {
         getLocalCart()
         getBuyerData()
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
            clearCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            discount,
            getTotalItems,
            order,
            saveOrder,
            buyer,
            saveBuyer,
            getCartTotalWODiscount,
            deliveryRate,
            clearAll
         }}>
         {children}
      </AppContext.Provider>
   )
}
