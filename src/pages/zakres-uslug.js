import React from "react"
import Subheader from "../components/Subheader"
import subHeaderPhoto from "../assets/imgs/home-slider/adwokatGdyniaZakresUsług.jpg"
import Footer from "../components/Footer"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import SEO from "../components/SEO"

const transition = { delay: .1, duration: .4, ease: [0.6, 0.01, -0.05, 0.9] }
const variantsPlus  = {
  open: { rotate: 135, opacity: .4 },
  closed: { opacity: .8 },
  hover: { opacity: .4 }
}
const variantsDesc1 = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 }
}

const TeamPage = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)


  return (
    <>
      <SEO title="⚖️ &nbsp; Ofeta Usług Prawnych | Kancelaria Adwokacka Szymon Mikulak. " description="Kancelaria Adwokacka z Siedzibą w Gdyni. Świadczy Usługi Prawne Zarówno na Rzecz Podmiotów Gospodarczych, Jak i Klientów Indywidualnych. Pomoc i Porady Prawne Gdynia."/>

      <div className="services-page">
        <Subheader pagePreTitle={'Zakres usług'} pageTitle={'Zakres usług świadczonych przez Kancelarię obejmuje obszary:'} subImg={subHeaderPhoto} alt="Adwokat Ggdynia zakres usług"/>

        <div className="page-content container-fluid">
          <div className="page-description-wrapper">

            {/*<div className="mt-5 page-content-description specialization-subsection">*/}
            {/*  <div className="description-first-element">*/}
            {/*    <div>*/}
            {/*      <h3>Główne <br/> Specjalizacje:</h3>*/}
            {/*      <p className="after">Lorem ipsum dolor sit amet, <br/> consectetur adipisicing elit.  sequi similique. </p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className="description-second-element">*/}
            {/*    <div className="about-sub">*/}
            {/*      <h5>Cray yuccie +1 hella stumptown pork belly pinterest brunch squid hoodie umami sustainable marfa tbh</h5>*/}
            {/*      <br/>*/}
            {/*      <p>Four dollar toast tumeric kombucha celiac, prism street art master cleanse biodiesel YOLO food truck. Cray yuccie +1 hella stumptown pork belly pinterest brunch squid hoodie umami sustainable marfa tbh. Gentrify mumblecore locavore iceland keffiyeh. Deep v neutra banh mi gluten-free tumblr humblebrag swag palo santo jean shorts cold-pressed narwhal photo booth ugh.</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="border-bottom"/>*/}

            <div className="service-container">
              <div className="single-service">
                <div className="service-heading">
                  <h3> Prawo  Karne</h3>
                  <motion.span
                    animate={isOpen1 ? "open" : "closed"}
                    variants={variantsPlus}
                    transition={transition}
                    onClick={() => setIsOpen1(!isOpen1)}
                    whileHover="hover"
                    className="plus alt" />
                </div>

                <motion.div
                  animate={isOpen1 ? "open" : "closed"}
                  // initial={{display: 'none'}}
                  variants={variantsDesc1}
                  transition={transition}
                  className="service-body">
                  <div className="mt-5 page-content-description">
                    <div className="longer description-first-element">
                      <h5 className="mt-5">Lorem ipsum dolor sit amet, fugiat id ipsam laboriosam laborum nemordae!</h5>
                      <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, commodi labore nihil odit
                        officiis quas qui vel! Consectetur, doloribus, maiores minus
                        nihil odit pariatur quas qui quidem repellat tempora vel! Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Accusamus earum nesciunt obcaecati provident
                        tempore! Dignissimos eligendi in non obcaecati, similique voluptate voluptatibus! Aliquid esse
                        facere quidem quos reprehenderit, sunt veritatis!</p>
                      <h5 className="mt-5">Lorem ipsum dolor sit amet, fugiat id ipsam laboriosam laborum nemordae!</h5>
                      <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, commodi labore nihil odit
                        officiis quas qui vel! Consectetur, doloribus, maiores minus
                        nihil odit pariatur quas qui quidem repellat tempora vel! Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Accusamus earum nesciunt obcaecati provident
                        tempore! Dignissimos eligendi in non obcaecati, similique voluptate voluptatibus! Aliquid esse
                        facere quidem quos reprehenderit, sunt veritatis!</p>
                    </div>
                    <div className="description-second-element">
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="border-bottom" />


              <div className="single-service">
                <div className="service-heading">
                  <h3> Prawo cywilne</h3>
                  <motion.span
                    animate={isOpen2 ? "open" : "closed"}
                    variants={variantsPlus}
                    transition={transition}
                    onClick={() => setIsOpen2(!isOpen2)}
                    whileHover="hover"

                    className="plus alt" />
                </div>

                <motion.div
                  animate={isOpen2 ? "open" : "closed"}
                  // initial={{display: 'none'}}
                  variants={variantsDesc1}
                  transition={transition}
                  className="service-body">
                  <div className="mt-5 page-content-description">
                    <div className="longer description-first-element">
                      <h5 className="mt-5">Lorem ipsum dolor sit amet, fugiat id ipsam laboriosam laborum nemordae!</h5>
                      <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, commodi labore nihil odit
                        officiis quas qui vel! Consectetur, doloribus, maiores minus
                        nihil odit pariatur quas qui quidem repellat tempora vel! Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Accusamus earum nesciunt obcaecati provident
                        tempore! Dignissimos eligendi in non obcaecati, similique voluptate voluptatibus! Aliquid esse
                        facere quidem quos reprehenderit, sunt veritatis!</p>
                      <h5 className="mt-5">Lorem ipsum dolor sit amet, fugiat id ipsam laboriosam laborum nemordae!</h5>
                      <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, commodi labore nihil odit
                        officiis quas qui vel! Consectetur, doloribus, maiores minus
                        nihil odit pariatur quas qui quidem repellat tempora vel! Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Accusamus earum nesciunt obcaecati provident
                        tempore! Dignissimos eligendi in non obcaecati, similique voluptate voluptatibus! Aliquid esse
                        facere quidem quos reprehenderit, sunt veritatis!</p>
                    </div>
                    <div className="description-second-element">
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="border-bottom" />

              <div className="single-service">
                <div className="service-heading">
                  <h3> Prawo gospodarcze</h3>
                  <motion.span
                    animate={isOpen3 ? "open" : "closed"}
                    variants={variantsPlus}
                    transition={transition}
                    onClick={() => setIsOpen3(!isOpen3)}
                    whileHover="hover"
                    className="plus alt" />
                </div>

                <motion.div
                  animate={isOpen3 ? "open" : "closed"}
                  // initial={{display: 'none'}}
                  variants={variantsDesc1}
                  transition={transition}
                  className="service-body">
                  <div className="mt-5 page-content-description">
                    <div className="longer description-first-element">
                      <h5 className="mt-5">Lorem ipsum dolor sit amet, fugiat id ipsam laboriosam laborum nemordae!</h5>
                      <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, commodi labore nihil odit
                        officiis quas qui vel! Consectetur, doloribus, maiores minus
                        nihil odit pariatur quas qui quidem repellat tempora vel! Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Accusamus earum nesciunt obcaecati provident
                        tempore! Dignissimos eligendi in non obcaecati, similique voluptate voluptatibus! Aliquid esse
                        facere quidem quos reprehenderit, sunt veritatis!</p>
                      <h5 className="mt-5">Lorem ipsum dolor sit amet, fugiat id ipsam laboriosam laborum nemordae!</h5>
                      <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, commodi labore nihil odit
                        officiis quas qui vel! Consectetur, doloribus, maiores minus
                        nihil odit pariatur quas qui quidem repellat tempora vel! Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Accusamus earum nesciunt obcaecati provident
                        tempore! Dignissimos eligendi in non obcaecati, similique voluptate voluptatibus! Aliquid esse
                        facere quidem quos reprehenderit, sunt veritatis!</p>
                    </div>
                    <div className="description-second-element">
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="border-bottom" />

              <div className="single-service">
                <div className="service-heading">
                  <h3> Prawo administracyjne</h3>
                  <motion.span
                    animate={isOpen4 ? "open" : "closed"}
                    variants={variantsPlus}
                    transition={transition}
                    onClick={() => setIsOpen4(!isOpen4)}
                    whileHover="hover"
                    className="plus alt" />
                </div>

                <motion.div
                  animate={isOpen4 ? "open" : "closed"}
                  // initial={{display: 'none'}}
                  variants={variantsDesc1}
                  transition={transition}
                  className="service-body">
                  <div className="mt-5 page-content-description">
                    <div className="longer description-first-element">
                      <h5 className="mt-5">Lorem ipsum dolor sit amet, fugiat id ipsam laboriosam laborum nemordae!</h5>
                      <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, commodi labore nihil odit
                        officiis quas qui vel! Consectetur, doloribus, maiores minus
                        nihil odit pariatur quas qui quidem repellat tempora vel! Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Accusamus earum nesciunt obcaecati provident
                        tempore! Dignissimos eligendi in non obcaecati, similique voluptate voluptatibus! Aliquid esse
                        facere quidem quos reprehenderit, sunt veritatis!</p>
                      <h5 className="mt-5">Lorem ipsum dolor sit amet, fugiat id ipsam laboriosam laborum nemordae!</h5>
                      <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, commodi labore nihil odit
                        officiis quas qui vel! Consectetur, doloribus, maiores minus
                        nihil odit pariatur quas qui quidem repellat tempora vel! Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Accusamus earum nesciunt obcaecati provident
                        tempore! Dignissimos eligendi in non obcaecati, similique voluptate voluptatibus! Aliquid esse
                        facere quidem quos reprehenderit, sunt veritatis!</p>
                    </div>
                    <div className="description-second-element">
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="border-bottom" />

              <div className="single-service">
                <div className="service-heading">
                  <h3> RODO i ochrona danych osobowych</h3>
                  <motion.span
                    animate={isOpen5 ? "open" : "closed"}
                    variants={variantsPlus}
                    transition={transition}
                    onClick={() => setIsOpen5(!isOpen5)}
                    whileHover="hover"
                    className="plus alt" />
                </div>

                <motion.div
                  animate={isOpen5 ? "open" : "closed"}
                  // initial={{display: 'none'}}
                  variants={variantsDesc1}
                  transition={transition}
                  className="service-body">
                  <div className="mt-5 page-content-description">
                    <div className="longer description-first-element">
                      <h5 className="mt-5">Lorem ipsum dolor sit amet, fugiat id ipsam laboriosam laborum nemordae!</h5>
                      <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, commodi labore nihil odit
                        officiis quas qui vel! Consectetur, doloribus, maiores minus
                        nihil odit pariatur quas qui quidem repellat tempora vel! Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Accusamus earum nesciunt obcaecati provident
                        tempore! Dignissimos eligendi in non obcaecati, similique voluptate voluptatibus! Aliquid esse
                        facere quidem quos reprehenderit, sunt veritatis!</p>
                      <h5 className="mt-5">Lorem ipsum dolor sit amet, fugiat id ipsam laboriosam laborum nemordae!</h5>
                      <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, commodi labore nihil odit
                        officiis quas qui vel! Consectetur, doloribus, maiores minus
                        nihil odit pariatur quas qui quidem repellat tempora vel! Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Accusamus earum nesciunt obcaecati provident
                        tempore! Dignissimos eligendi in non obcaecati, similique voluptate voluptatibus! Aliquid esse
                        facere quidem quos reprehenderit, sunt veritatis!</p>
                    </div>
                    <div className="description-second-element">
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="border-bottom" />
            </div>

            {/*<div className="mt-5 contact-sub page-content-description">*/}
            {/*  <div className="description-first-element">*/}
            {/*    <h3>Umów <br/> Spotkanie</h3>*/}
            {/*    <p>copper mug plaid gluten-free tumblr art party. </p>*/}
            {/*  </div>*/}
            {/*  <div className="description-second-element ">*/}
            {/*    <div className="quote">*/}
            {/*      <h5>Lorem ipsum dolor sit amet, <em> consectetur adipisicing  asperiores dolor excepturi </em>fugiat</h5>*/}
            {/*      <br/> <br/>*/}
            {/*      <Button url="/kontakt" buttonDesc="Umów spotkanie"/>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="mt-5 page-content-description">*/}
            {/*  <div className="description-first-element">*/}
            {/*    <h5>Lorem ipsum dolor sit amet, <em> consectetur adipisicing elit. Accusamus aliquam asperiores dolor excepturi </em>fugiat id ipsam laboriosam laborum nemorecusandae!</h5>*/}
            {/*  </div>*/}
            {/*  <div className="description-second-element align-right">*/}
            {/*    <h3>Cronut cardigan  </h3>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="border-bottom"/>*/}


          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
export default TeamPage

