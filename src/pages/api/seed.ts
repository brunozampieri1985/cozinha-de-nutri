import type { NextApiRequest, NextApiResponse } from 'next'
import { seed, supabase } from '@services/supabase'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
   const response = await seed()
   res.status(200).json({ message: response })
}

export default handler
