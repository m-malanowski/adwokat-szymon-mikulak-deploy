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
                  <h5>Kancelaria Adwokacka <em>Szymon Mikulak</em> - sprawdzony prawnik z Gdyni </h5>
                </TriggerText>
                <br/>
                <p>Kancelaria zapewnia indywidualne podejście do każdego klienta, gdyż każda sprawa jest dla mnie niezwykle ważna. Dzięki pełnemu zaangażowaniu i
                  wnikliwej analizie jestem w stanie znaleźć najlepsze rozwiązanie problemu. Kancelaria oferuje pomoc prawną przedsiębiorcom, osobom indywidualnym nieprowadzącym działalności gospodarczej, a także podmiotom sektora publicznego.
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
                    <h3>Oferowane <br/> usługi:</h3>
                  </TriggerText>
                <p className="after">Oferuję szeroki zakres usług skierowanych <br/> zarówno do osób fizycznych jak i podmiotów gospodarczych.</p>
              </div>
            </div>
            <div className="description-second-element">
              <ul className="service-list ">
                <li><p><span>01.</span><Link to="/zakres-uslug">Sprawy karne</Link></p></li>
                <li><p><span>02.</span><Link to="/zakres-uslug">Odszkodowania i zadośćuczynienia</Link></p></li>
                <li><p><span>03.</span><Link to="/zakres-uslug">Upadłość konsumencka</Link></p></li>
                <li><p><span>04.</span><Link to="/zakres-uslug">Sprawy rodzinne i opiekuńcze</Link></p></li>
                <li><p><span>05.</span><Link to="/zakres-uslug">Sprawy spadkowe</Link></p></li>
                <li><p><span>06.</span><Link to="/zakres-uslug">Sprawy gospodarcze</Link></p></li>
                <li><p><span>07.</span><Link to="/zakres-uslug">Sprawy administracyjne</Link></p></li>
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
                  <h3>Korzyści <br/> ze współpracy:</h3>
                </TriggerText>
                <p className="after">
                  Kancelaria realizuje usługi prawne z zachowaniem najwyższej staranności i profesjonalizmu.</p>
              </div>
            </div>
            <div className="description-second-element">
              <div className="about-sub">
                <TriggerText>
                  <h5>Skuteczny adwokat potrafi wygrać każdą sprawę.</h5>
                </TriggerText>
                <br/>
                <p>Klientów reprezentuję w postępowaniach przed sądami powszechnymi, Sądem Najwyższym, jak również przed organami administracji publicznej. Kancelaria zajmuje się również udzielaniem porad prawnych oraz sporządzaniem opinii prawnych. Jeżeli istnieje możliwość ugodowego zakończenia sprawy, uczestniczymy w prowadzonych negocjacjach oraz mediacjach. W zakres usług kancelarii wchodzi również windykacja należności od dłużników.</p>
                <br/>
                <TriggerText>
                  <h5 className="mt-5">Dlaczego Kancelaria Adwokacka Szymon Mikulak to dobry wybór?</h5>
                </TriggerText>
                <br/>
                <p>Pomoc prawna świadczona jest w siedzibie Kancelarii w Gdyni lub innym miejscu ustalonym z klientem. Sprawy prowadzę na terenie całego kraju, głównie jednak na terenie  województwa Pomorskiego.
                  <br/><br/>
                  Chętnie angażuję się w działalność pro publico bono udzielając darmowych porad prawnych w zakresie uzyskiwania odszkodowań i zadośćuczynień osobom pokrzywdzonym w zdarzeniach drogowych. </p>
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
