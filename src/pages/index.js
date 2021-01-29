import React from "react"
import { graphql } from "gatsby"
import SEO from '../components/SEO'
import MainPageSlider from "../components/MainPageSlider"
import { motion } from "framer-motion"
const icons = {
  'facebook': 'M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z'
};
// const svgVariants = {
//   hidden: {rotate: -180},
//   visible: {
//     rotate: 0,
//     transition: {
//       duration: 5
//     }
//   }
// }
//
// const pathVariants = {
//   hidden: {
//     opacity: 0,
//     pathLength: 0
//   },
//   visible:{
//     opacity: 1,
//     pathLength: 1,
//     transition: {
//       duration: 2,
//       ease: "easeInOut"
//     }
//   }
// }
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgba(255, 255, 255, 1)"
  }
};

const indexPage = () => (
  <>
    <SEO title="⚖️ &nbsp; Kancelaria Adwokacka Szymon Mikulak, Adwokat Gdynia, Prawnik Gdynia" description="Zadzwoń ☎ 606 502 202. Adwokat Gdynia - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdynia"/>
    <motion.div
      className="fake-loader-wrapper"
      initial={{opacity: 1}}
      animate={{
        y: "-100%",
        transition: {delay: 1.8, when: "afterChildren", duration: .5},
        transitionEnd: {
          display: "none",
        },
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="initialLogo"
      >
        <motion.path
          // d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
          d="M451.39 352.177l-17.797-17.797v-75.29l17.774-6.62v-19.61l-17.774 6.62-88.493 33.217h-.123c-78.29-27.324-110.404-40.93-110.434-77.297h.03c0-29.223 29.35-52.997 65.427-52.997 25.49 0 47.383 11.987 58.177 29.257-8.317 2.437-14.43 10.033-14.43 19.14 0 11.063 8.97 20.033 20.033 20.033 9.473 0 17.367-6.596 19.453-15.433h.58c0-.977-.126-1.927-.173-2.893.05-.574.173-1.12.173-1.707 0-2.137-.423-4.157-1.043-6.09-6.09-34.297-40.827-60.693-82.767-60.693-46.196 0-83.78 31.993-83.806 71.336h-.037c0 45.84 37.873 64.594 102.1 87.394l-7.967 2.94-10.306 3.863-10.284-3.863-123.31-46.207-17.773-6.62v19.61l17.773 6.62v75.34l-17.783 17.783 17.783-.023v.053h18.387v-.066h17.87l-17.87-17.87v-68.354l89.03 33.404-20.76 7.78c-2.207-.737-4.413-1.594-6.74-2.33l-17.897-6.13-6.006 17.403 3.676 1.227 14.217 4.903c4.537 1.593 8.827 3.063 12.993 4.537C336.26 355.67 365.42 369.32 365.427 404.61c-.01 29.22-29.354 52.983-65.427 52.983-25.493 0-47.387-11.986-58.18-29.263 8.317-2.437 14.43-10.033 14.43-19.137 0-11.063-8.967-20.03-20.03-20.03-9.473 0-17.367 6.597-19.45 15.437h-.58c0 .977.127 1.923.173 2.89-.05.57-.173 1.12-.173 1.703 0 2.137.423 4.154 1.043 6.084 6.084 34.3 40.827 60.703 82.77 60.703 46.204 0 83.794-32.007 83.81-71.353v-.014-.013c-.013-45.33-34.683-63.27-103.796-87.903l20.003-7.507 37.973 14.247 33.34 12.503 6.497-17.16-51.663-19.4 19.18-7.197 1.84-.736h.123l67.903-25.494v68.394l-17.896 17.773h.133l-.093.093 17.853-.023v.053h36.157l-.067-.066h.09z"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1.6, ease: "easeInOut" },
          }}
        />
      </motion.svg>
    </motion.div>

    <div className="index-page">
      <MainPageSlider />
    </div>
  </>
)
export default indexPage;
