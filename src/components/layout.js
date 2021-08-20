import { Link } from "gatsby"
import * as React from "react"

const Layout = ({pageTitle, children}) => {
  return (
    <>
    <title>{pageTitle}</title>
    <section style={{overflow : "hidden", padding : "0"}}>
        {children}
    </section>
    </>
    )
}

export default Layout
