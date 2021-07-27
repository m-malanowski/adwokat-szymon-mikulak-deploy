import React from "react"
import Subheader from "../components/Subheader"
import subHeaderPhoto from "../assets/imgs/home-slider/adwokatGdyniaZakresUsług.jpg"
import Footer from "../components/Footer"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import SEO from "../components/SEO"
import TriggerText from "../components/TriggerText"

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
  const [isOpen6, setIsOpen6] = useState(false)
  const [isOpen7, setIsOpen7] = useState(false)

  return (
    <>
      <SEO title="⚖️ &nbsp; Ofeta Usług Prawnych | Kancelaria Adwokacka Szymon Mikulak. " description="Kancelaria Adwokacka z Siedzibą w Gdyni. Świadczy Usługi Prawne Zarówno na Rzecz Podmiotów Gospodarczych, Jak i Klientów Indywidualnych. Pomoc i Porady Prawne Gdynia."/>

      <div className="services-page">
        <Subheader pagePreTitle={'Zakres usług'} pageTitle={'Zakres usług świadczonych przez kancelarię obejmuje między innymi:'} subImg={subHeaderPhoto} alt="Adwokat Ggdynia zakres usług"/>

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
                  <TriggerText>
                    <h3> Sprawy  karne</h3>
                  </TriggerText>
                  <TriggerText>
                    <motion.span
                      animate={isOpen1 ? "open" : "closed"}
                      variants={variantsPlus}
                      transition={transition}
                      onClick={() => setIsOpen1(!isOpen1)}
                      whileHover="hover"
                      className="plus alt" />
                  </TriggerText>
                </div>

                <motion.div
                  animate={isOpen1 ? "open" : "closed"}
                  // initial={{display: 'none'}}
                  variants={variantsDesc1}
                  transition={transition}
                  className="service-body">
                  <div className="mt-5 page-content-description">
                    <div className="longer description-first-element">
                      <h5 className="mt-5">Kancelaria udziela kompleksowej obsługi w postępowaniach karnych.</h5>
                      <br />
                      <p> Pomagam jako obrońca osobom oskarżonym albo podejrzanym, jak również jako pełnomocnik osób pokrzywdzonych. Istnieje możliwość reprezentacji klienta na każdym etapie sprawy, w postępowaniu przygotowawczym przed Policją, Prokuraturą, Urzędem Skarbowym, Urzędem Celnym i innymi organami prowadzącymi postępowanie przygotowawcze, jak również w postępowaniu jurysdykcyjnym przed sądami obydwu instancji i w postępowaniu przed Sądem Najwyższym.
                        Ponadto oferuję również pomoc na etapie postępowania wykonawczego i penitencjarnego. Wydanie prawomocnego wyroku to nie koniec możliwości na zmianę sytuacji osób skazanych. Istnieje możliwość poprawienia swojej sytuacji chociażby poprzez: objęcie poszczególnych wyroków, wyrokiem łącznym, wykonanie kary w systemie dozoru elektronicznego, uzyskanie warunkowego przedterminowego zwolnienia, odroczenie wykonania kary, uzyskanie przerwy w wykonywaniu kary. Skorzystanie ze wskazanych instytucji wymaga najczęściej podjęcia inicjatywy. Aby jednak podjęte działania wywarły zamierzony efekt należy posiadać odpowiednią wiedzę. Z tego względu skorzystanie z pomocy profesjonalisty wydaje się być niezbędne.
                      </p>
                      <h5 className="mt-5">Oferuję pomoc na etapie postępowania wykonawczego i penitencjarnego</h5>
                      <br />
                      <p>
                        Pamiętać również należy, że w przypadku niesłusznego skazania, aresztowania lub zatrzymania, przysługuje uprawnienie do uzyskania zadośćuczynienia lub odszkodowania. Takimi sprawami również się zajmuję i z chęcią udzielę pomocy osobom w takich sytuacjach.
                        Na koniec należy również wyraźnie podkreślić, że obsługa w postępowaniach karnych to nie tylko stawiennictwo w sądzie, pomoc obejmuje również przygotowanie niezbędnych pism procesowych, m. in. pism wszczynających dane postępowanie, apelacji, odpowiedzi na akt oskarżenia czy też wniosków dowodowych.
                      </p>
                    </div>
                    <div className="description-second-element">
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="border-bottom" />


              <div className="single-service">
                <div className="service-heading">
                  <TriggerText>
                    <h3> Odszkodowania i zadośćuczynienia</h3>
                  </TriggerText>

                  <TriggerText>
                    <motion.span
                      animate={isOpen2 ? "open" : "closed"}
                      variants={variantsPlus}
                      transition={transition}
                      onClick={() => setIsOpen2(!isOpen2)}
                      whileHover="hover"

                      className="plus alt" />
                  </TriggerText>
                </div>

                <motion.div
                  animate={isOpen2 ? "open" : "closed"}
                  // initial={{display: 'none'}}
                  variants={variantsDesc1}
                  transition={transition}
                  className="service-body">
                  <div className="mt-5 page-content-description">
                    <div className="longer description-first-element">
                      <h5 className="mt-5">Kancelaria specjalizuje się w sprawach związanych z dochodzeniem odszkodowań, zadośćuczynień, a także rent cywilnych.</h5>
                      <br />
                      <p>Reprezentujemy klientów w sporach przeciwko osobom fizycznym, ale również przeciwko osobom prawnym takim jak zakłady i towarzystwa ubezpieczeniowe. W stosunkach cywilnych bardzo często odpowiedzialność za naprawienie szkody i rekompensatę krzywdy ponosi ubezpieczyciel. Należy pamiętać, że jest to przedsiębiorca, prowadzący działalność gospodarczą w celach zarobkowych. Z tego względu nie można liczyć na szczodrość i empatię ze strony zakładów ubezpieczeń. Niezwykle często zdarza się, że tytułem zadośćuczynienia lub odszkodowania wypłacane są zaniżone kwoty, czasami wręcz symboliczne. Wobec tego aby uzyskać adekwatną do doznanej szkody lub krzywdy kwotę, należy podjąć w tym celu odpowiednie działania.  Jako osoba posiadająca wiedzę oraz doświadczenie w tym zakresie oferuję pomoc na każdym etapie postępowania, zarówno przed wytoczeniem powództwa, jak również w trakcie jego trwania. Częstokroć trudna sytuacja czy to fizyczna, czy psychiczna, zniechęca do podejmowania kroków, szczególnie przeciwko tak dużym podmiotom jak ubezpieczyciele. Wobec tego pomoc profesjonalisty, który kompleksowo zajmie się sprawą, wskaże dokumenty niezbędne do uzyskania należnej kwoty, pomoże ustalić jakie roszczenia przysługują poszkodowanym, określi ich wysokość, przeprowadzi przez cały proces, może okazać się niezbędna.</p>
                      <h5 className="mt-5">Liczne sukcesy w zakresie reprezentowania klientów</h5>
                      <br />
                      <p>Tytułem przykładu należy wskazać, iż z sukcesem reprezentowałem klientów w sprawach o uzyskanie należnych świadczeń w sprawach: o odszkodowania za uszkodzone w kolizjach pojazdy, o zadośćuczynienie i odszkodowanie za błędy medyczne, o zadośćuczynienie za krzywdę doznaną wskutek śmierci osoby najbliższej, o zadośćuczynienie za krzywdę, odszkodowanie za szkodę oraz rentę za utratę zdolności do pracy zarobkowej, zwiększenie potrzeb lub zmniejszenie widoków na przyszłość w sprawach, w których doszło do uszczerbku na zdrowiu czy to wskutek wypadku przy pracy, czy to wskutek wypadku samochodowego, o zadośćuczynienia i odszkodowania za niesłuszne pozbawienie wolności lub tymczasowe aresztowanie, o zadośćuczynienia i odszkodowania dla osób lub rodzin osób, wobec których wydano w latach 1944-1989 r. niesprawiedliwe orzeczenia  za czyny związane lub przypisane z działalnością na rzecz niepodległego bytu Państwa Polskiego. </p>
                    </div>
                    <div className="description-second-element">
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="border-bottom" />

              <div className="single-service">
                <div className="service-heading">
                  <TriggerText>
                    <h3> Upadłość konsumencka</h3>
                  </TriggerText>
                  <TriggerText>
                    <motion.span
                      animate={isOpen3 ? "open" : "closed"}
                      variants={variantsPlus}
                      transition={transition}
                      onClick={() => setIsOpen3(!isOpen3)}
                      whileHover="hover"
                      className="plus alt" />
                  </TriggerText>

                </div>

                <motion.div
                  animate={isOpen3 ? "open" : "closed"}
                  // initial={{display: 'none'}}
                  variants={variantsDesc1}
                  transition={transition}
                  className="service-body">
                  <div className="mt-5 page-content-description">
                    <div className="longer description-first-element">
                      <h5 className="mt-5">Kancelaria oferuje również pomoc w przypadku konieczności ogłoszenia upadłości konsumenckiej.</h5>
                      <br />
                      <p>Postępowanie to jest przeznaczone dla osób, którzy nie mają środków na spłatę kredytów i innych zobowiązań finansowych. Skutkiem ogłoszenia upadłości konsumenckiej jest oddłużenie niewypłacalnego konsumenta poprzez umorzenie całości bądź części jego długów albo ich spłata w ratach. Oferuję pomoc przy wypracowaniu rozwiązań problemów finansowych osób nieprowadzących działalności gospodarczej na każdym etapie ogłaszania upadłości.</p>
                      <p className="mt-5"> Należy podkreślić, że całkowite umorzenie długu jest możliwe jedynie gdy sąd uzna, że dłużnik nie ma majątku bądź nie ma środków do życia i jest trwale niezdolny do spłaty zobowiązań. Wobec czego sytuacje takie zdarzają się wyjątkowo rzadko, taką sytuacją jest między innymi trwała niezdolność do pracy. Znacznie częściej mamy do czynienia z częściowym umorzeniem długów bądź ich spłatą w ratach. Jednakże taka sytuacja niejednokrotnie prowadzi do unormowania sytuacji finansowej dłużnika a tym samym daje szansę na normalne, stabilne życie.
                      </p>
                    </div>
                    <div className="description-second-element">
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="border-bottom" />

              <div className="single-service">
                <div className="service-heading">
                  <TriggerText>
                    <h3>Sprawy rodzinne i opiekuńcze</h3>
                  </TriggerText>
                  <TriggerText>
                    <motion.span
                      animate={isOpen4 ? "open" : "closed"}
                      variants={variantsPlus}
                      transition={transition}
                      onClick={() => setIsOpen4(!isOpen4)}
                      whileHover="hover"
                      className="plus alt" />
                  </TriggerText>

                </div>

                <motion.div
                  animate={isOpen4 ? "open" : "closed"}
                  // initial={{display: 'none'}}
                  variants={variantsDesc1}
                  transition={transition}
                  className="service-body">
                  <div className="mt-5 page-content-description">
                    <div className="longer description-first-element">
                      <h5 className="mt-5">Kancelaria udziela pomocy prawnej w zakresie spraw niezwykle delikatnych jakimi bez wątpienia są sprawy dotyczące naszego życia rodzinnego. </h5>
                      <br />
                      <p>Ze względu na szczególny charakter spraw, którym niejednokrotnie towarzyszy dużo emocji, podchodzę do nich indywidualnie z pełnym zrozumieniem. Reprezentuję klientów w sprawach między innymi o rozwód , separację, unieważnienie małżeństwa, ustalenie obowiązku alimentacyjnego dla dzieci lub byłego małżonka, realizację obowiązku zaspakajania potrzeb rodziny, ograniczenie lub pozbawienie władzy rodzicielskiej, podział majątku, umowy majątkowe, zezwolenie na dokonanie istotnej czynności związanej z potrzebami dziecka (np. wyrażenie zgody na odrzucenie spadku w imieniu małoletniego).</p>
                    </div>
                    <div className="description-second-element">
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="border-bottom" />

              <div className="single-service">
                <div className="service-heading">
                  <TriggerText>
                    <h3>Sprawy spadkowe</h3>
                  </TriggerText>
                  <TriggerText>
                    <motion.span
                      animate={isOpen5 ? "open" : "closed"}
                      variants={variantsPlus}
                      transition={transition}
                      onClick={() => setIsOpen5(!isOpen5)}
                      whileHover="hover"
                      className="plus alt" />
                  </TriggerText>

                </div>

                <motion.div
                  animate={isOpen5 ? "open" : "closed"}
                  // initial={{display: 'none'}}
                  variants={variantsDesc1}
                  transition={transition}
                  className="service-body">
                  <div className="mt-5 page-content-description">
                    <div className="longer description-first-element">
                      <h5 className="mt-5">Kancelaria udziela klientom pomocy prawnej w zakresie regulacji spraw majątkowych, które zaistniały w wyniku śmierci bliskiej osoby.</h5>
                      <br />
                      <p>Po śmierci bliskich często sprawy spadkowe nie są oficjalnie regulowane, często poprzestaje się jedynie na ogólnych ustaleniach poczynionych w gronie rodzinnym. Aby jednak oszczędzić sobie ewentualnych problemów, czy też powstania niedomówień w przyszłości, najlepiej jest uregulować sytuację prawną w sposób formalny. Aby postępowania spadkowe nie spędzały snu z powiek, oferuję pomoc w zakresie spraw spadkowych. Najczęściej występującymi kategoriami spraw, w których oferuję pomoc są sprawy dotyczące stwierdzenia nabycia spadku, nieważności testamentu, działu spadku, przyjęcia oraz odrzucenia spadku jak również sprawy o zachowek.</p>
                    </div>
                    <div className="description-second-element">
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="border-bottom" />

              <div className="single-service">
                <div className="service-heading">
                  <TriggerText>
                    <h3>Sprawy gospodarcze</h3>
                  </TriggerText>
                  <TriggerText>
                    <motion.span
                      animate={isOpen6 ? "open" : "closed"}
                      variants={variantsPlus}
                      transition={transition}
                      onClick={() => setIsOpen6(!isOpen6)}
                      whileHover="hover"
                      className="plus alt" />
                  </TriggerText>

                </div>

                <motion.div
                  animate={isOpen6 ? "open" : "closed"}
                  // initial={{display: 'none'}}
                  variants={variantsDesc1}
                  transition={transition}
                  className="service-body">
                  <div className="mt-5 page-content-description">
                    <div className="longer description-first-element">
                      <h5 className="mt-5">Kancelaria oferuje obsługę prawną podmiotów gospodarczych. </h5>
                      <br />
                      <p>Doradzam już na etapie zakładania działalności gospodarczej. Udzielamy kompleksowej bieżącej obsługi podmiotów gospodarczej, która polega między innymi na sporządzaniu projektów różnego rodzaju dokumentów (m. in. uchwał, zarządzeń, umów handlowych, regulaminów wewnętrznych), opiniujemy umowy handlowe i doradzamy przy ich negocjowaniu. Wielu przedsiębiorców zmaga się z niesumiennymi kontrahentami, którzy nie regulują płatności albo kwestionują wysokość  ustalonego wcześniej wynagrodzenia. Zapewniam kompleksową obsługę podczas egzekucji świadczeń od niesumiennych kontrahentów, a w razie konieczności reprezentuję przedsiębiorców w procesach sądowych.
                      </p>
                    </div>
                    <div className="description-second-element">
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="border-bottom" />

              <div className="single-service">
                <div className="service-heading">
                  <TriggerText>
                    <h3>Sprawy administracyjne</h3>
                  </TriggerText>
                  <TriggerText>
                    <motion.span
                      animate={isOpen7 ? "open" : "closed"}
                      variants={variantsPlus}
                      transition={transition}
                      onClick={() => setIsOpen7(!isOpen7)}
                      whileHover="hover"
                      className="plus alt" />
                  </TriggerText>

                </div>

                <motion.div
                  animate={isOpen7 ? "open" : "closed"}
                  // initial={{display: 'none'}}
                  variants={variantsDesc1}
                  transition={transition}
                  className="service-body">
                  <div className="mt-5 page-content-description">
                    <div className="longer description-first-element">
                      <h5 className="mt-5">Kancelaria oferuje pomoc prawną obejmującą reprezentację klienta we wszelkich postępowaniach przed organami administracji publicznej na każdym etapie, zarówno toczącej się procedury administracyjnej jak i sądowo-administracyjnej.</h5>
                      <br />
                      <p>Zajmuję się również sporządzaniem wniosków inicjujących postępowania administracyjne, przygotowaniem wniosków i stanowisk stron w trakcie toczącego się postępowania administracyjnego, pozyskiwaniem w imieniu klientów niezbędnych zaświadczeń z urzędów administracji państwowej i samorządowej oraz urzędów skarbowych. Katalog spraw administracyjnychl jest na tyle szeroki, iż nie sposób jest wskazać przykładowych kategorii spraw, w których kancelaria zapewnia obsługę prawną.
                      </p>
                    </div>
                    <div className="description-second-element">
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="border-bottom" />
            </div>

          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
export default TeamPage

