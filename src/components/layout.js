import { Link } from "gatsby"
import * as React from "react"

const Layout = ({pageTitle, children}) => {
  return (
    <>
    <title>{pageTitle}</title>
    <section>
        {children}
    </section>
    </>
    )
}

export default Layout
