import { motion } from 'framer-motion'
// initial
// animate
// transition
// whileHover

const initAnimateObj = {
  initial: false,
  animate: false,
  transition: false,
  whileHover: false,
  exit: false,
}

const Animate = ({ children, className = '', animateObj = initAnimateObj }) => {
  const { initial, animate, transition, whileHover } = animateObj
  return (
    <motion.div initial={initial} className={className} animate={animate} transition={transition} whileHover={whileHover}>
      {children}
    </motion.div>
  )
}

export const HoverAnimation = ({ children, className = '' }) => {
  const whileHover = { scale: 1.1, boxShadow: '0px 0px 12px  rgba(0, 0, 0, 0.5)' }
  const animateObj = { ...initAnimateObj, whileHover }

  return (
    <Animate className={className} animateObj={animateObj}>
      {children}
    </Animate>
  )
}

export const SlideInAnimation = ({ children, className = '' }) => {
  const isArray = Array.isArray(children)

  const animateNode = (child, index = 0) => {
    const initial = { y: 50, opacity: 0 }
    const whileInView = { y: 0, opacity: 1 }
    const transition = { duration: 0.5, delay: index / 10 }
    const exit = { y: 50, opacity: 0 }

    const animateObj = { ...initAnimateObj, initial, whileInView, transition, exit }

    return <Animate animateObj={animateObj}>{child}</Animate>
  }

  return <div className={className}>{isArray ? children.map((child, index) => animateNode(child, index)) : animateNode(children)}</div>
}
