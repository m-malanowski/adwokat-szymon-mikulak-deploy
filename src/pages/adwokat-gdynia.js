import React from "react"
import Subheader from "../components/Subheader"
import subHeaderPhoto from "../assets/imgs/home-slider/adwokatGdynia.jpg"
import portrait from "../assets/imgs/portrait/adwokat-gdynia-mikulak.jpg"
import Footer from "../components/Footer"
import Button from "../components/Button"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import TriggerImg from "../components/TriggerImg"
import TriggerText from "../components/TriggerText"

const ProjectsPage = () => {

return (
 <>
   <SEO title="⚖️ &nbsp; O Kancelarii | Kancelaria Adwokacka Szymon Mikulak. Porady Prawne Gdynia. Adwokat Gdynia" description="Zadzwoń ☎ 606 502 202. Adwokat Gdynia - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdynia"/>
   <div className="about-page">
      <Subheader pagePreTitle={'O kancelarii'} pageTitle={'Adwokat Gdynia Szymon Mikulak. '} subImg={subHeaderPhoto}/>
      <div
        className="page-content container-fluid">
        <div className="page-description-wrapper">
          <div className="mt-5 page-content-description">
            <div className="description-first-element">
              <TriggerImg>
                <img className="portrait" src={portrait} alt="Adwokat Szymon Mikulak Gdynia" />
              </TriggerImg>
            </div>
            <div className="description-second-element ">
              <div className="short-bio-sub">
                <TriggerText>
                  <h5>Lorem ipsum dolor sit amet, <em> consectetur adipisicing  asperiores dolor excepturi </em>fugiat</h5>
                </TriggerText>
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
                  <TriggerText>
                    <h3>oferowane <br/> usługi:</h3>
                  </TriggerText>
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
                <TriggerText>
                  <h5 className="mt-5">Porady prawne - indywidualne podejście</h5>
                </TriggerText>
                <br/>
                <p>W ramach świadczonych usług Kancelaria Adwokacka Gdynia Szymon Mikulak zajmuje się reprezentacją swoich Klientów przed wszelkimi Sądami, organami administracji, instytucjami, osobami publicznymi oraz prywatnymi. </p>

              </div>
            </div>
          </div>
          <div className="border-bottom"/>

          <div className="mt-5 page-content-description specialization-subsection">
            <div className="description-first-element">
              <div>
                <TriggerText>
                  <h3>Główne <br/> Specjalizacje:</h3>
                </TriggerText>
                <p className="after">Lorem ipsum dolor sit amet, <br/> consectetur adipisicing elit.  sequi similique. </p>
              </div>
            </div>
            <div className="description-second-element">
              <div className="about-sub">
                <TriggerText>
                  <h5>Cray yuccie +1 hella stumptown pork belly pinterest brunch squid hoodie umami sustainable marfa tbh</h5>
                </TriggerText>
                <br/>
                <p>Four dollar toast tumeric kombucha celiac, prism street art master cleanse biodiesel YOLO food truck. Cray yuccie +1 hella stumptown pork belly pinterest brunch squid hoodie umami sustainable marfa tbh. Gentrify mumblecore locavore iceland keffiyeh. Deep v neutra banh mi gluten-free tumblr humblebrag swag palo santo jean shorts cold-pressed narwhal photo booth ugh.</p>
                <br/>
                <TriggerText>
                  <h5 className="mt-5">Fingerstache copper mug plaid gluten-free tumblr art party. Cornhole biodiesel celiac normcore flannel.</h5>
                </TriggerText>
                <br/>
                <p>Four dollar toast tumeric kombucha celiac, prism street art master cleanse biodiesel YOLO food truck. Cray yuccie +1 hella stumptown pork belly pinterest brunch squid hoodie umami sustainable marfa tbh. Gentrify mumblecore locavore iceland keffiyeh. Deep v neutra banh mi gluten-free tumblr humblebrag swag palo santo jean shorts cold-pressed narwhal photo booth ugh.</p>
              </div>
            </div>
          </div>
          <div className="border-bottom"/>

          <div className="mt-5 contact-sub page-content-description">
            <div className="description-first-element">
              <TriggerText>
                <h3>Umów <br/> Spotkanie</h3>
              </TriggerText>
              <p>Wszystkie osoby zainteresowane spotkaniem w sprawie <br/> konsultacji prawnych proszone są o wcześniejszy  <br/> kontakt telefoniczny lub  e-mail. </p>
            </div>
            <div className="description-second-element ">
              <div className="quote">
                <TriggerText>
                  <h5>Kancelaria udziela również <em >porad prawnych online </em>. W sprawie uzyskania szczegółów kliknij przycisk poniżej:</h5>
                </TriggerText>
                <br/> <br/>
                <Button url="/kontakt" buttonDesc="Umów spotkanie"/>
              </div>
            </div>
          </div>
          {/*<div className="border-bottom"/>*/}

        </div>
        <Footer/>
      </div>
    </div>
 </>
)
}

export default ProjectsPage
