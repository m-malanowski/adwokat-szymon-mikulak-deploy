import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
const Button = ({url, buttonDesc}) => {
  return(
    <>
      <Link to={url} className="button learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon button-arrow"/>
        </span>
        <span className="button-text">{buttonDesc}</span>
      </Link>
      {/*<Link to={url} className="cta">*/}
      {/*  <span>{buttonDesc}</span>*/}
      {/*  <svg width="13px" height="10px" viewBox="0 0 13 10">*/}
      {/*    <path d="M1,5 L11,5"></path>*/}
      {/*    <polyline points="8 1 12 5 8 9"></polyline>*/}
      {/*  </svg>*/}
      {/*</Link>*/}
    </>
  )
}
export default Button