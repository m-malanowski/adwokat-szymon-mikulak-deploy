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
const svgLogo = 'M64.167 45.124l-3.429-3.43V27.19l3.424-1.276v-3.778l-3.424 1.276-17.049 6.4h-.024c-15.083-5.265-21.27-7.887-21.276-14.893h.006C22.395 9.29 28.05 4.71 35 4.71c4.911 0 9.129 2.31 11.208 5.636-1.602.47-2.78 1.933-2.78 3.688a3.855 3.855 0 007.607.886h.113c0-.188-.025-.371-.034-.557.01-.11.034-.216.034-.33 0-.41-.082-.8-.201-1.172C49.773 6.252 43.08 1.166 35 1.166c-8.9 0-16.141 6.164-16.146 13.744h-.007c0 8.832 7.296 12.445 19.67 16.837l-1.535.567-1.985.744-1.982-.744L9.26 23.412l-3.425-1.276v3.778L9.26 27.19v14.515L5.834 45.13l3.426-.005v.01h3.542v-.012h3.443l-3.443-3.443V28.51l17.152 6.436-4 1.5c-.424-.143-.85-.308-1.298-.45l-3.448-1.18-1.157 3.352.708.237 2.74.944c.873.307 1.7.59 2.503.874 15.984 5.573 21.602 8.202 21.603 15.001-.002 5.63-5.655 10.208-12.605 10.208-4.911 0-9.13-2.31-11.209-5.638 1.602-.47 2.78-1.933 2.78-3.687a3.854 3.854 0 00-7.606-.885h-.112c0 .189.025.371.034.557-.01.11-.034.216-.034.328 0 .412.082.8.201 1.172 1.172 6.609 7.866 11.695 15.947 11.695 8.901 0 16.143-6.166 16.147-13.746v-.005c-.003-8.734-6.683-12.19-19.998-16.936l3.854-1.446 7.316 2.745 6.423 2.408 1.252-3.306-9.954-3.737 3.696-1.387.354-.142h.024l13.082-4.911v13.176l-3.448 3.425h.026l-.018.018 3.44-.005v.01h6.965l-.013-.012h.018z'

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
            <svg
              width={70}
              height={70}
            >
              <path fill="#fff" d={svgLogo}/>
            </svg>

            {/*<img src={logo} alt="Adwokat Szymon Mikulak" />*/}
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
