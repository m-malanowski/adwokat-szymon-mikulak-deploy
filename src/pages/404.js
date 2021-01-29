import React from "react"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <>
      <SEO title="⚖️ &nbsp; 404" description="Zadzwoń ☎ 606 502 202 i Umów Się na Spotkanie. Adwokat Gdynia - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdynia"/>
      <div className="error-page">
        <div>
          <h2>404</h2>
          <h6>Przepraszamy, ale strona której szukasz nie istnieje. Naciśnij przycisk poniżej aby wrócić do strony głównej.</h6>
          <Link to="/"> Wróć na główną </Link>
        </div>
      </div>
    </>
  )
}

export default Error
