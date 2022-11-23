import { motion } from 'framer-motion'

import { H1, P } from '../typography'

const Block1 = () => {
  return (
    <motion.div className='block1' initial={{ y: 250, x: '-100vh', opacity: 0 }} animate={{ y: 0, x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 2, type: 'spring' }}>
      <motion.div animate={{}}>
        <H1>Header</H1>
      </motion.div>
      <motion.div animate={{}}>
        <P>Paragraph</P>
      </motion.div>
    </motion.div>
  )
}

export default Block1
