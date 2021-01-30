import React from "react"
import { graphql } from "gatsby"
import SEO from '../components/SEO'
import MainPageSlider from "../components/MainPageSlider"
import { motion } from "framer-motion"

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
        transition: {delay: 2, when: "afterChildren", duration: .5},
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
          d="M225.695 176.088l-8.898-8.898v-37.645l8.887-3.31v-9.805l-8.887 3.31-44.247 16.608h-.061c-39.145-13.661-55.202-20.465-55.217-38.648h.015c0-14.612 14.675-26.498 32.713-26.498 12.745 0 23.692 5.993 29.089 14.628-4.159 1.218-7.215 5.017-7.215 9.57 0 5.532 4.485 10.017 10.016 10.017 4.737 0 8.684-3.299 9.727-7.717h.29c0-.488-.063-.963-.087-1.447.025-.286.087-.56.087-.853 0-1.068-.212-2.078-.522-3.045-3.045-17.148-20.413-30.347-41.383-30.347-23.098 0-41.89 15.997-41.903 35.669h-.019c0 22.92 18.937 32.296 51.05 43.696l-3.983 1.47-5.153 1.932-5.142-1.932-61.655-23.103-8.887-3.31v9.805l8.887 3.31v37.67l-8.892 8.892 8.892-.012v.027h9.193v-.034h8.935l-8.935-8.935v-34.176l44.515 16.701-10.38 3.89c-1.103-.368-2.206-.796-3.37-1.165l-8.948-3.065-3.003 8.702 1.838.613 7.108 2.452c2.269.797 4.414 1.532 6.497 2.268 41.483 14.462 56.063 21.287 56.067 38.932-.005 14.61-14.677 26.492-32.714 26.492-12.746 0-23.693-5.994-29.09-14.632 4.159-1.218 7.215-5.017 7.215-9.568 0-5.532-4.483-10.015-10.015-10.015-4.736 0-8.683 3.298-9.725 7.718h-.29c0 .488.064.962.087 1.445-.025.285-.087.56-.087.852 0 1.068.212 2.076.522 3.041 3.042 17.15 20.413 30.352 41.385 30.352 23.102 0 41.896-16.003 41.905-35.677v-.006-.007c-.007-22.665-17.342-31.635-51.898-43.952l10.001-3.753 18.987 7.123 16.67 6.252 3.248-8.58-25.831-9.7 9.59-3.598.92-.369h.061l33.952-12.746v34.196l-8.948 8.887h.066l-.046.047 8.926-.012v.027h18.079l-.034-.034h.045z"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1.9, ease: "easeInOut" },
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
