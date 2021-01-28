import React from "react"
import { useKeenSlider } from "keen-slider/react"
// import "keen-slider/keen-slider.min.css"
// import "../css/homeSlider.css"
// import img1 from "../assets/imgs/home-slider/homeSlider1.webp"
// import img2 from "../assets/imgs/home-slider/homeSlider2.webp"
// import img3 from "../assets/imgs/home-slider/homeSlide3.webp"

import img1 from "../assets/imgs/home-slider/newHomeSlider2.png"
import img2 from "../assets/imgs/home-slider/newHomeSlider3.png"
import img3 from "../assets/imgs/home-slider/newHomeSlider6.png"

import Subheader from "./Subheader"
import subHeaderPhoto from "../assets/imitationSub.png"
import Button from "./Button"
import { motion, AnimatePresence } from "framer-motion"
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

//
// const positionStyle = (idx) => {
//   if (!details) return {}
//   const position = details.positions[idx]
//   const x = details.widthOrHeight * position.distance
//   const scale_size = 0.7
//   const scale = 1 - (scale_size - scale_size * position.portion)
//   return {
//     transform: `translate3d(${x}px, 0px, 0px) scale(${scale})`,
//     WebkitTransform: `translate3d(${x}px, 0px, 0px) scale(${scale})`,
//   }
// }


const MainPageSlider = (props) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [pause, setPause] = React.useState(false)
  const [opacities, setOpacities] = React.useState([])
  const timer = React.useRef()
  const [details, setDetails] = React.useState(null)
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    move(s) {
      setDetails(s.details())
      const new_opacities = s.details().positions.map((slide) => slide.portion)
      setOpacities(new_opacities)
    },
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(false)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 3000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <>
      <div ref={sliderRef} className="keen-slider fader ">
        {images.map((item, idx) => (
          <div className="fader__slide keen-slider__slide home-slider" key={idx}  style={{ opacity: opacities[idx] }}>
            <img src={item.img} alt="" />
            <div className="container-fluid">
              <div className="col-md-8">
                <p>{item.beforeTitle}</p>
                <SplitText initial={{ y: '100%' }} animate="visible" exit="hidden" variants={variants}>
                  {item.title}
                </SplitText>

                <motion.div variants={buttonVariants} initial="initial" animate="animate" exit="exit" >
                  <Button url={item.url} buttonDesc={item.beforeTitle}/>
                </motion.div>
              </div>
            </div>
          </div>
          ))}
        {/*<div className="img-wrapper keen-slider__slide home-slider zoom-out__slide">*/}
        {/*  <img src={img2} alt="" />*/}
        {/*  <div className="container-fluid">*/}
        {/*    <div className="col-md-8">*/}
        {/*      <p>Zakres usług</p>*/}
        {/*      <SplitText initial={{ y: '100%' }} animate="visible" exit="hidden" variants={variants}>*/}
        {/*        Lorem ipsum dolor sit amet, s quaerat quasi*/}
        {/*      </SplitText>*/}

        {/*      <motion.div variants={buttonVariants} initial="initial" animate="animate" exit="exit" >*/}
        {/*        <Button url="/zakres-uslug" buttonDesc="Zakres usług"/>*/}
        {/*      </motion.div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className="img-wrapper keen-slider__slide home-slider zoom-out__slide">*/}
        {/*  <img src={img3} alt="" />*/}
        {/*  <div className="container-fluid">*/}
        {/*    <div className="col-md-8">*/}
        {/*      <p>Kontakt</p>*/}
        {/*      <SplitText initial={{ y: '100%' }} animate="visible" exit="hidden" variants={variants}>*/}
        {/*        Lorem ipsum dolor sit amet, s quaerat quasi*/}
        {/*      </SplitText>*/}

        {/*      <motion.div variants={buttonVariants} initial="initial" animate="animate" exit="exit" >*/}
        {/*        <Button url="/zakres-uslug" buttonDesc="Zakres usług"/>*/}
        {/*      </motion.div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      {slider && (
        <>
          <ArrowLeft
            onClick={(e) => e.stopPropagation() || slider.prev()}
            disabled={currentSlide === 0}
          />
          <ArrowRight
            onClick={(e) => e.stopPropagation() || slider.next()}
            disabled={currentSlide === slider.details().size - 1}
          />
        </>
      )}
    </>
  )
}
export default MainPageSlider;