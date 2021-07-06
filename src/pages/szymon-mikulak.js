import React from "react"
import img1 from "../assets/imgs/portrait/adwokat-gdynia-mikulak2.jpg"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { motion } from "framer-motion"
const icons = {
  'mail': 'M928 128h-832c-52.8 0-96 43.2-96 96v640c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-640c0-52.8-43.2-96-96-96zM398.74 550.372l-270.74 210.892v-501.642l270.74 290.75zM176.38 256h671.24l-335.62 252-335.62-252zM409.288 561.698l102.712 110.302 102.71-110.302 210.554 270.302h-626.528l210.552-270.302zM625.26 550.372l270.74-290.75v501.642l-270.74-210.892z',
  'map': 'M672 192l-320-128-352 128v768l352-128 320 128 352-128v-768l-352 128zM384 145.73l256 102.4v630.138l-256-102.398v-630.14zM64 236.828l256-93.090v631.8l-256 93.088v-631.798zM960 787.172l-256 93.092v-631.8l256-93.090v631.798z',
  'phone': 'M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128-128-256-192-256-192 192-192 192c0 128 131.5 387.5 256 512s384 256 512 256c0 0 192-128 192-192s-192-256-256-192z',
};
const transition = {delay: .2, duration: 1, ease: [0.6, 0.01, -0.05, 0.9]};

const variants = {
  initial: {
    y: 50,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: 50,
    opacity: 0
  }
}

const TeamMember = () => (
   <>
     <Helmet bodyAttributes={{
       id: 'team-member-page'
     }}   />
    <div className="team-member-page">
      <Link className="x" to="/adwokat-gdynia"/>
      <div className="page-content container-fluid">
        <div className="img-wrapper">
          <motion.img
            variants={variants} initial="initial" animate="animate" exit="exit" transition={transition}
            src={img1} alt="" />
        </div>

        <motion.div
          variants={variants} initial="initial" animate="animate" exit="exit" transition={transition}
          className="team-member-description">
          <div className="bio-header">
            <div>
              <h3>
                Szymon Mikulak
              </h3>
              <p>
                Adwokat
              </p>
            </div>
          </div>
          <br/>
          <h5 className="mt-5 mb-5">Życiorys</h5>
          <p className="team-member-bio">Jestem wpisany na listę Adwokatów Pomorskiej Izby Adwokackiej w Gdańsku, nr wpisu: GDA/ADW/3522. Studia na kierunku Prawo ukończyłem w 2016 r. na Uniwersytecie Warmińsko-Mazurskim w Olsztynie, broniąc pracę magisterską pt. Przekształcenie spółki cywilnej w spółki prawa handlowego pod kierunkiem dra hab. Adama Bieranowskiego.
            <br/><br/>
            Już podczas studiów łączyłem naukę z pracą w renomowanej kancelarii adwokackiej . W 2017 r. rozpocząłem aplikację adwokacką przy Pomorskiej Izbie Adwokackiej w Gdańsku. Zwieńczeniem trzyletniej aplikacji było uzyskanie pozytywnego wyniku z egzaminu adwokackiego. Doświadczenie zdobywałem współpracując z wieloma znakomitymi adwokatami w kancelarii adwokackiej w Gdańsku.
            <br/><br/>
            Zdobyte umiejętności i doświadczenie pozwalają mi na niesienie pomocy w różnych dziedzinach prawa. Specjalizuję się jednak w prowadzeniu spraw karnych, cywilnych głównie w zakresie spraw odszkodowawczych, jak również w doradzaniu i reprezentowaniu przedsiębiorców.
          </p>

          <div className="team-member-details">
            <p>
              <svg width="15" height="15" viewBox="0 0 1024 1024">
                <path d={icons.phone}/>
              </svg>
              Telefon: 506 494 453
            </p>
            <p>
              <svg width="15" height="15" viewBox="0 0 1024 1024">
                 <path d={icons.mail}/>
              </svg>
              Email: <a href="mailto:info@adwokatmikulak.pl">info@adwokatmikulak.pl</a>
            </p>
          </div>

        </motion.div>

      </div>
    </div>
  </>
)

export default TeamMember
