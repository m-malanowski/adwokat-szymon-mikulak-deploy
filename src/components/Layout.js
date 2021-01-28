import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import {motion, AnimatePresence} from "framer-motion";
const duration = 1
const durationExit = .4
const transition = {delay: .6, duration: .6, ease: [0.6, 0.01, -0.05, 0.9]};

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: .6,
      delay: .6,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {delay: .6, duration: .6},
  },
}

const Layout = ({children, location, props}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSideBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <motion.div>
        <Navbar toggleSideBar={toggleSideBar}/>
        <Sidebar isOpen={isOpen}  toggleSideBar={toggleSideBar}/>

        <AnimatePresence initial={true} exitBeforeEnter>

          <motion.div
            location={location}
            key={location.key}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={transition}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default Layout
