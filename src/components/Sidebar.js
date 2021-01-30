import React from "react"
import Links from "../constants/links"

const Sidebar = ({toggleSideBar, isOpen}) => {
  return (
    <>
      <div className={`sidebar ${isOpen? "show-sidebar" : ""}`}>
        <span className="x" onClick={toggleSideBar}/>
        <div className="side-container"  onClick={toggleSideBar}>
          <Links styleClass="sidebar-links"/>
        </div>
      </div>
    </>
  )
}

export default Sidebar
