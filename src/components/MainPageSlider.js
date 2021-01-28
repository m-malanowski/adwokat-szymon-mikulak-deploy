import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";
import img1 from "../assets/imgs/home-slider/adwokatGdynia.jpg"
import img2 from "../assets/imgs/home-slider/adwokatGdyniaZakresUsług.jpg"
import img3 from "../assets/imgs/home-slider/adwokatGdyniaKontakt.jpg"
import { SplitText } from "./SplitText"
import Button from "./Button"
import { AnimatePresence, motion, useAnimation } from "framer-motion"
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
    title: "Oferuję szeroki wachlarz usług prawnych - specjalizuję się m.in. w prawie administracyjnym",
    beforeTitle: "Zakres Usług",
    buttonText: "Zakres usług",
    url: "/zakres-uslug",
    id: 2,

  },
  {
    img: img3,
    title: "Szukasz rozwiązania swojego problemy? Skontaktuj się ze mną.",
    beforeTitle: "Pomogę rozwiązać Twój problem",
    buttonText: "Umów spotkanie",
    url: "/kontakt",
    id: 3,
  }
]

const MainPageSlider = (props) => {
  const [details, setDetails] = React.useState(null)
  const controls = useAnimation()
  const controls2 = useAnimation()

  const [sliderRef] = useKeenSlider({
    loop: false,
    slides: images.length,
    move(s) {
      setDetails(s.details())
    },
    initial: 0,
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

  })

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
    <div ref={sliderRef} className=" zoom-out">
      {images.map((item, idx) => (
        <div
          key={idx}
          style={positionStyle(idx)}
          className="zoom-out__slide"
        >
          <img src={item.img} alt={item.title} />

          <div className="index-slider">
            <div className="container-fluid ">
              <div className="col-lg-8 col-12">
                <p className="beforeH1">{item.beforeTitle}</p>

                <motion.h1
                  key={idx}
                  initial={{ y: 0, opacity: 0 }}
                  animate={controls}
                  exit={{ y: -20, opacity: 0 }}
                  variants={{
                    visible: {
                      opacity: 1, y: 0,
                      transition: { delay: .1, duration: .8,  }
                    },
                    hidden: { opacity: 0, y: -20, }
                  }}
                >
                  {item.title}
                </motion.h1>

                {/*<SplitText initial={{ y: '100%' }} animate="visible" exit="hidden" variants={variants}>*/}
                {/*  {item.title}*/}
                {/*</SplitText>*/}

                <Button url={item.url} buttonDesc={item.buttonText}/>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}
export default MainPageSlider;