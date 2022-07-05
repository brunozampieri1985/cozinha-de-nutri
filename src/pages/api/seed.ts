import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@services/supabase'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
      res.status(200).json({ message: 'ok' })
}

export default handler
