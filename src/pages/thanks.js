import React from "react"
import SEO from "../components/SEO"
import { Link } from "gatsby"

const thanks = () => (
  <>
    <SEO title="⚖️ &nbsp; Formularz Zgłoszeniowy" description="Zadzwoń ☎ 606 502 202 i Umów Się na Spotkanie. Adwokat Gdynia - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdynia"/>
    <div className="error-page">
      <div>
        <h2>404</h2>
        <h6>Dziękuję za wypełnienie formularza. Naciśnij przycisk poniżej aby wrócić do strony głównej.</h6>
        <Link to="/"> Wróć na główną </Link>
      </div>
    </div>
  </>
)

export default thanks
