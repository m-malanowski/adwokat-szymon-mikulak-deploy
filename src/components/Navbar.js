import React from "react"
import logo from "../assets/imgs/logoMonogramito.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { AnimatePresence, motion } from "framer-motion"
const variants = {
  initial:{
    opacity: 0,
    y: '20px'
  },
  animate: {
    y:0,
    opacity: 1,
    transition:{
      delay: 1.8,
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.9]
    }
  },

}
const Navbar = ({toggleSideBar}) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <motion.a
            initial="initial"
            animate="animate"
            variants={variants}
            href="/" >
            <img src={logo} alt="Adwokat Szymon Mikulak" />
          </motion.a>

          <motion.button
            initial="initial"
            animate="animate"
            variants={variants}
            type="button" className="toggle-btn" onClick={toggleSideBar}>
            <FaAlignRight/>
          </motion.button>

        </div>
      </div>
      <PageLinks styleClass="nav-links"/>
    </nav>
  )
}

export default Navbar
