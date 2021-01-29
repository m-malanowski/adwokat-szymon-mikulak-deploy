import React from "react"
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
      delay: 1.9,
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.9]
    }
  },
}
const svgLogo = 'M55 38.678l-2.939-2.94V23.306l2.935-1.093v-3.238l-2.935 1.093-14.613 5.485h-.02c-12.93-4.512-18.232-6.759-18.237-12.764h.005c0-4.826 4.846-8.752 10.804-8.752 4.21 0 7.825 1.98 9.607 4.832a3.298 3.298 0 00-2.383 3.16 3.304 3.304 0 006.52.76h.097c0-.161-.021-.318-.029-.478.008-.095.029-.185.029-.282 0-.353-.07-.686-.173-1.005C42.663 5.359 36.926 1 30.001 1c-7.63 0-13.836 5.283-13.84 11.78h-.006c0 7.57 6.254 10.667 16.86 14.432l-1.315.486-1.702.638-1.698-.638-20.363-7.63-2.935-1.094v3.238l2.935 1.093v12.442L5 38.684l2.937-.004v.008h3.036v-.01h2.951l-2.951-2.951V24.439l14.702 5.516-3.428 1.285c-.365-.122-.729-.263-1.113-.385l-2.956-1.012-.992 2.874.608.202 2.347.81c.75.263 1.458.506 2.146.75 13.7 4.775 18.516 7.03 18.517 12.857-.001 4.825-4.847 8.75-10.804 8.75-4.21 0-7.825-1.98-9.608-4.833a3.298 3.298 0 002.383-3.16 3.303 3.303 0 00-6.52-.759h-.095c0 .162.02.318.029.478-.009.094-.03.185-.03.281 0 .353.07.686.173 1.005 1.005 5.664 6.742 10.024 13.669 10.024 7.63 0 13.837-5.285 13.84-11.783v-.005c-.003-7.485-5.728-10.448-17.141-14.516l3.303-1.24 6.271 2.354 5.506 2.064 1.073-2.834-8.532-3.203 3.167-1.189.304-.121h.02l11.214-4.21v11.294l-2.956 2.935h.023l-.016.016 2.948-.004v.008h5.971l-.01-.01H55z'

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
              width={60}
              height={60}
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
