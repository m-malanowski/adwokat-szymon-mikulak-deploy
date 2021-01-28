import React from "react"
import Subheader from "../components/Subheader"
import subHeaderPhoto from "../assets/imgs/home-slider/adwokatGdyniaPoradyPrawne.jpg"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

const PrivacyPage = ({ data }) => (
  <>
    <div className="policy-page">
      <Subheader pageTitle={'Polityka prywatności'} subImg={subHeaderPhoto}/>
      <div className="page-content container-fluid">
        <ReactMarkdown source={data.policy.content}/>
        <Footer/>
      </div>
    </div>
  </>
)

export const query = graphql`
    query MyQuery {
      policy:  strapiPrivatePolicy {
            content
        }
    }
`

export default PrivacyPage;