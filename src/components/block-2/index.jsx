import { motion } from 'framer-motion'
import { HoverAnimation } from '../setup-logic'

import { H1, P } from '../typography'

const Block2 = () => {
  // return (
  //   <motion.div className='block2' whileHover={{ scale: 1.1, boxShadow: '0px 0px 12px  rgba(0, 0, 0, 0.5)' }}>
  //     <H1>Header</H1>
  //     <P>Paragraph</P>
  //   </motion.div>
  // )

  return (
    <HoverAnimation className='block2'>
      <H1>Header</H1>
      <P>Paragraph</P>
    </HoverAnimation>
  )
}

export default Block2
