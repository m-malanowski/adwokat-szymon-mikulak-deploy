import React from "react"
import Subheader from "../components/Subheader"
import subHeaderPhoto from "../assets/imgs/home-slider/adwokatGdyniaKontakt.jpg"
import Form from "../components/Form2"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import TriggerText from "../components/TriggerText"

const icons = {
  'mail': 'M928 128h-832c-52.8 0-96 43.2-96 96v640c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-640c0-52.8-43.2-96-96-96zM398.74 550.372l-270.74 210.892v-501.642l270.74 290.75zM176.38 256h671.24l-335.62 252-335.62-252zM409.288 561.698l102.712 110.302 102.71-110.302 210.554 270.302h-626.528l210.552-270.302zM625.26 550.372l270.74-290.75v501.642l-270.74-210.892z',
  'map': 'M672 192l-320-128-352 128v768l352-128 320 128 352-128v-768l-352 128zM384 145.73l256 102.4v630.138l-256-102.398v-630.14zM64 236.828l256-93.090v631.8l-256 93.088v-631.798zM960 787.172l-256 93.092v-631.8l256-93.090v631.798z',
  'phone': 'M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128-128-256-192-256-192 192-192 192c0 128 131.5 387.5 256 512s384 256 512 256c0 0 192-128 192-192s-192-256-256-192z',
  'facebook': 'M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z'
};

const kontakt = () => (
   <>
     <SEO title="⚖️ &nbsp; Kontakt | Kancelaria Adwokacka Szymon Mikulak. Adwokat Gdynia." description="Zadzwoń ☎ 606 502 202 i Umów Się na Spotkanie. Adwokat Gdynia - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdynia"/>
     <div className="contact-page">
      <Subheader pagePreTitle={'Kontakt'} pageTitle={'Kancelaria Adwokacka Gdynia. Skontaktuj się z kancelarią.'} subImg={subHeaderPhoto}/>

      <div className="page-content container-fluid">
        <div className="page-description-wrapper">

          <div className="page-content-description">
            <div className="description-first-element">
              <TriggerText>
                <h3>Adwokat <br/> Szymon <br/> Mikulak:</h3>
              </TriggerText>
              <p className="">Osoby zainteresowane współpracą zachęcam <br/> do kontaktu w celu umówienia <br/> indywidualnego spotkania: </p>
              <br/>
              <p>
                <svg width="15" height="15" viewBox="0 0 1024 1024">
                  <path d={icons.phone}/>
                </svg>
                Telefon: <a href="tel:+48606-502-202"><em>606 502 202</em></a>
              </p>
              <p>
                <svg width="15" height="15" viewBox="0 0 1024 1024">
                  <path d={icons.mail}/>
                </svg>
                Email: <a href="mailto:info@adwokatmikulak.pl"><em>info@adwokatmikulak.pl</em></a>
              </p>
              <p className="after">
                <svg width="15" height="15" viewBox="0 0 1024 1024">
                  <path d={icons.map}/>
                </svg>
                Tu mnie znajdziesz: <a href="https://g.page/adwokat-mikulak-gdynia?we"><em>ul. Amona 4, Gdynia</em></a>
              </p>

            </div>
            <div className="description-second-element">
              <TriggerText>
                <h5>Współpraca realizowana jest osobiście w siedzibie kancelarii, bądź przy pomocy środków komunikacji na odległość.</h5>
              </TriggerText>
              <br/>
              <p>Klienci kancelarii na samym początku uzyskują rzetelną informację, jakie są realne szanse osiągnięcia przez niego zamierzonego efektu oraz informację o kosztach związanych z prowadzeniem sprawy (opłaty sądowe, opłaty od pełnomocnictwa itp.). Zapraszam do kontaktu.</p>
              <Form/>
            </div>
          </div>

        </div>

        <Footer/>
      </div>
    </div>
  </>
)

export default kontakt
