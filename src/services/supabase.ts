import { createClient } from '@supabase/supabase-js'
import { Cardapio } from '@contexts/AppStore'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const seed = () => {
   Cardapio.map(async (item) => {
    let newItem = {
        ...item,
        promoPrice: 0
    }
    const response = await supabase.from('cardapio').insert(newItem)
    console.log(response)
   })
}
