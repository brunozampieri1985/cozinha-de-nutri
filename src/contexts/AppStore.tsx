import Loading from '@components/Loading'
import { supabase } from '@services/supabase'
import { createContext, useState, useEffect, useMemo } from 'react'
import { toast } from 'react-toastify'
export interface ICardapio {
   id?: number
   category: string
   title: string
   isLowCarb: boolean
   weight: number
   measure: string
   price: number
   promoPrice: number 
   created?: string
}

export interface IOrderItem {
   id?: number
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
      price: item.promoPrice > 0 ? item.promoPrice : item.price,
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
   id?: number | string
   buyer: IBuyer | null
   items: IOrderItem[]
   total: number
}

type AppStoreType = {
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
   const [cardapio, setCardapio] = useState<ICardapio[]>([])
   const [cart, setCart] = useState<IOrderItem[]>([])
   const [filterByText, setFilterByText] = useState<string>('')
   const [filterByCategory, setFilterByCategory] = useState<string>('')
   const [discount, setDiscount] = useState(0)
   const [order, setOrder] = useState<IOrder|null>(null)
   const [buyer, setBuyer] = useState<IBuyer|null>(null)
   const [isLoading, setIsLoading] = useState(true)

   const Categories = useMemo(() => cardapio.reduce((acc, curr) => {
      if (!acc.includes(curr.category)) {
         acc.push(curr.category)
      }
      return acc
   }, [] as string[]), [cardapio])

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
            cardapio.filter((item) => {
               if (
                  item.category === filterByCategory &&
                  item.title.includes(value)
               ) {
                  result.push(item)
               }
            })
         } else {
            if (value === '') {
               result = cardapio
            } else {
               cardapio.filter((item) => {
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
               cardapio.filter((item) => {
                  if (item.title.includes(filterByText)) {
                     result.push(item)
                  }
               })
            } else {
               result = cardapio
            }
         } else if (value === 'Low Carb') {
            if (filterByText !== '') {
               cardapio.filter((item) => {
                  if (item.isLowCarb && item.title.includes(filterByText)) {
                     result.push(item)
                  }
               })
            } else {
               cardapio.filter((item) => {
                  if (item.isLowCarb) {
                     result.push(item)
                  }
               })
            }
         } else {
            if (filterByText !== '') {
               cardapio.filter((item) => {
                  if (
                     item.category === value &&
                     item.title.includes(filterByText)
                  ) {
                     result.push(item)
                  }
               })
            } else {
               cardapio.filter((item) => {
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
      const getFullCardapio = async () => {
         const response = await supabase.from<ICardapio>('cardapio').select('*')
         setCardapio(response.data as unknown as ICardapio[])
      }

      getFullCardapio()

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
      setIsLoading(false)
   }, [])

   if (isLoading) return <Loading/>

   return (
      <AppContext.Provider
         value={{
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
