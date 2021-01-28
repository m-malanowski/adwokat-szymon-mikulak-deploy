import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import { Helmet } from "react-helmet"
import Button from "../components/Button"
import SEO from "../components/SEO"

const ArticleSingle = ({ data }) => {
  return <>
    <SEO title={data.blog.title + ' Porady Prawne | Blog'} description={data.blog.description}/>
    <Helmet bodyAttributes={{
      id: 'article-page'
    }}   />
    <div className="article-page">
      {/*<Subheader pagePreTitle={'O kancelarii'} pageTitle={'Stale powiększające się grono zaufanych Klientów.'} subImg={subHeaderPhoto}/>*/}
      <div className="page-content container-fluid">
        <div className="article">
          <div className="article-header">
            <div>
              <h1> { data.blog.title } </h1>
              {/*<h5>Data publikacji: <br/> <span>21/02/2020</span></h5>*/}
              <p>Data publikacji: { data.blog.date }</p>
            </div>
          </div>
          <div className="border-bottom"/>
          <div className="article-body">
            <h6 className="mb-5">{data.blog.description}</h6>
            <ReactMarkdown source={data.blog.content}/>
          </div>

          <div className="back-button">
            <Button url='/blog' buttonDesc='Powrót'/>
          </div>

        </div>

      </div>
    </div>
  </>
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      description
      date(formatString: "D MMMM YYYY", locale: "pl")
    }
  }
`

export default ArticleSingle
