import React from "react"
import { useKeenSlider } from "keen-slider/react"
import img1 from "../assets/imgs/home-slider/newHomeSlider2.png"
import img2 from "../assets/imgs/home-slider/newHomeSlider3.png"
import img3 from "../assets/imgs/home-slider/newHomeSlider6.png"
import { SplitText } from "./SplitText"
import Button from "./Button"
import { motion } from "framer-motion"

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

const MainPageSlider = (props) => {
  const [opacities, setOpacities] = React.useState([])

  const [sliderRef] = useKeenSlider({
    slides: images.length,
    loop: true,
    duration: 3000,
    move(s) {
      const new_opacities = s.details().positions.map((slide) => slide.portion)
      setOpacities(new_opacities)
    },
  })

  return (
    <div ref={sliderRef} className="fader ">
      {images.map((item, idx) => (
          <div
            key={idx}
            className="fader__slide"
            style={{ opacity: opacities[idx] }}
          >
            <img src={item.img} alt={item.title} />
            <div className="index-slider">
              <div className="container-fluid ">
                <div className="col-lg-8 col-12">
                  <p>{item.beforeTitle}</p>
                  <h1>
                    {item.title}
                  </h1>
                  <Button url={item.url} buttonDesc={item.beforeTitle}/>
                </div>
              </div>
            </div>
        </div>
      ))}
    </div>
  )
}
export default MainPageSlider;