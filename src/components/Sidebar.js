import React from "react"
import Links from "../constants/links"

const Sidebar = ({toggleSideBar, isOpen}) => {
  return (
    <>
      <div className={`sidebar ${isOpen? "show-sidebar" : ""}`}>
        <button>
          <span className="x" onClick={toggleSideBar}/>
        </button>
        <div className="side-container"  onClick={toggleSideBar}>
          <Links styleClass="sidebar-links"/>
        </div>
      </div>
    </>
  )
}

export default Sidebar
