import React, {useEffect, useRef} from "react"
// import { useIntersection } from "react-use"
import Subheader from "../components/Subheader"
import subHeaderPhoto from "../assets/imgs/home-slider/adwokatGdynia.jpg"
import portrait from "../assets/imgs/portrait/adwokat-gdynia-mikulak.jpg"
import Footer from "../components/Footer"
import Button from "../components/Button"
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, useViewportScroll, useTransform, useMotionTemplate } from "framer-motion";
import { Link } from "gatsby"
import SEO from "../components/SEO"
const transition = {duration: 1., ease: [0.6, 0.01, -0.05, 0.9]};



const ProjectsPage = () => {
  // const { scrollYProgress } = useViewportScroll()
  const scrollYProgresss = "-200px"

  const { scrollYProgress } = useViewportScroll()
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, -1500, -2000])
  const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -1550, -2220])
  const matrix = useMotionTemplate`matrix(1, 0, 0, 1, 0, ${scaleAnim})`
  // const controls = useAnimation();
  // const controls2 = useAnimation();
  // const [ref, inView] = useInView();
  // const [ref2, inView2] = useInView();
  // const scaleAnim = useTransform(scrollX, [0, 0.5, 1], [1, 2, 1])
  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  //   if (inView2) {
  //     controls2.start("visible");
  //   }
  // }, [controls, inView, controls2, inView2]);

