import React from "react"
import {motion} from "framer-motion";
import { SplitText } from "./SplitText"
const transition = {duration: 1., ease: [0.6, 0.01, -0.05, 0.9]};


const Subheader = ({pageTitle, pagePreTitle, subImg, alt}) => {
  return (
    <motion.header
      animate={{
        height: "92vh",
        transition: {delay: 2.0, ...transition},
      }}
      exit={{
        height: "100vh",
        transition: {delay: .2, ...transition},
      }}
      className="subheader">

      <motion.img initial={{ transform: 'scale(1.2) ' }} exit={{  transform: 'scale(1.2)', transition: { delay: .2, ...transition } }} animate={{  transform: 'scale(1.0)' , transition: { delay: 2, ...transition } }}
        src={subImg} alt={alt} />
      <div className="page-title container-fluid">
        <div className="col-md-8 col-12">
          <motion.p
            className="beforeH1"
            initial={{opacity: 0, y: 12}}
            animate={{
              opacity: 1,
              y: 0,
              transition: {delay: 2, ...transition},
            }}
            exit={{
              y: 12,
              opacity:0,
              transition: {  ...transition},
            }}
          >
            {pagePreTitle}
          </motion.p>
          {/*<motion.h1*/}
          {/*  className="page-title"*/}
          {/*  initial={{opacity: 0, y: 40}}*/}
          {/*  animate={{*/}
          {/*    opacity: 1,*/}
          {/*    y: 0,*/}
          {/*    transition: {delay: .6, ...transition},*/}
          {/*  }}*/}
          {/*  exit={{*/}
          {/*    y: 40,*/}
          {/*    opacity:0,*/}
          {/*    transition: {  ...transition},*/}
          {/*  }}>*/}
          {/*  {pageTitle}*/}
          {/*</motion.h1>*/}

            <SplitText
              initial={{ y: '100%' }}
              animate="visible"
              exit="hidden"
              variants={{
                visible: i => ({
                  y: 0,
                  transition: {
                    delay: i * 0.1,
                    duration: 1,
                    ease: [0.6, 0.01, -0.05, 0.9]
                  }
                }),
                hidden: i => ({
                  y: 80,
                  transition: {
                    delay: i * 0.01,
                    duration: 1,
                    ease: [0.6, 0.01, -0.05, 0.9],
                  }
                }),

              }}
            >
              {pageTitle}
            </SplitText>

        </div>
      </div>
    </motion.header>
  )
}

export default Subheader