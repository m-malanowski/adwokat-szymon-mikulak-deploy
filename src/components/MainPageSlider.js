import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";
import img1 from "../assets/imgs/home-slider/adwokatGdynia.jpg"
import img2 from "../assets/imgs/home-slider/adwokatGdyniaZakresUsług.jpg"
import img3 from "../assets/imgs/home-slider/adwokatGdyniaKontakt.jpg"
import Button from "./Button"
import { motion, useAnimation } from "framer-motion"

const images = [
  {
    img: img1,
    title: "Kompleksowa obsługa prawna klientów indywidualnych i przedsiębiorców",
    beforeTitle: "Adwkoat Gdynia - Szymon Mikulak ",
    buttonText: "O kancelarii",
    url: "/adwokat-gdynia",
    id: 1,
  },
  {
    img: img2,
    // title: "Najlepiej o naszej dobrej pracy świadczy stale powiększające się grono Klientów.",
    title: "Oferuję szeroki wachlarz usług prawnych",
    beforeTitle: "Zakres Usług",
    buttonText: "Zakres usług",
    url: "/zakres-uslug",
    id: 2,

  },
  {
    img: img3,
    title: "Szukasz rozwiązania swojego problemu? Skontaktuj się ze mną.",
    beforeTitle: "Pomogę rozwiązać Twój problem",
    buttonText: "Umów spotkanie",
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

const MainPageSlider = (props) => {
  const [details, setDetails] = React.useState(null)
  const controls = useAnimation()
  // const controls2 = useAnimation()
  const [currentSlide, setCurrentSlide] = React.useState(0)
  // const [pause, setPause] = React.useState(false)
  // const timer = React.useRef()

  const [sliderRef, slider] = useKeenSlider({
    loop: false,
    duration: 2500,
    slides: images.length,
    initial: 0,
    slideChanged(instance) {
      setCurrentSlide(instance.details().relativeSlide)
    },
    move(instance) {
      setDetails(instance.details())
      controls.start("hidden")
      console.log("move");
    },
    // beforeChange: (instance) => {
    //   console.log("beforeChange");
    //   controls.start("hidden")
    //   // controls2.start("hidden")
    //   console.log("dragStart");
    // },
    afterChange: (instance) => {
      console.log("dragEnd");
      console.log("afterChange");
      controls.start("visible")
      // controls2.start("visible")
    },
    // slideChanged: (instance) =>{
    //   console.log("slideChanged")
    //   controls.start("visible")
    //   controls.start("hidden")
    //
    // },

  })
  //
  // React.useEffect(() => {
  //   timer.current = setInterval(() => {
  //     if (!pause && slider) {
  //       slider.next()
  //     }
  //   }, 8000)
  //   return () => {
  //     clearInterval(timer.current)
  //   }
  // }, [pause, slider])


  function positionStyle(idx) {
    if (!details) return {}
    const position = details.positions[idx]
    const x = details.widthOrHeight * position.distance
    const scale_size = 0.7
    const scale = 1 - (scale_size - scale_size * position.portion)
    return {
      transform: `translate3d(${x}px, 0px, 0px) scale(${scale})`,
      transition: `transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)`,
      WebkitTransform: `translate3d(${x}px, 0px, 0px) scale(${scale})`,
    }
  }
  return (
    <>
      <div ref={sliderRef} className="zoom-out draggable">
        {images.map((item, idx) => (
          <div
            key={idx}
            style={positionStyle(idx)}
            className="zoom-out__slide"
          >
            <img src={item.img} alt={item.title} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: {delay: 1.8,  duration: 1., ease: [0.6, 0.01, -0.05, 0.9] } }}
              className="index-slider">
              <div className="container-fluid ">
                <div className="col-lg-8 col-12">

                  <motion.p
                    animate={controls}
                    // exit={{ y: 20, opacity: 0 }}
                    variants={{
                      visible: {
                        opacity: 1, y: 0,
                        transition: { delay: .2, duration: .6,  }
                      },
                      hidden: { opacity: 0, y: -60, }
                    }}
                    className="beforeH1">
                    {item.beforeTitle}
                  </motion.p>

                  <motion.h1
                    animate={controls}
                    // exit={{ y: 20, opacity: 0 }}
                    variants={{
                      visible: {
                        opacity: 1, y: 0,
                        transition: { delay: .4, duration: .6,  }
                      },
                      hidden: { opacity: 0, y: -40, }
                    }}
                  >
                    {item.title}
                  </motion.h1>

                  <motion.div
                    animate={controls}
                    // exit={{ y: 20, opacity: 0 }}
                    variants={{
                      visible: {
                        opacity: 1, y: 0,
                        transition: { delay: .6, duration: .6,  }
                      },
                      hidden: { opacity: 0, y: -20, }
                    }}
                  >
                    <Button url={item.url} buttonDesc={item.buttonText}/>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
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
      {slider && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: {delay: 2,  duration: 1., ease: [0.6, 0.01, -0.05, 0.9] } }}
          className="linesWrapper">
          <ul className="lines">
            {[...Array(slider.details().size).keys()].map((idx) => {
              return (
                <li
                  className={currentSlide === idx ? " active" : ""}
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx)
                  }}
                >
                  <a
                    className="lines-item"
                    href="#">
                    <div className="lines-dash"/>
                  </a>
                </li>
              )
            })}
          </ul>
        </motion.div>
      )}
    </>
  )
}
export default MainPageSlider;