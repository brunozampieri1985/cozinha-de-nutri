import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/* export const seed = async () => {
   const caldos = Cardapio.filter((c) => c.category === 'Caldos')
   caldos.map(async (item) => {
      let newItem = {
         ...item,
         promoPrice: 0,
      }
      const response = await supabase.from('cardapio').insert(newItem)
      console.log(response)
   })
} */