return (
 <>
   <SEO title="⚖️ &nbsp; O Kancelarii | Kancelaria Adwokacka Szymon Mikulak. Porady Prawne Gdynia. Adwokat Gdynia" description="Zadzwoń ☎ 606 502 202. Adwokat Gdynia - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdynia"/>
   <div className="about-page">
      <Subheader pagePreTitle={'O kancelarii'} pageTitle={'Kancelaria Adwokacka Szymon Mikulak. Adwokat Gdynia.'} subImg={subHeaderPhoto}/>
      {/*<motion.div style={{ transform: matrix  }}  exit={{  transform: 'matrix(1, 0, 0, 1, 0, 0)', transition: { delay: .2, ...transition } }}*/}
      <div
        // style={{ transform: matrix  }}
        // exit={{  transform: 'matrix(1, 0, 0, 1, 0, 0)',
        //   transition: { delay: .2, ...transition } }}
        className="page-content container-fluid">
        <div className="page-description-wrapper">
          <div className="mt-5 page-content-description">
            <div className="description-first-element">
              <img className="portrait" src={portrait} alt="Adwokat Szymon Mikulak Gdynia" />
            </div>
            <div className="description-second-element ">
              <div className="short-bio-sub">
                <h5>Lorem ipsum dolor sit amet, <em> consectetur adipisicing  asperiores dolor excepturi </em>fugiat</h5>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, commodi labore nihil odit officiis quas qui vel! Consectetur, doloribus, maiores minus nihil odit pariatur quas qui quidem repellat tempora
                  vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum nesciunt obcaecati provident tempore! Dignissimos eligendi in non obcaecati, similique voluptate voluptatibus! Aliquid esse facere quidem quos reprehenderit, sunt veritatis
                </p>
                <br/> <br/>
                <Button url="/szymon-mikulak" buttonDesc="O mnie"/>
              </div>
            </div>
          </div>
          <div className="border-bottom"/>

          <div className="mt-5 page-content-description services-subsection">
            <div className="description-first-element">
              <div>
                <h3>Oferowane <br/> usługi:</h3>
                <p className="after">Oferuję szeroki zakres usług skierowanych <br/> zarówno do osób fizycznych jak i podmiotów gospodarczych.</p>
              </div>
            </div>
            <div className="description-second-element">
              <ul className="service-list ">
                <li><p><span>01.</span><Link to="/zakres-uslug">Prawo karne</Link></p></li>
                <li><p><span>02.</span><Link to="/zakres-uslug">Prawo cywilne</Link></p></li>
                <li><p><span>03.</span><Link to="/zakres-uslug">Prawo gospodarcze</Link></p></li>
                <li><p><span>04.</span><Link to="/zakres-uslug">Prawo administracyjne</Link></p></li>
                <li><p><span>05.</span><Link to="/zakres-uslug">RODO i ochrona danych osobowych </Link></p></li>
              </ul>
              <div className="quote">
                <h5 className="mt-5">Porady prawne - indywidualne podejście</h5>
                <br/>
                <p>W ramach świadczonych usług Kancelaria Adwokacka Gdynia Szymon Mikulak zajmuje się reprezentacją swoich Klientów przed wszelkimi Sądami, organami administracji, instytucjami, osobami publicznymi oraz prywatnymi. </p>
              </div>
            </div>
          </div>
          <div className="border-bottom"/>

          <div className="mt-5 page-content-description specialization-subsection">
            <div className="description-first-element">
              <div>
                <h3>Główne <br/> Specjalizacje:</h3>
                <p className="after">Lorem ipsum dolor sit amet, <br/> consectetur adipisicing elit.  sequi similique. </p>
              </div>
            </div>
            <div className="description-second-element">
              <div className="about-sub">
                <h5>Cray yuccie +1 hella stumptown pork belly pinterest brunch squid hoodie umami sustainable marfa tbh</h5>
                <br/>
                <p>Four dollar toast tumeric kombucha celiac, prism street art master cleanse biodiesel YOLO food truck. Cray yuccie +1 hella stumptown pork belly pinterest brunch squid hoodie umami sustainable marfa tbh. Gentrify mumblecore locavore iceland keffiyeh. Deep v neutra banh mi gluten-free tumblr humblebrag swag palo santo jean shorts cold-pressed narwhal photo booth ugh.</p>
                <br/>
                <h5 className="mt-5">Fingerstache copper mug plaid gluten-free tumblr art party. Cornhole biodiesel celiac normcore flannel.</h5>
                <br/>
                <p>Four dollar toast tumeric kombucha celiac, prism street art master cleanse biodiesel YOLO food truck. Cray yuccie +1 hella stumptown pork belly pinterest brunch squid hoodie umami sustainable marfa tbh. Gentrify mumblecore locavore iceland keffiyeh. Deep v neutra banh mi gluten-free tumblr humblebrag swag palo santo jean shorts cold-pressed narwhal photo booth ugh.</p>
              </div>
            </div>
          </div>
          <div className="border-bottom"/>

          <div className="mt-5 contact-sub page-content-description">
            <div className="description-first-element">
              <h3>Umów <br/> Spotkanie</h3>
              <p>Wszystkie osoby zainteresowane spotkaniem w sprawie <br/> konsultacji prawnych proszone są o wcześniejszy  <br/> kontakt telefoniczny lub  e-mail. </p>
            </div>
            <div className="description-second-element ">
              <div className="quote">
                <h5>Kancelaria udziela również <em >porad prawnych online </em>. W sprawie uzyskania szczegółów kliknij przycisk poniżej:</h5>
                <br/> <br/>
                <Button url="/kontakt" buttonDesc="Umów spotkanie"/>
              </div>
            </div>
          </div>
          {/*<div className="border-bottom"/>*/}


          {/*<div className="page-content-description">*/}
          {/*  <div className="">*/}
          {/*    <h3>Adwokat Gdynia</h3>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="page-content-description">*/}
          {/*  <div className="description-first-element">*/}
          {/*    <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.*/}
          {/*    </p>*/}
          {/*    <br/>*/}
          {/*    <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.*/}
          {/*    </p>*/}
          {/*    <br/>*/}

          {/*    /!*<h5 className="mt-5">Lorem ipsum dolor sit amet, <em> consectetur adipisicing elit. Accusamus aliquam asperiores dolor excepturi </em>fugiat id ipsam laboriosam laborum nemorecusandae!</h5>*!/*/}
          {/*    /!*<br/>*!/*/}
          {/*    /!*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, commodi labore nihil odit officiis quas qui vel! Consectetur, doloribus, maiores minus nihil odit pariatur quas qui quidem repellat tempora vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum nesciunt obcaecati provident tempore! Dignissimos eligendi in non obcaecati, similique voluptate voluptatibus! Aliquid esse facere quidem quos reprehenderit, sunt veritatis!</p>*!/*/}

          {/*  </div>*/}
          {/*  <div className="description-second-element ">*/}
          {/*    <div className="quote">*/}
          {/*      <h5>Dixie coloring book <em><Link to="/czlonek"> Stanisław Mikulak</Link></em> beard biodiesel </h5>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="border-bottom"/>*/}

          {/*<div className="mt-5 page-content-description">*/}
          {/*  <div className="longer description-first-element">*/}
          {/*    <h5 className="mt-5">Lorem ipsum dolor sit amet, fugiat id ipsam laboriosam laborum nemordae!</h5>*/}
          {/*    <br/>*/}
          {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, commodi labore nihil odit officiis quas qui vel! Consectetur, doloribus, maiores minus*/}
          {/*      nihil odit pariatur quas qui quidem repellat tempora vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum nesciunt obcaecati provident*/}
          {/*      tempore! Dignissimos eligendi in non obcaecati, similique voluptate voluptatibus! Aliquid esse facere quidem quos reprehenderit, sunt veritatis!</p>*/}
          {/*    <h5 className="mt-5">Lorem ipsum dolor sit amet, fugiat id ipsam laboriosam laborum nemordae!</h5>*/}
          {/*    <br/>*/}
          {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, commodi labore nihil odit officiis quas qui vel! Consectetur, doloribus, maiores minus*/}
          {/*      nihil odit pariatur quas qui quidem repellat tempora vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum nesciunt obcaecati provident*/}
          {/*      tempore! Dignissimos eligendi in non obcaecati, similique voluptate voluptatibus! Aliquid esse facere quidem quos reprehenderit, sunt veritatis!</p>*/}
          {/*  </div>*/}
          {/*  <div className="description-second-element">*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="border-bottom"/>*/}


          {/*<div className="mt-5 page-content-description">*/}
          {/*  <div className="description-first-element">*/}
          {/*    <h3>Zakres naszych <br/> usług </h3>*/}
          {/*  </div>*/}
          {/*  <div className="description-second-element">*/}
          {/*    <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.*/}
          {/*    </p>*/}
          {/*    <br/>*/}
          {/*    <Button url="/zakres-uslug" buttonDesc="czytaj więcej"/>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="border-bottom"/>*/}


        </div>
        <Footer/>

      </div>

    </div>
 </>
)
}

export default ProjectsPage
