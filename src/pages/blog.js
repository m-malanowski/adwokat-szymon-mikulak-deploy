import React from "react"
import { graphql } from "gatsby"
import Subheader from "../components/Subheader"
import Footer from "../components/Footer"
import subHeaderPhoto from "../assets/imgs/home-slider/adwokatGdyniaPoradyPrawne.jpg"
import Button from "../components/Button"
import SEO from "../components/SEO"
import TriggerText from "../components/TriggerText"
// ...GatsbyImageSharpFluid

const Blog = ({data}) => (
  <>
    <SEO title="⚖️ &nbsp; Blog Prawniczy, Porady Prawne | Kancelaria Adwokacka Szymon Mikulak." description="Porady Prawne z Zakresu Prawa Cywilnego, Prawa Karnego, Prawa Gospodarczego"/>

    <div className="blog-page">
      <Subheader pagePreTitle={'Blog'} pageTitle={'Porady Prawne. Blog prawniczy'} subImg={subHeaderPhoto}/>
      <div className="page-content container-fluid">
        <div className="page-description-wrapper">
          {/*<div className="page-content-description">*/}
          { data.allStrapiBlogs.nodes.map(node=>(
            <div key={node.id} className="article-description">
              <div>
                <TriggerText>
                  <h4>{node.title}</h4>
                </TriggerText>
                <p>{node.description}</p>
                <br/>
                <Button url={node.slug} buttonDesc="czytaj więcej"/>
              </div>
              <div className="article-date">
                <TriggerText>
                  <span>{node.dateDay}</span>
                </TriggerText>
                <p>{node.date}</p>
              </div>
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    </div>
  </>
)

export const query = graphql`
    {
        allStrapiBlogs(sort: {fields: date, order: DESC}) {
            nodes {
                slug
                description
                title
                date(formatString: "MMMM YYYY", locale: "pl")
                dateDay(formatString: "D", locale: "pl")
                content
                id
                category
            }
        }
    }
`
export default Blog
