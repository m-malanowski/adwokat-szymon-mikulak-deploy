import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
// import "../css/homeSlider.css"
import img1 from "../assets/imgs/home-slider/newHomeSlider2.png"
import img2 from "../assets/imgs/home-slider/newHomeSlider3.png"
import img3 from "../assets/imgs/home-slider/newHomeSlider6.png"
import Subheader from "./Subheader"
import subHeaderPhoto from "../assets/imitationSub.png"
import Button from "./Button"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { SplitText } from "./SplitText"

const transition = {duration: 1., ease: [0.6, 0.01, -0.05, 0.9]};
const variants = {
  visible: i => ({
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.9],
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
}
const buttonVariants = {
  initial: {opacity: 0, y: 40},
  animate: {
  opacity: 1,
    y: 0,
    transition: {delay: .9, ...transition},
  },
  exit: {
    y: 40,
    opacity: 0,
    transition: {  ...transition},
  }
}

const images = [
  {
    img: img1,
    title: "Każdy klient jest dla nas wyjątkowy.",
    beforeTitle: "o kancelarii",
    url: "/adwokat-gdynia",
    id: 1,
  },
  {
    img: img2,
    title: "Najlepiej o naszej dobrej pracy świadczy stale powiększające się grono Klientów.",
    beforeTitle: "Zakres Usług",
    url: "/zakres-uslug",
    id: 2,

  },
  {
    img: img3,
    title: "Klienci doceniają u nas umiejętność kompleksowego rozwiązywania problemów.",
    beforeTitle: "Kontakt",
    url: "/kontakt",
    id: 3,
  }
]

//
// const images = [
//   "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
//   "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
//   "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
//   "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
// ]

const ArrowLeft = (props) => {


  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

const  ArrowRight = (props) => {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}


const MainPageSlider = (props) => {

  const controls = useAnimation()
  const controls2 = useAnimation()


  const [opacities, setOpacities] = React.useState([])

  const [sliderRef] = useKeenSlider({
    slides: images.length,
    loop: true,
    duration: 2000,

    beforeChange: (instance) => {
      console.log("beforeChange");
      controls.start("hidden")
      controls2.start("hidden")

    },
    afterChange: (instance) => {
      console.log("afterChange");
      controls.start("visible")
      controls2.start("visible")

    },

    move(s) {
      const new_opacities = s.details().positions.map((slide) => slide.portion)
      setOpacities(new_opacities)
    },
  })

  return (
    <>

    <div ref={sliderRef} className="fader">
        <div className="home-slider keen-slider__slide">

          {images.map((item, idx) => (
            <div key={idx} className="fader__slide" style={{ opacity: opacities[idx] }}>

                  <motion.img
                    animate={controls2}
                    variants={{
                      visible: {
                        // filter: "blur(0px)",
                        opacity: 1,
                        transition: { delay: .1, duration: .8,  }
                      },
                      hidden: {
                        // filter: "blur(10px)",
                        opacity: 0.7,
                      }
                    }}
                    src={item.img} />
              <AnimatePresence exitBeforeEnter>
                  <motion.h1
                    key={idx}
                    initial={{ x: 300, opacity: 0 }}
                    animate={controls}
                    exit={{ x: -300, opacity: 0 }}
                    variants={{
                      visible: {
                        opacity: 1, y: 210,
                        transition: { delay: .1, duration: .8,  }
                      },
                      hidden: { opacity: 0, y: 150 }
                    }}
                  >
                    {item.title}
                  </motion.h1>
                <motion.div variants={buttonVariants} initial="initial" animate="animate" exit="exit" >
                  <Button url={item.url} buttonDesc={item.beforeTitle}/>
                </motion.div>

            </AnimatePresence>

            </div>
          ))}

        </div>
      </div>
    </>
  )
}
export default MainPageSlider;