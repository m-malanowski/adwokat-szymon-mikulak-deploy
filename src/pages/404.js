import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import Links from "../constants/links"

const Error = () => {
  return (
    <>
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
