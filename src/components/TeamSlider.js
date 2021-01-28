import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import img1 from "../assets/imgs/team/member1.jpg"
import img2 from "../assets/imgs/team/member2.jpg"
import img3 from "../assets/imgs/team/member3.jpg"


// const ArrowLeft = (props) => {
//   const disabeld = props.disabled ? " arrow--disabled" : ""
//   return (
//     <svg
//       onClick={props.onClick}
//       className={"arrow-team arrow--left" + disabeld}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//     </svg>
//   )
// }
//
// const  ArrowRight = (props) => {
//   const disabeld = props.disabled ? " arrow--disabled" : ""
//   return (
//     <svg
//       onClick={props.onClick}
//       className={"arrow-team arrow--right" + disabeld}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//     </svg>
//   )
// }



const TeamSlider = (props) => {
  // const [currentSlide, setCurrentSlide] = React.useState(0)
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()


  const [sliderRef, slider] = useKeenSlider({
    initial: 1,
    slidesPerView: 3,
    mode: "free-snap",
    centered: true,
    spacing: 15,
    loop: true,
    // slideChanged(s) {
    //   setCurrentSlide(s.details().relativeSlide)
    // },
  })

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 6000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])


  return (
    <>
    <div ref={sliderRef} className="keen-slider team-container">
        <div className="img-wrapper keen-slider__slide">
          <div>
            <div className="img"></div>
            {/*<img src={img1} alt="" />*/}
          </div>
          <h3><a href="/czlonek">Michał Tomczak</a></h3>
          <p>Stanowisko</p>
        </div>
        <div className="img-wrapper keen-slider__slide">
          <div>
            <div className="img"></div>
            {/*<img src={img2} alt="" />*/}
          </div>
          <h3>Imię Nazwisko I</h3>
          <p>Stanowisko</p>
        </div>
        <div className="img-wrapper keen-slider__slide">
          <div>
            <div className="img"></div>
            {/*<img src={img3} alt="" />*/}
          </div>
          <h3>Imię Nazwisko II</h3>
          <p>Stanowisko</p>
        </div>
        <div className="img-wrapper keen-slider__slide">
          <div>
            <div className="img"></div>
            {/*<img src={img2} alt="" />*/}
          </div>
          <h3>Imię Nazwisko III</h3>
          <p>Stanowisko</p>
        </div>

        {/*{slider && (*/}
        {/*  <>*/}
        {/*    <ArrowLeft*/}
        {/*      onClick={(e) => e.stopPropagation() || slider.prev()}*/}
        {/*      disabled={currentSlide === 0}*/}
        {/*    />*/}
        {/*    <ArrowRight*/}
        {/*      onClick={(e) => e.stopPropagation() || slider.next()}*/}
        {/*      disabled={currentSlide === slider.details().size - 1}*/}
        {/*    />*/}
        {/*  </>*/}
        {/*)}*/}
      </div>

    </>
  )
}
export default  TeamSlider