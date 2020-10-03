import React from "react"
import { Link } from "gatsby"
import { IdentityContextProvider } from "react-netlify-identity-widget";
import "./layout.css"

const Layout = ({ children }) => (
  <IdentityContextProvider url="https://marin-city-co-op.netlify.app">
    <header>
      <Link to="/">Co Op App</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
)

export default Layout
